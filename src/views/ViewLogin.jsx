import '../styles/style_Login.css'
import iconoLoginCurveado from '../assets/Icono_curveado_login.png'
import { useEffect } from 'react';
import full_logo_HUG from '../assets/FullLogo_HUG_with_letters.png'
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import google_icon from '../assets/google_icon.png'
import logo_abajo from '../assets/logo_HUG_abajo.png'

import logo_arriba from '../assets/logo_HUG_arriba.png'

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


import { changeToSignOrLog } from '../scripts/ViewLogin/changeToSignOrLog';

function ViewLogin() {
    useEffect(() => {
        // Llamamos a la función que registra los listeners
        const cleanup = changeToSignOrLog();

        // Verifica que la librería esté correctamente cargada
        if (window.google && window.google.accounts) {
            window.google.accounts.id.initialize({
                client_id: '689575216932-dltaibglvgc9r6gbeco0005sbsbuq4m7.apps.googleusercontent.com', // Usa tu Client ID de Google
                callback: handleCredentialResponse,
            });
        }

        // Limpiamos los listeners cuando el componente se desmonte
        return () => {
            cleanup();
        };

    }, [])

    const handleCredentialResponse = (response) => {
        console.log("Response from Google: ", response);
        const id_token = response.credential; // Obtén el id_token

        // Aquí es donde enviarías el id_token a tu backend para validarlo
        fetch('http://127.0.0.1:5000/login-with-google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: id_token, // Enviar el token al backend
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Login success:', data);
            })
            .catch((error) => {
                console.error('Error during login:', error);
            });
    };
    const handleLoginButtonClick = () => {
        // Esta función se llama cuando se hace clic en el botón
        console.log('hola')
        window.google.accounts.id.prompt(); // Esto abrirá la ventana de selección de cuenta de Google
    };

    const responseGoogle = (response) => {
        console.log(response);
        if (response.credential) {
            // El token que obtienes después del login exitoso
            const id_token = response.credential;

            // Enviar el token al backend para validarlo
            fetch('http://localhost:5000/login-with-google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: id_token,
                }),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    };

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
                        INICIA SESIÓN
                    </div>
                    <div className='myInfo-item'>


                        {/* input de usuario o correo */}
                        <div className='myInfo-sub-item'>
                            <div className='myMini-sub'>
                                <label>CORREO: </label>
                            </div>
                            <div className='myMini-sub'>
                                <input type='text' className='myInput' placeholder='Ingresa tu correo...' id='tbUserLogin'></input>

                            </div>

                        </div>

                        {/* input de contraseña */}
                        <div className='myInfo-sub-item'>
                            <div className='myMini-sub'>
                                <label>CONTRASEÑA: </label>
                            </div>
                            <div className='myMini-sub'>
                                <input type='password' className='myInput' placeholder='Ingresa tu Contraseña...' id='tbPasswordLogin'></input>
                            </div>
                        </div>

                        {/* boton para iniciar sesion */}
                        <div className='myInfo-sub-item'>
                        <div className='myMini-sub'>
                            <GoogleOAuthProvider clientId="689575216932-dltaibglvgc9r6gbeco0005sbsbuq4m7.apps.googleusercontent.com">
                                <GoogleLogin
                                    onSuccess={responseGoogle}
                                    onError={() => console.log('Login Failed')}
                                    shape='rectangular'
                                    theme='outline'
                                    size='large'
                                />
                            </GoogleOAuthProvider>
                            </div>
                            <div className='myMini-sub'>
                            <button className='myBtStartSession' type='button' id='myBtStartLogin'>Iniciar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='myContainerLogSign myInvisible' id='myInfoSign'>
                <div className='myInfo'>
                    {/* ----- */}


                    <div className='myInfo-item'>
                        REGÍSTRATE

                    </div>

                    <div className='myInfo-item'>

                        {/* input de usuario o correo */}
                        <div className='myInfo-sub-item'>
                        <div className='myMini-sub'>
                            <label>CORREO: </label>
                            </div>
                            <div className='myMini-sub'>
                            <input type='text' className='myInput' placeholder='Ingresa tu correo...' id='myInputNewEmail'></input>
                            </div>
                        </div>

                        {/* input de contraseña */}
                        <div className='myInfo-sub-item'>
                        <div className='myMini-sub'>
                            <label>CONTRASEÑA: </label>
                            </div>
                            <div className='myMini-sub'>
                            <input type='password' className='myInput' placeholder='Crea una contraseña...' id='myInputNewPassword'></input>
                            </div>
                        </div>

                        {/* boton para iniciar sesion */}
                        <div className='myInfo-sub-item registerContainer'>
                        <div className='myMini-sub'>
                            <button className='myBtStartSession btRegister' type='button' id='btRegister'>Registrarte</button>
                            </div>
                        </div>
                    </div>

                    <div className='myDNone' id='myFirstViewRegister'>
                        <div className='myFirstViewRegister-item myDNone'>
                            VALIDA TU CORREO:
                        </div>
                        <div className='myFirstViewRegister-item myDNone'>
                            <div className='myEmailVerified'>
                                <input type='text' className='myInputValidated toBottom' placeholder='XX - XXXX - XX' id='myInputValidated' maxLength={14}></input>
                                <label className='miniLabel' id='myMiniLabelErrorCode'>Código Inválido, ingresalo de nuevo</label>
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
