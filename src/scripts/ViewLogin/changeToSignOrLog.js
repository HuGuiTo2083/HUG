
export function changeToSignOrLog() {
    const myBtSignOrLog = document.getElementById('myBtSignUp')
    const myIconLog = document.getElementById('myIconLog')
    const myIconSign = document.getElementById('myIconSign')
    myBtSignOrLog.addEventListener('click', () => {

        myIconLog.style.transition = '0.2s'
        myIconLog.style.left = '100%'

        myIconSign.style.transition = '0.3s'
        myIconSign.style.transform = 'rotateY(180deg)'
        myIconSign.style.left = '0'
    })
}

