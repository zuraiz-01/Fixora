function Header({ isMenuOpen, onToggleMenu, onNavClick }) {
  return (
    <header className="topbar reveal">
      <div className="brand">
        <span className="brand-mark">F</span>
        <span className="brand-name">Fixora</span>
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
        <a href="#home" onClick={(event) => onNavClick(event, 'home')}>
          Home
        </a>
        <a href="#about" onClick={(event) => onNavClick(event, 'about')}>
          Pages
        </a>
        <a href="#services" onClick={(event) => onNavClick(event, 'services')}>
          Services
        </a>
        <a href="#projects" onClick={(event) => onNavClick(event, 'projects')}>
          Projects
        </a>
        <a href="#contact" onClick={(event) => onNavClick(event, 'contact')}>
          Contact
        </a>
      </nav>
      <button
        className="menu-pill"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={onToggleMenu}
      >
        <span className="menu-dot" />
        <span className="menu-dot" />
        <span className="menu-dot" />
        <span className="menu-dot" />
      </button>
    </header>
  )
}

export default Header
