document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const portfolio = document.getElementById('portfolio').value;

    fetch('https://seu-backend.herokuapp.com/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, telefone, portfolio })
    })
    .then(response => response.json())
    .then(data => {
        alert('Tatuador cadastrado com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

function mostrarCadastro() {
    document.getElementById('cadastro').style.display = 'block';
}
