import {clienteService} from "../service/cliente-service.js";

const urlAtualizar = new URL(window.location)

const id = urlAtualizar.searchParams.get('id')
const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalharCliente(id)
    .then(dados => {
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    })

const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
        .then(()=>{
            window.location.href = "../telas/lista_cliente.html"
        })
})
