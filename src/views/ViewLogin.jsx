import '../styles/style_Login.css'
import iconoLoginCurveado from '../assets/icono_curveado_login.png'
import { useEffect } from 'react';
import full_logo_HUG from '../assets/FullLogo_HUG_with_letters.png'

import logo_abajo from '../assets/logo_HUG_abajo.png'

import logo_arriba from '../assets/logo_HUG_arriba.png'



import { changeToSignOrLog } from '../scripts/ViewLogin/changeToSignOrLog';

function ViewLogin() {
    useEffect(() => {
        changeToSignOrLog()
    })

    return (
        <div className='myBody'>
            <div className='myContainerIcon curvedRight' id='myIconLog'>

                <div className='myMsgToSignUpOrLog MsgRight'>
                    <img src={full_logo_HUG} className='myFullLogo'></img>
                    ¿No tienes una cuenta?, has click abajo para crear una!

                    <button id='myBtSignUp' className='myBtSignOrLog'>Sign Up</button>
                </div>
                <img src={iconoLoginCurveado} className='myCurvedIcon' >
                </img>
            </div>

            <div className='myContainerIcon curvedLeft' id='myIconSign'>
                <div className='myMsgToSignUpOrLog MsgLeft'>
                    <img src={full_logo_HUG} className='myFullLogo'></img>
                    ¿Tienes una cuenta?, has click abajo para iniciar sesión!

                    <button id='myBtLogin' className='myBtSignOrLog'>Log In</button>
                </div>
                <img src={iconoLoginCurveado} className='myCurvedIcon left' id='left' ></img>
            </div>

            <div className='myContainerLogSign' id='myInfoLog' >
                <div className='myInfo'>
                    <div className='myInfo-item'>
                        Inicia Sesión
                    </div>
                    <div className='myInfo-item'>

                        {/* input de usuario o correo */}
                        <div className='myInfo-sub-item'>
                            <label>Correo: </label>
                            <input type='text' className='myInput' placeholder='Ingresa tu correo...'></input>
                        </div>

                        {/* input de contraseña */}
                        <div className='myInfo-sub-item'>
                        <label>Contraseña: </label>
                        <input type='password' className='myInput' placeholder='Ingresa tu contraseña...'></input>
                        </div>

                        {/* boton para iniciar sesion */}
                        <div className='myInfo-sub-item'>
                            <button className='myBtStartSession' type='button'>Iniciar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='myContainerLogSign myInvisible' id='myInfoSign'>
                <div className='myInfo'>
                    {/* ----- */}

                   
                    <div className='myInfo-item'>
                        Regístrate
                        
                    </div>
                    
                    <div className='myInfo-item'>
                      
                        {/* input de usuario o correo */}
                        <div className='myInfo-sub-item'>
                            <label>Correo: </label>
                            <input type='text' className='myInput' placeholder='Ingresa tu correo...'></input>
                        </div>

                        {/* input de contraseña */}
                        <div className='myInfo-sub-item'>
                        <label>Contraseña: </label>
                        <input type='password' className='myInput' placeholder='Crea una contraseña...'></input>
                        </div>

                        {/* boton para iniciar sesion */}
                        <div className='myInfo-sub-item'>
                            <button className='myBtStartSession btRegister' type='button' id='btRegister'>Registrarte</button>
                        </div>
                    </div>

                    <div className='myDNone' id='myFirstViewRegister'>
                      <div className='myFirstViewRegister-item myDNone'>
                        Valida tu Correo:
                      </div>
                      <div className='myFirstViewRegister-item myDNone'>
                        <div className='myEmailVerified'>
                               <input type='text' className='myInputValidated toBottom' placeholder='XXXX - XXXX'></input>
                               <button className='myBtStartSession toBottom' id='btValidateCode'>Validar</button>
                               <img src={logo_arriba} className='myMiniSpinner arriba' id='myUpLogo'></img>
                               <img src={logo_abajo} className='myMiniSpinner abajo' id='myDownLogo'></img>
                        </div>
                      </div>
                    </div>
                        {/* ------ */}
                </div>
            </div>






        </div>
    );
}

export default ViewLogin;