var foto = document.getElementById('foto');
var nome = document.getElementById('nome');
var email = document.getElementById('email');
var desc = document.getElementById('descricao-perfil');

var fotoSalva = localStorage.getItem('foto') || 'https://avatars.githubusercontent.com/u/107051154?v=4' ;
var nomeSalvo = localStorage.getItem('nome') || 'Nelson Olech';
var emailSalvo = localStorage.getItem('email')|| 'nelsonolech@gmail.com';
var descSalvo = localStorage.getItem('descricao-perfil')|| 'Formado em técnico em informática e cursando 5° período de ADS. Desenvolvedor web com habilidades em PHP, HTML, CSS, JS/Jquery, Bootstrap, Mysql...';

foto.src = fotoSalva;
nome.innerText = nomeSalvo;
email.innerText = emailSalvo;
desc.innerText = descSalvo;