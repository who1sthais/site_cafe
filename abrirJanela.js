function openJanela(nome, quantidade, urlImagem, produtos) {
    const largura = 280;
    const altura = 530;
    const esquerda = (screen.width / 2) - (largura / 2);
    const topo = (screen.height / 2) - (altura / 2);
    const recursos = `width=${largura},height=${altura},left=${esquerda},top=${topo}`;
    
    const html = `
        <html>
            <head>
            <link rel="stylesheet" type="text/css" href="./css/sitecafe_p1.css">
                <title>${nome}</title>
            </head>
            <body>
                <h2 class="h2janela">${nome}</h2>
                <p>Quantidade de cápsulas/sachês: ${quantidade}</p>
                <img src="${urlImagem}" alt="Imagem da caixa">
                <ul id="UL">
                    ${produtos.split('\n').map(item => `<li class="LI">${item}</li>`).join('')}
                </ul>
                <button onclick="window.close()">Fechar</button>
            </body>
        </html>`;

    const janela = window.open('', '', recursos);
    janela.document.write(html);
}
