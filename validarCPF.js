document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
      var cpfInput = document.getElementById('cpf');
      var cpfValue = cpfInput.value;

      if (!validarCPF(cpfValue)) {
          event.preventDefault();
          exibirErro('CPF inválido. Digite 11 dígitos numéricos.');
      }
  });
});

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
      if (cpf.length === 0) {
          exibirErro('Campo vazio');
      } else {
          exibirErro('CPF inválido. Digite 11 dígitos numéricos.');
      }
      return false;
  }

  const identCPF = parseInt(cpf.substring(0, 9));
  const primeiro_digito = calculaDV(identCPF);
  const segundo_digito = calculaDV(identCPF * 10 + primeiro_digito);

  if (parseInt(cpf.charAt(9)) !== primeiro_digito || parseInt(cpf.charAt(10)) !== segundo_digito) {
      exibirErro('CPF inválido. Dígitos de verificação incorretos.');
      return false;
  }

  exibirErro('');
  return true;

  function exibirErro(mensagem) {
      document.getElementById('spanErro').textContent = mensagem;
  }
}

function calculaDV(num) {
  var resto = 0, soma = 0;
  for (i = 2; i < 11; i++) {
      soma = soma + ((num % 10) * i);
      num = parseInt(num / 10);
  }
  resto = (soma % 11);
  return (resto > 1) ? (11 - resto) : 0;
}
