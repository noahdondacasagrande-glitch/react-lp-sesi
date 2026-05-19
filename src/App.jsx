import s from './App.module.css'
import a from './01.jpg'
import b from './02.jpg'
import c from './03.jpg'

function App() {


return (
    <>

            <nav>
                    <span className={s.navitems} onclick="navTo('s1')">
                        <img src="../assets/icons/casas.png" alt="JOGO" width="30px"/>
                        <a className={s.navwords} >JOGO</a>
                    </span>
                    <span className={s.navitems} onclick="navTo('s2')">
                        <img src="../assets/icons/caixa.png" alt="Carros" width="30px"/>
                        <a className={s.navwords} >Carros</a>
                    </span>
                    <span className={s.navitems} onclick="navTo('s3')">
                        <img src="../assets/icons/video.png" alt="Video" width="30px"/>
                        <a className={s.navwords} >Video</a>
                    </span>        
                    <span className={s.navitems} onclick="navTo('s4')">
                        <img src="../assets/icons/contato.png" alt="Contato" width="30px"/>
                        <a className={s.navwords} >Contato</a>
                    </span>
            </nav>

            <main>
                <section id="s1">
                        <h1>need for speed</h1>
                        <h2>best racing game of all time</h2>
                </section>

                <section id="s2">
                    <div className={s.card}>
                        <img src= {a} alt="" width="300px" height="auto"/>
                        <div>
                            <h4>ola2</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus corporis temporibus culpa praesentium cum impedit. </p>
                        </div>
                    </div>
                    <div className={s.card}>
                    <img src={b} alt="" width="300px" height="auto"/>
                        <div>
                            <h4>ola1</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem corrupti quia, in deleniti sint </p>
                        </div>
                    </div>
                    <div className={s.card}>
                    <img src= {c} alt="" width="300px" height="auto"/>
                        <div>
                            <h4>ola</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eveniet alias? Architecto, repellat magnam iusto dolorum sequi </p>
                        </div>
                    </div>
                    

                </section>

                <section id="s3">
                    <iframe className={s.vid} width="560" height="315" src="https://www.youtube.com/embed/2FhCCBXhNr4?si=iBD84S5S-wUlvDG-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>

                <section id="s4">
                    <h3>Contato</h3>
                    <div className={s.formulario}>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" placeholder="Digite seu nome"/>
                        <label for="assunto" id="">mensagem</label>
                        <textarea placeholder="digite uma mensagem" id="assunto"></textarea>
                        <button onclick="enviar()">ENVIAR</button>
                    </div>
                </section>

            </main>

            <footer>
                    <a href="https://www.facebook.com" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a  href="https://www.instagram.com" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a  href="https://www.linkedin.com" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
            </footer>
    </>
  )
}

export default App
