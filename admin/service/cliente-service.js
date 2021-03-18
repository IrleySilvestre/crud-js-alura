const listaClientes = () => {
    return fetch(`http://localhost:3000/clientes`)
        .then(resposta => {
            return resposta.json()
        })
}

const cadastrarCliente = (nome, email) => {
    return fetch(`http://localhost:3000/clientes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            return resposta.body
        })
}

const excluirCliente = (id) => {
    return fetch(`http://localhost:3000/clientes/${id}`, {
        method: 'DELETE'
    })
}

const detalharCliente = (id) => {
    return fetch(`http://localhost:3000/clientes/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}

const atualizaCliente = (id, nome, email)=>{
    return fetch(`http://localhost:3000/clientes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(
            {
                nome: nome,
                email: email
            }
        )
    }).then(resposta =>{
        return resposta.json()
    })
}

export const clienteService = {
    listaClientes,
    cadastrarCliente,
    excluirCliente,
    detalharCliente,
    atualizaCliente
}




