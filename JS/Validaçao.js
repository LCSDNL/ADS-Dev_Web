
//       EMAIL e SENHA
 function validaES(){
    var email=document.getElementById("mail");
    var senha=document.getElementById("pass");
   
    if(email.value==""){
        alert("Email invalido!");
        email.focus();
        return;    
    }
    if(senha.value==""){
        alert("Senha Invalida!");
        senha.focus();
        return;
    }
 }




 //           HORAS

function validaHoraE(){
    var _horaE=document.getElementById("HE");
    if(_horaE.value==""){
        alert("Hora de entrada Invalida");
        _hora.focus();
        return;
    }
}

function validaHoraS(){
    var _horaS=document.getElementById("HS");
    if(_horaS.value==""){
        alert("Hora de saida Invalida");
        _hora.focus();
        return;
    }
}


//              DATAS


function validaData(){
    var _dataA=document.getElementById("DA");
    if(_dataA.value==""){  
        alert("Data invalida");
        _data.focus();
        return;
    }
}

function validaDataEntrada(){
    var _dataE=document.getElementById("DE");
    if(_dataE.value==""){  
        alert("Data de entrada/inicio invalida");
        _data.focus();
        return;
    }
}

function validaDataSaida(){
    var _dataS=document.getElementById("DS");
    if(_dataS.value==""){  
        alert("Data de saída/final Invalida");
        _data.focus();
        return;
    }
}
