import {clienteService} from "../service/cliente-service.js";

const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    linhaNovoCliente.innerHTML = `
            <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=" class="botao-simples botao-simples&#45;&#45;editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> 
    `
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

clienteService.listaClientes()
    .then(data => {
        data.forEach((elemento) => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
        })
    })