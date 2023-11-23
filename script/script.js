function validarFormulario() {
    // Obter os valores dos campos
    var nome = document.getElementById('firstname').value;
    var sobrenome = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('phone').value;

    // Adicione aqui suas regras de validação
    if (nome.trim() === '' || sobrenome.trim() === '' || email.trim() === '' || telefone.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Exemplo de validação do formato do telefone (neste caso, um formato simples para fins de demonstração)
    var formatoTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!formatoTelefone.test(telefone)) {
        alert('Por favor, insira um número de telefone válido. Exemplo: (11) 12345-6789');
        return false;
    }

    // Adicione mais regras de validação conforme necessário

    // Se todas as validações passarem, o formulário pode ser enviado
    return true;
}