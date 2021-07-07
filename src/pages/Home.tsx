import backgroundimage from '../assets/images/back.svg'
import '../styles/inicial.scss'

export function Home() {
    return(
        <div id="auth">
            <aside>
             
                <strong>NOME DA EMPRESA</strong>
            </aside>
            <main>
                <div>
                    <strong>LOGIN</strong>

                    <form id="autenticacao">
                        <div className="dados">
                        <input type="text" 
                            placeholder="Digite seu e-mail"/>
                        </div>
                        <div className="dados">
                        <input type="text" 
                            placeholder="Digite sua senha"/>
                        </div>
                        <div>
                        <button type="submit" >
                            Entrar
                        </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}