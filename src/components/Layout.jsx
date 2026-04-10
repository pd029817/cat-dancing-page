function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="title">🐱 댄싱 캣</h1>
        <p className="subtitle">고양이가 신나게 춤을 춥니다!</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Made with ❤️ &amp; React</p>
      </footer>
    </div>
  );
}

export default Layout;
