function validaFormulario(){
    // validação do campo nome
    if(document.cadastro.nome.value==""){
        alert("Preencha o campo Nome.");
        document.cadastro.nome.focus();
        return false;
    }

    //validação do campo data de nascimento
    if(document.cadastro.dtNascimento.value==""){
        alert("Preencha o campo Data de nascimento.");
        document.cadastro.dtNascimento.focus();
        return false;
    }

    //validação do campo e-mail
    if(document.cadastro.email.value==""){
        alert("Preencha o campo E-mail.");
        document.cadastro.email.focus();
        return false;
    }

    //validação do campo telefone
    if(document.cadastro.telefone.value==""){
        alert("Preencha o campo Telefone.");
        document.cadastro.telefone.focus();
        return false;
    }
    
    //validação do campo sexo
    let campoSexoMarcado = document.querySelectorAll('input[name=sexo]:checked');
    if(campoSexoMarcado.length === 0){
        alert("Selecione o sexo");
        return false;
    }

    //validação do campo check
    let validaCheckbox = document.getElementById("check");
    if(validaCheckbox.checked == false){
        alert("Marque a opção 'Quero fazer parte do fã-clube' para continuar");
        return false;
    }

    return true;
}