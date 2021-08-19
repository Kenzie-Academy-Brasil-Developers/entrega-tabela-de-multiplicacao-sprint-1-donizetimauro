function tabelaDeMultiplicacao(tamanho) {
    let tablex = [];
    for (let a = 0; a <= 1; a++) {
        tablex[a] = [];
        for (let b = 0; b <= 1; b++){
            tablex[a][b] = a*b;
        }
    }
    for (let i = 0; i <= tamanho; i++) {
        tablex[i] = [];
        for (let j = 0; j <= tamanho; j++){
            tablex[i][j] = i*j;
        }
    }
    console.table(tablex)
    return tablex
}