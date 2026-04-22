const CONVERSION_FACTOR = 100000000; // 1 BTC = 100 milhões de Satoshis
const wallet = {
  satoshiCredits: 0,
  locked: false,
};
const wallet2 = {
  satoshiCredits: 0,
  locked: false,
};
const wallet3 = {
  satoshiCredits: 0,
  locked: true,
};





// ==========================================
// 1. Crie a Função de Depósito
// ==========================================
function depositBTC(btcValue, wallet) {
  if(wallet.locked) {
    return
  }
  const satoshis = Math.floor(btcValue*CONVERSION_FACTOR)

return wallet.satoshiCredits += satoshis
}




// ==========================================
// 2. Crie a Função de Saque
// ==========================================
function withdrawBTC(btcValue, wallet) {
  if(wallet.locked) {
    return
  }
  const satoshis = Math.floor(btcValue*CONVERSION_FACTOR)

return wallet.satoshiCredits -+ satoshis
}








function unitTests() {
  console.log("Iniciando depósitos fracionados...");
  // Carteira 1
  depositBTC(0.1, wallet);
  depositBTC(0.2, wallet);

  // Carteira 2
  depositBTC(0.100000009, wallet2);
  depositBTC(0.200000009, wallet2);

  [wallet, wallet2, wallet3].forEach((w) => {
    const credits = w.satoshiCredits / CONVERSION_FACTOR;
    credits === 0.3
      ? console.log(
          `✅ SUCESSO! Saldo exato: ${credits} BTC. Nenhum Satoshi perdido.`,
        )
      : console.error(
          `❌ ERRO GRAVE! Saldo detectado: ${credits} BTC. Falha de precisão.`,
        );
  });
}

unitTests();