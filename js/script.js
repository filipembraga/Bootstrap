function validaForm(){
	//document.getElementsByTagName('input')[0].style.border = "2px solid black";
	//document.getElementsByTagName('input')[1].style.border = "2px solid black";
	var campoNome = document.getElementById('nome');
	var campoSobrenome = document.getElementById('sobrenome');
	var msgErro = document.getElementById('msgErro');
	var msgSucesso = document.getElementById('msgSucesso');

	campoNome.style.border = "";
	campoSobrenome.style.border = "";
	msgErro.innerHTML ="";
	msgErro.style.display = "none";
	msgSucesso.style.display = "none";

	if(campoNome.value==""){
		campoNome.style.border = "2px solid red";
		msgErro.innerHTML = "Preencha o nome<br>";
		msgErro.style.display = "block";
	}
	
	if(campoSobrenome.value==""){
		campoSobrenome.style.border = "2px solid red";
		msgErro.innerHTML += "Preencha o sobrenome";
		msgErro.style.display = "block";
	}

	if(campoNome.value!="" & campoSobrenome.value!=""){
		msgSucesso.innerHTML = "Preenchimento completo!";
		msgSucesso.style.display = "block";
		campoNome.value = "";
		campoSobrenome.value = "";
	}
}