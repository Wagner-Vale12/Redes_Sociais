export default function ScrollTopButton({ onClick }) {
  return (
    <button type="button" className="scroll-top-button" onClick={onClick}>
      <span aria-hidden="true">↑</span>
    </button>
  );
}
