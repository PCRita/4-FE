function ValidateAge()
{

    //1.Declarar variaveis: valor da textbox, mensagem
    let age, message;

    //2.Ler da textbox  e atribuir à variavel
    //window.document.form.textbox-caminho para chegar à textbox
    age = document.getElementById("textAge").value;

    //3.Avaliar o valor da variavel da idade e dar a respectiva mensagem
    if (isNaN(age)|| age<=18) {
        message = "Idade errada!";
    }
    else {
        message = "Idade ok!";
    }
        //isNaN("a")     -->true
        //isNaN("")      -->true
        //isNaN(true)    -->true
        //isNaN(11)      -->False

    //4.Escrever no ecra a mensagem
    document.getElementById("pMessage").innerHTML=message;


}