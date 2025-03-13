import '../styles/style_Login.css'
import iconoLoginCurveado from '../assets/icono_curveado_login.png'
import { useEffect } from 'react';
import { changeToSignOrLog } from '../scripts/ViewLogin/changeToSignOrLog';

function ViewLogin() {
  useEffect(()=>{
    changeToSignOrLog()
  })
  
  return (
    <div className='myBody'>
      <img src={iconoLoginCurveado} className='myCurvedIcon curvedRight' id='myIconLog'>
      </img>

      <img src={iconoLoginCurveado} className='myCurvedIcon curvedLeft' id='myIconSign'>
      </img>
       
       <div className='myMsgToSignUp'>
        Hola

        <button id='myBtSignUp'>Sign Up</button>
       </div>


    </div>
  );
}

export default ViewLogin;