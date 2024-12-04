// Consultar e listar os usuários
document.addEventListener('DOMContentLoaded', listarUsuarios);

async function listarUsuarios() {
    const tabelaUsuarios = document.getElementById('tabelaUsuarios');
    const mensagemVazio = document.getElementById('mensagemVazio');

    try {
        const response = await fetch('/api/usuarios');
        if (!response.ok) {
            throw new Error('Erro ao recuperar os usuários');
        }
        const usuarios = await response.json();

        if (usuarios.length < 1) {
            tabelaUsuarios.classList.add('d-none');
            mensagemVazio.classList.remove('d-none');
        } else {
            tabelaUsuarios.classList.remove('d-none');
            mensagemVazio.classList.add('d-none');
            preencherTabela(usuarios);
        }
    } catch (error) {
        console.error(error);
    }
}

// Preencher a tabela de usuários
function preencherTabela(usuarios) {
    const tabelaUsuarios = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
    tabelaUsuarios.innerHTML = '';

    usuarios.forEach(usuario => {
        const row = tabelaUsuarios.insertRow();
        row.insertCell(0).innerText = usuario.id;
        row.insertCell(1).innerText = usuario.nome;
        row.insertCell(2).innerText = usuario.email;
    });
}
