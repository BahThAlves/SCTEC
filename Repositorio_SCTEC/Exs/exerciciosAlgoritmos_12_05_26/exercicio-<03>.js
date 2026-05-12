// 1. Criar variável booleana informando se o crachá está ativo (true/fal
// 2. Criar variável numérica com o nível de acesso do funcionário
// 3. SE o crachá for verdadeiro E o nível de acesso for >= 3:
// 4. Mostrar "Acesso Liberado"
// 5. CASO CONTRÁRIO:
// 6. Mostrar "Acesso Negado"

const pessoa1 = {
    cracha: true,
    nivelDeAcesso: 3,
}

if(pessoa1.cracha && pessoa1.nivelDeAcesso >= 3) {
    console.log("Acesso Liberado")
} 
else {
    console.log("Acesso Negado")
}
