
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
        myInfoLog.style.opacity= '1'

        console.log(myInfoLog)

        myIconSign.style.transition = '0.2s'
        imgLeft.style.transform = 'rotateY(180deg)'
        myIconSign.style.left = '-100%'
    })


  const btRegister = document.getElementById('btRegister')
 const firstView = document.getElementById('myFirstViewRegister')
const myInfo_items = document.querySelectorAll('#myInfoSign .myInfo-item')

  btRegister.addEventListener('click', ()=>{
    
    console.log(myInfo_items)
     myInfo_items.forEach(item => {
        item.style.display= 'none'
     })
     firstView.style.removeProperty('display')
     firstView.style.display ='grid'


  })


}

