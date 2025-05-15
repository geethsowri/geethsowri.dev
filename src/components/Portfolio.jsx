import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div class="container">
        <header class="header">
          <div class="logo">
            GEETHSOWRI<span>/</span>DEV
          </div>
          <nav class="nav">
            <a class="active" href="#">
              home
            </a>
            <a class="non-clickale" href="#">
              my work
            </a>
            <a class="non-clickale" href="#">
              collaborate
            </a>
            <div class="nav-right">
              <a href="https://leetcode.com/u/an_astronaut">leetcode</a>
              <a href="https://www.codechef.com/users/an_astronaut">codechef</a>
            </div>
            <div class="nav-right">
              <a href="https://github.com/geethsowri">github</a>
              <a href="https://linkedin.com/in/geethsowri">linkedin</a>
              <a href="mailto:nainalageethsowri.com">contact</a>
            </div>
          </nav>
        </header>

        <main class="content">
          <div class="message">
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
  );
};

export default Portfolio;
