import { useState } from 'react'
import backimage from '../assets/images/back.jpg'
import '../styles/inicial.scss'

export function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className='background'>

            <img src = {backimage}/>
        
            <div id="auth"> 

                <aside>
                    <strong>NOME DA EMPRESA</strong>
                </aside>
                <main>
                    <strong>LOGIN</strong>
                    <form id= "autenticacao">
                        <div>
                        <input type = "text"  className = 'dados'
                            placeholder= "Digite seu e-mail" 
                            value = {email}
                            onChange = {
                                (event) => {
                                    setEmail(event.target.value)
                                }
                            }
                        />
                        </div>
                        <div>
                        <input type = "password" className = 'dados'
                            placeholder = "Digite sua senha"
                            value = {password}
                            onChange = {
                                (event) => {
                                    setPassword(event.target.value)
                                }
                            }
                        />
                        </div>
                        <div className = 'buttonSubmit'>
                        <button type="submit" className = 'buttonAuth'>
                            Entrar
                        </button>
                        </div>
                    </form>
                </main>
            </div>
        </div> 
    )
}