function LoadForm()
{
    document.formCalculadora.tableCalculater.focus();

}

function ValidateValor1()
{
    let valor1 = document.getElementById('number1');
    if (isNaN(valor1.value) || valor1.value == '')
    {
        valor1.focus();
        valor1.style.backgroundColor = 'red';
        valor1.style.color = 'white';
        return false;
    }
    else
    {
        valor1.style.backgroundColor = 'white';
        valor1.style.color = 'black';
        return true;
    }
}

function ValidateValor2()
{
    let valor2 = document.getElementById('number2');
    if (isNaN(valor2.value) || valor1.value == '')
    {
        valor2.focus();
        valor2.style.backgroundColor = 'red';
        valor2.style.color = 'white';
        return false;
    }
    else {
        valor2.style.backgroundColor = 'white';
        valor2.style.color = 'black';
        return true;
    }
}

function Sum()
{
    let valor1 = document.getElementById('number1').value;
    let valor2 = document.getElementById('number2').value;
    let resultado;
    resultado = +valor1 + +valor2;
    document.getElementById('resultado').value = resultado;

}

function Minus()
{
    let valor1 = document.getElementById('number1').value;
    let valor2 = document.getElementById('number2').value;
    let resultado;
    resultado = valor1 - valor2;
    document.getElementById('resultado').value = resultado;
}

function Multiply()
{
    let valor1 = document.getElementById('number1').value;
    let valor2 = document.getElementById('number2').value;
    let resultado;
    resultado = valor1 * valor2;
    document.getElementById('resultado').value = resultado;
}

function Divison()
{
    let valor1 = document.getElementById('number1').value;
    let valor2 = document.getElementById('number2').value;
    let resultado;
    if (valor2 == null)
    {
        valor2.focus();
        valor2.style.color = 'red';
        return false;
    }
    else
    {
        resultado = valor1 / valor2;
        document.getElementById('resultado').value = resultado;
    }
}