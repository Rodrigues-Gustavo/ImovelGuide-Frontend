const abrirMenu = document.getElementById('openMenu')
const fecharMenu = document.getElementById('overlay')

function openMenu() {
  document.documentElement.classList.add('menuOpened')
}

function closeMenu() {
  document.documentElement.classList.remove('menuOpened')
}

abrirMenu.addEventListener('click', openMenu)
fecharMenu.addEventListener('click', closeMenu)

const verTelefone = document.getElementById("verTelefone")
const telefoneFormatado = document.getElementById("telefoneFormatado")

function alternarTelefone() {
  if (telefoneFormatado.style.display === "block") {
    telefoneFormatado.style.display = "none"
    verTelefone.innerText = "Ver Telefone"
  } else {
    const numeroTelefone = "(77) 77777-7777"
    telefoneFormatado.innerText = numeroTelefone
    telefoneFormatado.style.display = "block"
    verTelefone.innerText = "Ocultar Telefone"
  }
}
verTelefone.addEventListener("click", alternarTelefone)

const verTelefoneBottom = document.getElementById("verTelefoneBottom")
const telefoneFormatadoBottom = document.getElementById("telefoneFormatadoBottom")

function alternarTelefoneBottom() {
  if (telefoneFormatadoBottom.style.display === "block") {
    telefoneFormatadoBottom.style.display = "none"
    verTelefoneBottom.innerText = "Ver Telefone"
  } else {
    const numeroTelefoneBottom = "(11) 11111-1111"
    telefoneFormatadoBottom.innerText = numeroTelefoneBottom
    telefoneFormatadoBottom.style.display = "block"
    verTelefoneBottom.innerText = "Ocultar Telefone"
  }
}
verTelefoneBottom.addEventListener("click", alternarTelefoneBottom)

const formatarCampo = (campo, formato) => {
  campo.value = campo.value.replace(/\D/g, '')
  campo.value = formato(campo.value)
}

const formatarCPF = (valor) => {
  valor = valor.substring(0, 11)
  return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

const formatarTelefone = (valor) => {
  valor = valor.substring(0, 11)
  if (valor.length <= 10) {
    return valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  } else {
    return valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }
}

const verificar = () => {
  const cpf = document.getElementById("cpf")
  const telefone = document.getElementById("telefone")
  const assunto = document.querySelector("textarea")

  if (cpf.value.trim() === "" || telefone.value.trim() === "" || assunto.value.trim() === "") {
    alert("Preencha todos os campos antes de enviar a mensagem.")
    return false
  }

  alert("Formulário enviado com sucesso!")
  return true
}

document.querySelector("form").addEventListener("submit", (event) => {
  if (!verificar()) {
    event.preventDefault()
  }
})

function calcularRegraDeTres() {
  const valor1 = parseFloat(document.getElementById('valor1').value)
  const valor2 = parseFloat(document.getElementById('valor2').value)
  const valor3 = parseFloat(document.getElementById('valor3').value)

  if (!isNaN(valor1) && !isNaN(valor2)) {
    const resultado = (valor3 * valor2) / valor1
    document.getElementById('resultado').value = resultado
  } else {
    alert("Por favor, insira valores válidos nos campos.")
  }
}

const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('close')
const closeOverlayModal = document.getElementById('overlayModal')

openModal.addEventListener('click', (event) => {
  event.preventDefault()
  let html = document.documentElement
  html.classList.add('showModal')
})

closeModal.addEventListener('click', () => {
  let html = document.documentElement
  html.classList.remove('showModal')
})

closeOverlayModal.addEventListener('click', () => {
  let html = document.documentElement
  html.classList.remove('showModal')
})
