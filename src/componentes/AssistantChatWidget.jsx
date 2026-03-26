import { useEffect, useRef, useState } from 'react';
import { getMockChatResponse } from '../data/portfolioChatMock';

function renderMessageText(text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const lines = text.split('\n');

  return lines.map((line, lineIndex) => {
    const parts = line.split(urlPattern);

    return (
      <span key={`line-${lineIndex}`}>
        {parts.map((part, partIndex) =>
          /^https?:\/\//.test(part) ? (
            <a
              key={`part-${lineIndex}-${partIndex}`}
              href={part}
              target="_blank"
              rel="noreferrer"
            >
              {part}
            </a>
          ) : (
            <span key={`part-${lineIndex}-${partIndex}`}>{part}</span>
          )
        )}
        {lineIndex < lines.length - 1 ? <br /> : null}
      </span>
    );
  });
}

export default function AssistantChatWidget({ content, languageCode = 'PT' }) {
  const initialMessages = [
    {
      id: 'assistant-greeting',
      author: 'assistant',
      text: content.assistantGreeting
    }
  ];
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isAssistantExpanded, setIsAssistantExpanded] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);
  const [assistantInput, setAssistantInput] = useState('');
  const [assistantMessages, setAssistantMessages] = useState(initialMessages);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const messagesEndRef = useRef(null);
  const widgetRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    setAssistantMessages(initialMessages);
    setAssistantInput('');
    setIsClearDialogOpen(false);
  }, [content]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [assistantMessages, isAssistantOpen]);

  useEffect(() => {
    if (!isAssistantOpen) {
      return undefined;
    }

    function handleClickOutside(event) {
      const clickedInsideWidget = widgetRef.current?.contains(event.target);
      const clickedInsideDialog = dialogRef.current?.contains(event.target);

      if (!clickedInsideWidget && !clickedInsideDialog) {
        setIsAssistantOpen(false);
        setIsAssistantExpanded(false);
        setIsClearDialogOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAssistantOpen]);

  async function getAssistantResponse(message) {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 450);
    });

    return {
      text: getMockChatResponse(message, languageCode)
    };
  }

  async function handleAssistantSubmit(event) {
    event.preventDefault();

    const trimmedInput = assistantInput.trim();

    if (!trimmedInput || isSubmitting) {
      return;
    }

    const timestamp = Date.now();
    const userMessage = {
      id: `user-${timestamp}`,
      author: 'user',
      text: trimmedInput
    };

    const loadingMessage = {
      id: `assistant-loading-${timestamp + 1}`,
      author: 'assistant',
      text: content.assistantLoadingText,
      isLoading: true
    };

    setAssistantMessages((currentMessages) => [...currentMessages, userMessage, loadingMessage]);
    setAssistantInput('');

    setIsSubmitting(true);

    try {
      const data = await getAssistantResponse(trimmedInput);
      const assistantReply = {
        id: `assistant-${timestamp + 2}`,
        author: 'assistant',
        text:
          typeof data?.text === 'string' && data.text.trim()
            ? data.text.trim()
            : content.assistantErrorText
      };

      setAssistantMessages((currentMessages) => [
        ...currentMessages.filter((message) => message.id !== loadingMessage.id),
        assistantReply
      ]);
    } catch {
      setAssistantMessages((currentMessages) => [
        ...currentMessages.filter((message) => message.id !== loadingMessage.id),
        {
          id: `assistant-error-${timestamp + 3}`,
          author: 'assistant',
          text: content.assistantErrorText
        }
      ]);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div ref={widgetRef} className="assistant-widget-shell">
        {isAssistantOpen ? (
          <aside
            className={`assistant-widget ${isAssistantExpanded ? 'is-expanded' : ''}`}
            aria-label={content.assistantTitle}
          >
            <div className="assistant-widget-toolbar">
              <button
                type="button"
                className="assistant-toolbar-button assistant-toolbar-expand"
                aria-label={isAssistantExpanded ? 'Minimize chat' : 'Expand chat'}
                data-tooltip={content.assistantExpandLabel}
                onClick={() => setIsAssistantExpanded((current) => !current)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" />
                  <path d="M8 8 3 3M16 8l5-5M8 16l-5 5M16 16l5 5" />
                </svg>
              </button>

              <button
                type="button"
                className="assistant-toolbar-button assistant-toolbar-clear"
                aria-label={content.assistantClearLabel}
                data-tooltip={content.assistantEditLabel}
                onClick={() => setIsClearDialogOpen(true)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 4h6l1 2h4" />
                  <path d="M6 8h12" />
                  <path d="m8 8 1 10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2l1-10" />
                  <path d="M10 11v5" />
                  <path d="M14 11v5" />
                </svg>
              </button>

              <button
                type="button"
                className="assistant-toolbar-button assistant-toolbar-close"
                aria-label="Close chat"
                data-tooltip={content.assistantCloseLabel}
                onClick={() => {
                  setIsAssistantOpen(false);
                  setIsAssistantExpanded(false);
                  setIsClearDialogOpen(false);
                  setAssistantInput('');
                }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6 18 18" />
                  <path d="M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="assistant-widget-window">
              <div className="assistant-widget-messages" aria-live="polite">
                {assistantMessages.length ? (
                  assistantMessages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`assistant-chat-row assistant-chat-row-${message.author}`}
                    >
                      {message.author === 'assistant' ? (
                        <div className="assistant-widget-bot assistant-chat-avatar">
                          <svg viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M16 4v5" />
                            <path d="M9 8h14a4 4 0 0 1 4 4v8a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5v-8a4 4 0 0 1 4-4Z" />
                            <path d="M12 16h.01" />
                            <path d="M20 16h.01" />
                            <path d="M12 22h8" />
                          </svg>
                        </div>
                      ) : (
                        <div className="assistant-widget-user assistant-chat-avatar">
                          <svg viewBox="0 0 32 32" aria-hidden="true">
                            <circle cx="16" cy="11" r="5" />
                            <path d="M7 26a9 9 0 0 1 18 0" />
                          </svg>
                        </div>
                      )}

                      <div
                        className={`assistant-chat-bubble ${
                          index === 0 && message.author === 'assistant'
                            ? 'assistant-chat-bubble-greeting'
                            : ''
                        } ${message.isLoading ? 'assistant-chat-bubble-loading' : ''}`}
                      >
                        <p>{renderMessageText(message.text)}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="assistant-chat-empty">{content.assistantEmptyState}</p>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form className="assistant-widget-input" onSubmit={handleAssistantSubmit}>
                <input
                  type="text"
                  value={assistantInput}
                  onChange={(event) => setAssistantInput(event.target.value)}
                  placeholder={content.assistantInputPlaceholder}
                  aria-label={content.assistantInputPlaceholder}
                  disabled={isSubmitting}
                />
                <button type="submit" aria-label="Send message" disabled={isSubmitting}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 3 3 11l7 2 2 8 9-18Z" />
                    <path d="m10 13 11-10" />
                  </svg>
                </button>
              </form>
            </div>
          </aside>
        ) : (
          <button
            type="button"
            className="assistant-launcher"
            aria-label={content.assistantTitle}
            onClick={() => setIsAssistantOpen(true)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 7h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-7l-4 3v-3H6a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Z" />
              <path d="M8 11h8" />
              <path d="M8 15h5" />
            </svg>
          </button>
        )}
      </div>

      {isClearDialogOpen ? (
        <div className="assistant-dialog-backdrop" role="presentation">
          <div ref={dialogRef} className="assistant-dialog" role="dialog" aria-modal="true">
            <h3>{content.assistantClearTitle}</h3>
            <p>{content.assistantClearDescription}</p>
            <div className="assistant-dialog-actions">
              <button type="button" onClick={() => setIsClearDialogOpen(false)}>
                {content.assistantCancel}
              </button>
              <button
                type="button"
                className="assistant-dialog-confirm"
                onClick={() => {
                  setAssistantMessages(initialMessages);
                  setAssistantInput('');
                  setIsSubmitting(false);
                  setIsClearDialogOpen(false);
                }}
              >
                {content.assistantConfirm}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
