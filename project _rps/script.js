const buttons = document.querySelectorAll('.fild-grup-btn')

console.log(buttons);

buttons.forEach ((button, i)=>{
    button.addEventListener('click',() => {
        const userChose = i
        const compChose = Math.floor(Math.random() *3)
        window.location.href = `winner.html?user=${userChose}&comp=${compChose}`
    })
})

