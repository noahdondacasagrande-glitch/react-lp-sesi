import { useEffect } from "react";
import s from "./App.module.css";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const footer = document.querySelector("footer");

      if (window.scrollY > 0) {
        nav.classList.add("cs");
        footer.classList.add("ft");
      } else {
        nav.classList.remove("cs");
        footer.classList.remove("ft");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function navTo(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function enviar() {
    alert("Mensagem enviada!");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            NDF
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="s1" onClick={() => navTo("#s1")}>
                Home
              </a>
              <a className="nav-link" href="#s2" onClick={() => navTo("s2")} >
                Features
              </a>
              <a className="nav-link" href="#s3"onClick={() => navTo("s3")}>
                Pricing
              </a>
              <a className="nav-link " href="#s4"onClick={() => navTo("s4")}>
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className={s.s1} id="s1">
          <h1>need for speed</h1>
          <h2>best racing game of all time</h2>
        </section>

        <section className={s.s2} id="s2">
          <div className={s.card}>
            <img src="/01.jpg" alt="carro 1" width="300px" />
            <div>
              <h4>ola2</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div className={s.card}>
            <img src="/02.jpg" alt="carro 2" width="300px" />
            <div>
              <h4>ola1</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div className={s.card}>
            <img src="/03.jpg" alt="carro 3" width="300px" />
            <div>
              <h4>ola</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </section>

        <section className={s.s3} id="s3">
          <iframe
            className={s.vid}
            src="https://www.youtube.com/embed/2FhCCBXhNr4?si=iBD84S5S-wUlvDG-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>

        <section className={s.s4} id="s4">
          <h3>Contato</h3>

          <div className={s.formulario}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Digite seu nome" />

            <label htmlFor="assunto">Mensagem</label>
            <textarea id="assunto" placeholder="Digite uma mensagem"></textarea>

            <button onClick={enviar}>ENVIAR</button>
          </div>
        </section>
      </main>

      <footer>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
