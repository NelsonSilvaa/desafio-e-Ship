var foto = document.getElementById('foto');
var nome = document.getElementById('nome');
var email = document.getElementById('email');
var desc = document.getElementById('Descricao');

var fotoSalva = localStorage.getItem('foto') || 'https://avatars.githubusercontent.com/u/107051154?v=4' ;
var nomeSalvo = localStorage.getItem('nome') || 'Nelson Olech';
var emailSalvo = localStorage.getItem('email')|| 'nelsonolech@gmail.com';
var descSalvo = localStorage.getItem('descricao-perfil')|| 'Formado em técnico em informática e cursando 5° período de ADS. Desenvolvedor web com habilidades em PHP, HTML, CSS, JS/Jquery, Bootstrap, Mysql...';

foto.value = fotoSalva;
nome.value = nomeSalvo;
email.value = emailSalvo;
desc.value = descSalvo;


function salvar(){ 
    localStorage.setItem('foto', foto.value);
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('descricao-perfil', desc.value);
    window.location.href = 'index.html';
}