import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      {/* Desktop Version */}
      <div className="desktop-page">
        <div className="container">
          <header className="header">
            <div className="logo">
              GEETHSOWRI <span>/</span>DEV
            </div>
            <nav className="nav">
              <a className="active" href="#">
                home
              </a>
              <a className="non-clickale" href="#">
                my work
              </a>
              <a className="non-clickale" href="#">
                collaborate
              </a>
              <div className="nav-right">
                <a href="https://leetcode.com/u/an_astronaut">leetcode</a>
                <a href="https://www.codechef.com/users/an_astronaut">codechef</a>
              </div>
              <div className="nav-right">
                <a href="https://github.com/geethsowri">github</a>
                <a href="https://linkedin.com/in/geethsowri">linkedin</a>
                <a href="mailto:nainalageethsowri.com">contact</a>
              </div>
            </nav>
          </header>

          <main className="content">
            <div className="message">
              complete portfolio under development
              <br />
              meanwhile, read my articles on
              <a href="https://medium.com/@geethsowri" className="medium-link">
                medium
              </a>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-page">
        <div className="container">
          <header className="header">
            <div className="logo">
              GEETHSOWRI/DEV
            </div>
            <nav className="nav">
              <a className="active" href="#">
                home
              </a>
              <a className="non-clickale" href="#">
                my work
              </a>
              <a className="non-clickale" href="#">
                collaborate
              </a>
              <div className="nav-right">
                <a href="https://leetcode.com/u/an_astronaut">leetcode</a>
                <a href="https://www.codechef.com/users/an_astronaut">codechef</a>
                <a href="https://github.com/geethsowri">github</a>
                <a href="https://linkedin.com/in/geethsowri">linkedin</a>
              </div>
            </nav>
          </header>

          <main className="content">
            <div className="message">
              complete portfolio under development
              <br />
              meanwhile, read my articles on
              <a href="https://medium.com/@geethsowri" className="medium-link">
                medium
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
