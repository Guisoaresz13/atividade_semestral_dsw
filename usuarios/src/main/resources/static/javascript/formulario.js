async function CriarUsuario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const permissoes = document.getElementById('permissoes').value;


  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    permissoes: permissoes
  };

  try {
    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });
  } catch (error) {
    console.error('Erro:', error);
  }
}


//Eventos
document.getElementById('btnSalvarForm').addEventListener('click', CriarUsuario);