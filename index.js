const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ['(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', ' '] // Array de strings permitidas

// Adicionando a funcionalidade do clique nos botões da tela
document.querySelectorAll('.charKey').forEach(e => {
    e.addEventListener('click', () => input.value += e.dataset.value)
})

// Adicionando as funcionalidades para as teclas "Enter" e "Backspace"
input.addEventListener('keydown', e => {
    e.preventDefault()
    if(allowedKeys.includes(e.key)){
        input.value += e.key
        return
    }
    if(e.key === 'Enter') calculate()
    if(e.key === 'Backspace') input.value = input.value.slice(0,-1)
})

// Incluindo funcionalidade para o botão "C"
document.getElementById('clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
})

// Função para fazer o calculo
const calculate = () => {
    resultInput.value = 'ERROR'
    resultInput.classList.add('error') // Caso a operação seja inválida, a mensagem e o estilo de cor continuarão a ser aplicados

    result.value = eval(input.value)
    
    resultInput.classList.remove('error')
    
}

document.getElementById('equal').addEventListener('click', calculate) // Incluindo funcionalidade do botão "="

// Incluindo funcionalidade do botão "copy"
document.getElementById('copyToClipboard').addEventListener('click', e => {
    const button = e.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

// Adicionando o evento de troca de tema
document.getElementById('themeSwitcher').addEventListener('click', () =>{
    if (main.dataset.theme === 'dark') {
      root.style.setProperty('--bg-color', '#f1f5f9')
      root.style.setProperty('--border-color', '#aaa')
      root.style.setProperty('--font-color', '#212529')
      root.style.setProperty('--primary-color', '#26834a')
      main.dataset.theme = 'light'
    } else {
      root.style.setProperty('--bg-color', '#212529')
      root.style.setProperty('--border-color', '#666')
      root.style.setProperty('--font-color', '#f1f5f9')
      root.style.setProperty('--primary-color', '#4dff91')
      main.dataset.theme = 'dark'
    }
  })


