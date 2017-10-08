var campoNome = document.querySelector('#nome');
var campoSobrenome = document.querySelector('#sobrenome');
var campoTelefone = document.querySelector('#telefone');
var campoOperadora = document.querySelector('#operadora');
var msgErro = document.querySelector('#msgErro');
var msgSucesso = document.querySelector('#msgSucesso');

function validaForm(){
	//document.getElementsByTagName('input')[0].style.border = "2px solid black";
	//document.getElementsByTagName('input')[1].style.border = "2px solid black";
	limpaValicao();
	validaCampo(campoNome, "nome");
	validaCampo(campoSobrenome, "sobrenome");
	validaCampo(campoTelefone, "telefone");
	validaCampo(campoOperadora, "operadora");

	if(campoNome.value!="" & campoSobrenome.value!="" & campoTelefone.value!="" & campoOperadora.value!=""){
		msg.classList.remove("alert-danger");
		msg.classList.add("alert-success");
		msg.innerHTML = "Preenchimento completo!";
		msg.style.display = "block";
		campoNome.value = "";
		campoSobrenome.value = "";
	}
}

function limpaValicao(){
	campoNome.style.border = "";
	campoSobrenome.style.border = "";
	campoTelefone.style.border = "";
	campoOperadora.style.border = "";
	msg.innerHTML ="";
	msg.style.display = "none";
}

function validaCampo(campo,nomeDoCampo){
		if(campo.value==""){
		campo.style.border = "1px solid red";
		msg.classList.add("alert-danger");
		msg.innerHTML += "Preencha o "+nomeDoCampo+"<br>";
		msg.style.display = "block";
	}
}