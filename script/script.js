function validarFormulario() {
  var requiredFields = ["firstname", "lastname", "email", "phone", "address", "message"];
  for (var i = 0; i < requiredFields.length; i++) {
    var field = document.getElementById(requiredFields[i]);
    if (!field.value.trim()) {
      alert("Por favor, preencha o campo " + '"' + field.placeholder + '"');
      return false;
    }
  }

  var email = document.getElementById("email").value;
  var emailRegex = /^[\w-]+@[\w-]+\.[a-zA-Z]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor insira um endereço de e-mail válido.");
    return false;
  }

  var phone = document.getElementById("phone").value;
  var phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phone)) {
    alert("Por favor, insira um telefone válido no formato 11999999999.");
    return false;
  }

  return true;
}

function carregarDados() {
  fetch('http://localhost:3011/questions')
  .then(response => response.json())
  .then(data => {
    var select = document.getElementById('faqSelect');
    select.innerHTML = ""; // limpa o select antes de adicionar novos dados
    data.forEach(function(question) {
      var opt = document.createElement('option');
      opt.value = question.id;
      opt.innerHTML = question.message; // exibe a mensagem da pergunta
      select.appendChild(opt);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

window.onload = function() {
  carregarDados();
};

document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  if (!validarFormulario()) {
    return;
  }

  var data = {
    name: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    cellphone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    message: document.getElementById('message').value
  };

  fetch('http://localhost:3011/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    alert('Mensagem enviada com sucesso!');
    document.getElementById('myForm').reset();
    carregarDados(); // carrega os dados após o envio do formulário
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('Ocorreu um erro ao enviar a mensagem.');
  });
});