function BackToTopButton({ show, onClick }) {
  return (
    <button
      className={`back-to-top ${show ? 'is-visible' : ''}`}
      type="button"
      aria-label="Back to top"
      onClick={onClick}
    >
      ↑
    </button>
  )
}

export default BackToTopButton
