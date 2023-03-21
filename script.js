function validaFormulario(){
    // validação do campo nome
    var nome = document.cadastro.nome.value;
    var regExpNome = new RegExp("^[A-zÀ-ü]{2,}([ ]{1}[A-zÀ-ü]{2,})+$")
    if(!regExpNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.cadastro.nome.focus();
        return false;
    }

    //validação do campo data de nascimento
    var dataNascimento = document.cadastro.dtNascimento.value;
    var regExpDtNasc = new RegExp //("^[0-9]{2}[/][0-9]{2}[/][0-9]{2,4}$")
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
    var fone = document.cadastro.telefone.value;
    var regExpFone = new RegExp("^[(][1-9]{2}[)][0-9]{4,5}[-][0-9]{4}$");
    if(!regExpFone.test(fone)){
        alert("Preencha o campo Telefone corretamente.");
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