function adicionarOpcao(selectId) {
    var select = document.getElementById(selectId);
    var textarea = document.getElementById('itens');
    var valor = document.getElementById('valor');
    var valorSelecionado = Number(select.options[select.selectedIndex].value);
    var opcaoSelecionada = select.options[select.selectedIndex].text;
    textarea.value += opcaoSelecionada + '\n';

    var n1 = parseFloat(valor.value) || 0;
    var novoVal = n1 + valorSelecionado;
    valor.value = novoVal.toFixed(2)

}