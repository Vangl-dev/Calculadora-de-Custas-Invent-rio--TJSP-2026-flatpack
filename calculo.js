function calcularCustas() {
    const valorBens = parseFloat(document.getElementById('valorBens').value);
    const tipoAcao = document.getElementById('tipoAcao').value;
    const ufesp = 38.42;

    if (isNaN(valorBens) || valorBens <= 0) {
        alert("Por favor, insira um valor de bens válido.");
        return;
    }

    // 1. ITCMD (Mantido em 4% para SP, conforme regra geral atual)
    // Nota: Se a progressividade do PL 7/2024 for sancionada, esta lógica deve ser alterada.
    const itcmd = valorBens * 0.04;

    let custasJudiciais = 0;
    let emolumentos = 0;

    // 2. Custas Judiciais (TJSP 2026 - Valores fixos em UFESP para Inventários/Partilhas)
    if (tipoAcao === "judicial") {
        if (valorBens <= 50000) {
            custasJudiciais = 10 * ufesp;
        } else if (valorBens <= 500000) {
            custasJudiciais = 100 * ufesp;
        } else if (valorBens <= 2000000) {
            custasJudiciais = 300 * ufesp;
        } else if (valorBens <= 5000000) {
            custasJudiciais = 1000 * ufesp;
        } else {
            custasJudiciais = 3000 * ufesp;
        }
        document.getElementById('box-judicial').style.display = 'block';
        document.getElementById('box-extrajudicial').style.display = 'none';
    } 
    
    // 3. Emolumentos Extrajudiciais (Tabela I - Notas SP 2026)
    // Simulando as principais faixas de Escritura com Valor Declarado
    else {
        if (valorBens <= 1556) {
            emolumentos = 137.52; 
        } else if (valorBens <= 5137) {
            emolumentos = 483.69;
        } else if (valorBens <= 34260) {
            emolumentos = 1458.39;
        } else if (valorBens <= 102780) {
            emolumentos = 2053.71;
        } else if (valorBens <= 342600) {
            emolumentos = 4434.84;
        } else if (valorBens <= 685200) {
            emolumentos = 4922.21;
        } else if (valorBens <= 1027800) {
            emolumentos = 5465.41;
        } else {
            // Estimativa para grandes patrimônios (valor base + adicionais por faixa)
            emolumentos = 6060.69 + (valorBens * 0.001); 
        }
        document.getElementById('box-judicial').style.display = 'none';
        document.getElementById('box-extrajudicial').style.display = 'block';
    }

    const totalGeral = itcmd + custasJudiciais + emolumentos;

    // Exibição dos resultados
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('itcmd-valor').innerText = formatarMoeda(itcmd);
    document.getElementById('custas-judiciais-valor').innerText = formatarMoeda(custasJudiciais);
    document.getElementById('emolumentos-valor').innerText = formatarMoeda(emolumentos);
    document.getElementById('total-estimado').innerText = formatarMoeda(totalGeral);
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
