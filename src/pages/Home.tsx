import { useState } from 'react'
import backimage from '../assets/images/back.svg'
import '../styles/inicial.scss'


export function Home() {

    const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    return(
        //<img src = {backimage} alt = 'Plano de Fundo'/>
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
                                //  value = {password}
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


  
    )
}