function calcular_juros() {
    // Declaração de variáveis
    var juros, nome, tempo, mensalidade;

    nome = ($("#nome")).val();

    tempo = Number($("#tempo").val());
    mensalidade = Number($("#mensalidade").val());

    //juros = mensalidade*(1+0.03)^(tempo*12)
    juros = (mensalidade*((1+0.03)^(tempo*12)-1))/0.03


    $(".description-result").html(`Olá ${nome}, juntando R$${mensalidade} todo mês, você terá R$${juros} em ${tempo} anos com uma taxa de 3% ao mês`);


    $(".form-notas").addClass("d-none");
    $(".show-result").removeClass("d-none");
}
function voltar(){
    $("input").val("");

    $(".form-notas").removeClass("d-none");
    $(".show-result").addClass("d-none");
    $(".result-value").htm("...");
}
