import {clienteService} from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    linhaNovoCliente.innerHTML = `
            <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples&#45;&#45;editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> 
    `
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
    let btnExcluir = evento.target.className === 'botao-simples botao-simples--excluir'

    if (btnExcluir){
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.excluirCliente(id)
            .then(()=>{
                linhaCliente.remove()
            })
    }

})



clienteService.listaClientes()
    .then(data => {
        data.forEach((elemento) => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
        })
    })