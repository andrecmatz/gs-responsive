
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

