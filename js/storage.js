const CHAVE = "ongEsperancaColaboradores";

export function obterColaboradores() {
  const dados = localStorage.getItem(CHAVE);

  if (!dados) {
    return [];
  }

  try {
    return JSON.parse(dados);
  } catch (erro) {
    console.error("Erro ao ler os dados salvos:", erro);
    return [];
  }
}

export function salvarColaborador(colaborador) {
  const colaboradores = obterColaboradores();

  colaboradores.push({
    ...colaborador,
    id: Date.now(),
    dataCadastro: new Date().toISOString(),
  });

  localStorage.setItem(CHAVE, JSON.stringify(colaboradores));
}

export function limparColaboradores() {
  localStorage.removeItem(CHAVE);
}
