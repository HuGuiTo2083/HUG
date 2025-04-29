

export function changeToSignOrLog() {

  const myBtSign = document.getElementById('myBtSignUp')
  const myBtLogin = document.getElementById('myBtLogin')

  const myIconLog = document.getElementById('myIconLog')
  const myIconSign = document.getElementById('myIconSign')
  const imgLeft = document.getElementById('left')

  const myInfoLog = document.getElementById('myInfoLog')
  const myInfoSign = document.getElementById('myInfoSign')




  //---para cuando se quiere registrar
  myBtSign.addEventListener('click', () => {

    myIconLog.style.transition = '0.2s'
    myIconLog.style.left = '100%'

    myIconSign.style.transition = '0.3s'
    imgLeft.style.transform = 'rotateY(180deg)'

    myInfoSign.style.visibility = 'visible'
    myInfoLog.style.opacity = '0'
    myInfoSign.style.opacity = '1'

    console.log(myInfoSign)

    myIconSign.style.left = '0'

  })

  //---- cuando se quiere loggear
  myBtLogin.addEventListener('click', () => {

    myIconLog.style.transition = '0.3s'
    myIconLog.style.left = '55%'

    myInfoSign.style.opacity = '0'
    myInfoLog.style.opacity = '1'

    console.log(myInfoLog)

    myIconSign.style.transition = '0.2s'
    imgLeft.style.transform = 'rotateY(180deg)'
    myIconSign.style.left = '-100%'
  })



  //-----PARTE PARA AGREGARLE FUNCIONALIDAD AL INPUT DEL CODIGO DE VERIFICACION

  const myVerificationCodeInput = document.getElementById('myInputValidated')
   
  myVerificationCodeInput.addEventListener('input', () => {




    // console.log('Random : ' + myRandomCode)

    myVerificationCodeInput.value = myVerificationCodeInput.value.toUpperCase()

    const myCharactersTotal = myVerificationCodeInput.value.length
    //console.log('el tamaño de los caracteres es: ' + myCharactersTotal)

    if (myCharactersTotal === 2) {
      myVerificationCodeInput.value = myVerificationCodeInput.value + ' - '
    }
    if (myCharactersTotal === 9) {
      myVerificationCodeInput.value = myVerificationCodeInput.value + ' - '
    }

    if (myCharactersTotal === 4) {
      myVerificationCodeInput.value = myVerificationCodeInput.value.substring(0, 1)
    }
    if (myCharactersTotal === 11) {
      myVerificationCodeInput.value = myVerificationCodeInput.value.substring(0, 8)
    }


  })


  const btRegister = document.getElementById('btRegister')
  const firstView = document.getElementById('myFirstViewRegister')
  const myInfo_items = document.querySelectorAll('#myInfoSign .myInfo-item')
  const myMiniLabelErrorCode = document.getElementById('myMiniLabelErrorCode');
  const myUpLogo = document.getElementById('myUpLogo')
  const myDownLogo = document.getElementById('myDownLogo')
  const btValidateCode = document.getElementById('btValidateCode')
  const myVerificationCodeInput2 = document.getElementById('myInputValidated')

  //----Para cuando se quiera crear una cuenta y te manda el codigo de verificación

  let myDefinitiveVerificationCode = ''

  const handleRegister =  () => {

      // console.log(myInfo_items)
      myInfo_items.forEach(item => {
          item.style.display = 'none'
      })
      firstView.style.removeProperty('display')
      firstView.style.display = 'grid'

      // const screenWidth = window.innerWidth;

      myInfoSign.style.height = '80%'; // Pantallas más grandes como monitores

      const myOrderLettersToCode = []
      const myLettersCode = ['H', 'U', 'H', 'M']
      for (let i = 0; i < 4; i++) {
          //console.log(i);  
          let myRandomNumber = Math.floor(Math.random() * 8)
          while (myOrderLettersToCode.includes(myRandomNumber)) {
              myRandomNumber = Math.floor(Math.random() * 8)
          }
          myOrderLettersToCode.push(myRandomNumber)
      }

      myOrderLettersToCode.sort((a, b) => a - b);

      // console.log('Orden de numeros de letras:' + myOrderLettersToCode )

      const myRandomCode = []
      let myIndexLetter = 0
      for (let i = 0; i < 8; i++) {
          const myRandomNumberToCode = Math.floor(Math.random() * 10)
          //  console.log('i: ' +  i  + ', array[i]: ' + myOrderLettersToCode[myIndexLetter])
          if (i === myOrderLettersToCode[myIndexLetter]) {
              //  console.log('se pushea 1 al index')
              myRandomCode.push(myLettersCode[myIndexLetter])
              myIndexLetter++
          }
          else {
              myRandomCode.push(myRandomNumberToCode)
          }
      }
      console.log('Random : ' + myRandomCode)
      //console.log('Orden de numeros de letras:' + myOrderLettersToCode )


      //---se hace la peticion al backend y se le mandan los datos para enviar el código----

      fetch('http://127.0.0.1:5000/sendEmailToValidateVerification', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: document.getElementById('myInputNewEmail').value.trim(),
              code: myRandomCode
          })
      })
          .then(response => response.json())  // Si la respuesta es JSON, la convertimos a objeto
          .then(data => {
              console.log('Success:', data);  // Procesamos la respuesta
              myDefinitiveVerificationCode = data.data
          })
          .catch(error => {
              console.error('Error:', error);  // En caso de error, lo mostramos
          });





  };


  btRegister.addEventListener('click', handleRegister)

 

  //---Para cuando se está comprobando el número de telefono


  const handleValidate = () => {
      myMiniLabelErrorCode.style.display = 'none'
      myUpLogo.style.removeProperty('visibility');
      myDownLogo.style.removeProperty('visibility');
      myUpLogo.style.visibility = 'visible';
      myDownLogo.style.visibility = 'visible';
      myDownLogo.style.animation = 'down 1s infinite';
      myUpLogo.style.animation = 'Up 1s infinite';

      // Usa setTimeout para que se ejecute después de 3 segundos
      setTimeout(() => {
          fnHiddenLogo();  // Ejecuta la función fnHiddenLogo
          console.log('BACK ' + myDefinitiveVerificationCode + ', input: ' + myVerificationCodeInput2.value)
          if (myDefinitiveVerificationCode === myVerificationCodeInput2.value) {
              console.log('codigo correcto')
              //---aqui se inicia sesion
              fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: document.getElementById('myInputNewEmail').value.trim(),
                    password: document.getElementById('myInputNewPassword').value.trim()
                })
            })
                .then(response => response.json())  // Si la respuesta es JSON, la convertimos a objeto
                .then(data => {
                    console.log('Registrado:', data);  // Procesamos la respuesta
                })
                .catch(error => {
                    console.error('Error:', error);  // En caso de error, lo mostramos
                });
          }
          else {
              console.log('else: ' + 'BACK ' + myDefinitiveVerificationCode + ', input: ' + myVerificationCodeInput2.value)
              myMiniLabelErrorCode.style.display = 'block';

          }
          // Luego, muestra el mini label después de 3 segundos
      }, 3000); // 3000 ms = 3 segundos
  };

 

  btValidateCode.addEventListener('click', handleValidate);


  function fnHiddenLogo() {
      myUpLogo.style.visibility = 'hidden'
      myDownLogo.style.visibility = 'hidden'
      myDownLogo.style.removeProperty('animation')
      myUpLogo.style.removeProperty('animation')
  }

const  StartLogin = ()=>{
  
  fetch('http://127.0.0.1:5000/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: document.getElementById('tbUserLogin').value.trim(),
        password: document.getElementById('tbPasswordLogin').value.trim(),

    })
})
    .then(response => response.json())  // Si la respuesta es JSON, la convertimos a objeto
    .then(data => {
        console.log('Success:', data);  // Procesamos la respuesta
        myDefinitiveVerificationCode = data.data
    })
    .catch(error => {
        console.error('Error:', error);  // En caso de error, lo mostramos
    });



}




  const myBtLoginStart = document.getElementById('myBtStartLogin')

  myBtLoginStart.addEventListener('click', StartLogin)

  return () => {
    btRegister.removeEventListener('click', handleRegister);
    btValidateCode.removeEventListener('click', handleValidate);
    myBtLoginStart.removeEventListener('click', StartLogin)

  };

 


}

