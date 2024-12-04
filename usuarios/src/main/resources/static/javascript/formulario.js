async function CriarUsuario(event) {
  event.preventDefault();
  limparErros();

  const nome = document.getElementById('inputNome').value.trim();
  const email = document.getElementById('inputEmail').value.trim();
  const senha = document.getElementById('inputSenha').value;
  const permissoes = document.getElementById('inputPerm').value.trim();

  let temErro = false;

  if (!nome) {
    mostrarErro('inputNome', 'O nome é obrigatório!');
    temErro = true;
  }
  if (!email || !validarEmail(email)) {
    mostrarErro('inputEmail', 'Email inválido!');
    temErro = true;
  }
  if (!senha || !validarSenha(senha)) {
    mostrarErro('inputSenha', 'A senha deve ter no mínimo 6 e no máximo 100 caracteres!');
    temErro = true;
  }
  if (!permissoes) {
    mostrarErro('inputPerm', 'As permissões de acesso são obrigatórias!');
    temErro = true;
  }

  if (temErro) return;

  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    permissoes: permissoes,
  };

  fetch('/api/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => {
      if (response.ok) {
        alert('Usuário criado com sucesso!');
        document.getElementById('formUsuario').reset();
        window.location.href = '/pages/lista.html';
      } else {
        return response.text().then((text) => {
          throw new Error(text || 'Erro ao criar usuário.');
        });
      }
    })
    .catch((error) => {
      console.error('Erro:', error);
      alert('Erro ao enviar os dados.');
    });
}

//Complementares
function limparErros() {
  const erros = document.querySelectorAll('.error-message');
  erros.forEach((erro) => erro.textContent = '');
}

function mostrarErro(idCampo, mensagem) {
  const campo = document.getElementById(idCampo);
  const erroContainer = campo.parentNode.querySelector('.error-message');
  if (erroContainer) {
    erroContainer.textContent = mensagem;
  }
}

//Validações
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarSenha(senha) {
  return senha.length >= 6 && senha.length <= 100;
}

//Eventos
document.getElementById('formUsuario').addEventListener('submit', CriarUsuario);
