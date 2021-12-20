var num1 = 1;
var num2 = 2;

atividade = (num1, num2) => {
    let igualdade = num1 == num2 ?  " são iguais." : " não são iguais.";
    let comparar_1 = (num1 + num2) < 10 ? "menor que 10" : "maior que 10";
    let comparar_2 = (num1 + num2) < 20 ? "menor que 20" : "maior que 20";
    let soma = num1+num2

    //let resultado = "os números "+ num1+" e "+num2+igualdade + " Sua soma é: "+soma+", que é "+ comparar_1+" e "+comparar_2;
    //console.log(resultado)
    return `os números  ${num1} e ${num2} ${igualdade}  Sua soma é: ${soma} que é  ${comparar_1} e ${comparar_2}.`;

}


let nome = atividade(num1, num2)
console.log(nome)