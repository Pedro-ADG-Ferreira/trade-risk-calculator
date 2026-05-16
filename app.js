// Atualiza todas as mensagens de apoio (field-help) na comparação A/B a partir de País da contraparte
function updateAdvancedFieldHelp() {
  // Montante
  const amountA = Number(output.advA_amount.value) || 0;
  const amountB = Number(output.advB_amount.value) || 0;
  const helpAmountA = document.getElementById("help-advA-amount");
  const helpAmountB = document.getElementById("help-advB-amount");
  if (helpAmountA) helpAmountA.textContent = amountA >= 250000 ? "Montantes maiores não mudam muito o score, mas aumentam o custo absoluto da operação." : "Montantes menores reduzem o custo absoluto, embora o spread percentual continue a depender do risco.";
  if (helpAmountB) helpAmountB.textContent = amountB >= 250000 ? "Montantes maiores não mudam muito o score, mas aumentam o custo absoluto da operação." : "Montantes menores reduzem o custo absoluto, embora o spread percentual continue a depender do risco.";

  // Prazo
  const tenorA = Number(output.advA_tenorDays.value) || 0;
  const tenorB = Number(output.advB_tenorDays.value) || 0;
  const helpTenorA = document.getElementById("help-advA-tenorDays");
  const helpTenorB = document.getElementById("help-advB-tenorDays");
  if (helpTenorA) helpTenorA.textContent = tenorA >= 180 ? "Prazos longos elevam o risco e o pricing porque aumentam a janela para evento de crédito e volatilidade." : "Prazos curtos comprimem a exposição e normalmente geram pricing mais baixo.";
  if (helpTenorB) helpTenorB.textContent = tenorB >= 180 ? "Prazos longos elevam o risco e o pricing porque aumentam a janela para evento de crédito e volatilidade." : "Prazos curtos comprimem a exposição e normalmente geram pricing mais baixo.";

  // Volatilidade
  const fxVolA = Number(output.advA_fxVolatility.value) || 0;
  const fxVolB = Number(output.advB_fxVolatility.value) || 0;
  const helpFxVolA = document.getElementById("help-advA-fxVolatility");
  const helpFxVolB = document.getElementById("help-advB-fxVolatility");
  if (helpFxVolA) helpFxVolA.textContent = fxVolA >= 15 ? "Volatilidade elevada aumenta a incerteza cambial e empurra o spread para cima." : "Volatilidade contida tende a estabilizar o custo cambial.";
  if (helpFxVolB) helpFxVolB.textContent = fxVolB >= 15 ? "Volatilidade elevada aumenta a incerteza cambial e empurra o spread para cima." : "Volatilidade contida tende a estabilizar o custo cambial.";

  // Cobertura cambial
  const hedgeA = Number(output.advA_hedgeRatio.value) || 0;
  const hedgeB = Number(output.advB_hedgeRatio.value) || 0;
  const helpHedgeA = document.getElementById("help-advA-hedgeRatio");
  const helpHedgeB = document.getElementById("help-advB-hedgeRatio");
  if (helpHedgeA) helpHedgeA.textContent = hedgeA >= 70 ? "Maior cobertura reduz a componente cambial do risco e ajuda a baixar o spread." : hedgeA <= 20 ? "Cobertura reduzida deixa a operação mais exposta ao FX e tende a encarecer o pricing." : "Cobertura parcial mitiga parte do risco cambial sem eliminar o custo.";
  if (helpHedgeB) helpHedgeB.textContent = hedgeB >= 70 ? "Maior cobertura reduz a componente cambial do risco e ajuda a baixar o spread." : hedgeB <= 20 ? "Cobertura reduzida deixa a operação mais exposta ao FX e tende a encarecer o pricing." : "Cobertura parcial mitiga parte do risco cambial sem eliminar o custo.";

  // Incoterm
  const helpIncotermA = document.getElementById("help-advA-incoterm");
  const helpIncotermB = document.getElementById("help-advB-incoterm");
  if (helpIncotermA) helpIncotermA.textContent = incotermHelp[output.advA_incoterm.value] || "";
  if (helpIncotermB) helpIncotermB.textContent = incotermHelp[output.advB_incoterm.value] || "";

  // Pagamento
  const helpPaymentA = document.getElementById("help-advA-paymentStructure");
  const helpPaymentB = document.getElementById("help-advB-paymentStructure");
  if (helpPaymentA) helpPaymentA.textContent = paymentHelp[output.advA_paymentStructure.value] || "";
  if (helpPaymentB) helpPaymentB.textContent = paymentHelp[output.advB_paymentStructure.value] || "";

  // Documentação
  const helpDocA = document.getElementById("help-advA-documentationQuality");
  const helpDocB = document.getElementById("help-advB-documentationQuality");
  if (helpDocA) helpDocA.textContent = documentationHelp[output.advA_documentationQuality.value] || "";
  if (helpDocB) helpDocB.textContent = documentationHelp[output.advB_documentationQuality.value] || "";

  // Instrumento
  const helpInstrA = document.getElementById("help-advA-instrument");
  const helpInstrB = document.getElementById("help-advB-instrument");
  if (helpInstrA) helpInstrA.textContent = instrumentHelp[output.advA_instrument.value] || "";
  if (helpInstrB) helpInstrB.textContent = instrumentHelp[output.advB_instrument.value] || "";

  // Estratégia cambial
  const helpFxInstrA = document.getElementById("help-advA-fxInstrument");
  const helpFxInstrB = document.getElementById("help-advB-fxInstrument");
  if (helpFxInstrA) helpFxInstrA.textContent = fxInstrumentHelp[output.advA_fxInstrument.value] || "";
  if (helpFxInstrB) helpFxInstrB.textContent = fxInstrumentHelp[output.advB_fxInstrument.value] || "";

  // Incoterm
  const helpIncotermA = document.getElementById("help-advA-incoterm");
  const helpIncotermB = document.getElementById("help-advB-incoterm");
  if (helpIncotermA) helpIncotermA.textContent = incotermHelp[output.advA_incoterm.value] || "Selecione um incoterm para ver a explicação.";
  if (helpIncotermB) helpIncotermB.textContent = incotermHelp[output.advB_incoterm.value] || "Selecione um incoterm para ver a explicação.";

  // Pagamento
  const helpPaymentA = document.getElementById("help-advA-paymentStructure");
  const helpPaymentB = document.getElementById("help-advB-paymentStructure");
  if (helpPaymentA) helpPaymentA.textContent = paymentHelp[output.advA_paymentStructure.value] || "Selecione uma estrutura de pagamento para ver a explicação.";
  if (helpPaymentB) helpPaymentB.textContent = paymentHelp[output.advB_paymentStructure.value] || "Selecione uma estrutura de pagamento para ver a explicação.";

  // Documentação
  const helpDocA = document.getElementById("help-advA-documentationQuality");
  const helpDocB = document.getElementById("help-advB-documentationQuality");
  if (helpDocA) helpDocA.textContent = documentationHelp[output.advA_documentationQuality.value] || "Selecione a qualidade documental para ver a explicação.";
  if (helpDocB) helpDocB.textContent = documentationHelp[output.advB_documentationQuality.value] || "Selecione a qualidade documental para ver a explicação.";

  // Instrumento
  const helpInstrA = document.getElementById("help-advA-instrument");
  const helpInstrB = document.getElementById("help-advB-instrument");
  if (helpInstrA) helpInstrA.textContent = instrumentHelp[output.advA_instrument.value] || "Selecione um instrumento para ver a explicação.";
  if (helpInstrB) helpInstrB.textContent = instrumentHelp[output.advB_instrument.value] || "Selecione um instrumento para ver a explicação.";

  // Estratégia cambial
  const helpFxInstrA = document.getElementById("help-advA-fxInstrument");
  const helpFxInstrB = document.getElementById("help-advB-fxInstrument");
  if (helpFxInstrA) helpFxInstrA.textContent = fxInstrumentHelp[output.advA_fxInstrument.value] || "Selecione uma estratégia cambial para ver a explicação.";
  if (helpFxInstrB) helpFxInstrB.textContent = fxInstrumentHelp[output.advB_fxInstrument.value] || "Selecione uma estratégia cambial para ver a explicação.";

  // Comissão instrumento
  const feeA = Number(output.advA_instrumentFeeBps.value) || 0;
  const feeB = Number(output.advB_instrumentFeeBps.value) || 0;
  const helpFeeA = document.getElementById("help-advA-instrumentFeeBps");
  const helpFeeB = document.getElementById("help-advB-instrumentFeeBps");
  if (helpFeeA) helpFeeA.textContent = feeA > 0 ? `A comissão contratada do instrumento é de ${feeA} bps e entra directamente no pricing final.` : "Se não houver comissão contratada, não existe custo adicional do instrumento para além do próprio spread de risco.";
  if (helpFeeB) helpFeeB.textContent = feeB > 0 ? `A comissão contratada do instrumento é de ${feeB} bps e entra directamente no pricing final.` : "Se não houver comissão contratada, não existe custo adicional do instrumento para além do próprio spread de risco.";

  // Comissão cambial
  const fxFeeA = Number(output.advA_fxFeeBps.value) || 0;
  const fxFeeB = Number(output.advB_fxFeeBps.value) || 0;
  const helpFxFeeA = document.getElementById("help-advA-fxFeeBps");
  const helpFxFeeB = document.getElementById("help-advB-fxFeeBps");
  if (helpFxFeeA) helpFxFeeA.textContent = fxFeeA > 0 ? `A comissão/taxa cambial contratada é de ${fxFeeA} bps e aumenta o custo total da cobertura ou conversão cambial.` : "Se não houver comissão cambial, não existe custo adicional dessa componente.";
  if (helpFxFeeB) helpFxFeeB.textContent = fxFeeB > 0 ? `A comissão/taxa cambial contratada é de ${fxFeeB} bps e aumenta o custo total da cobertura ou conversão cambial.` : "Se não houver comissão cambial, não existe custo adicional dessa componente.";

  // Mitigação
  const helpCollA = document.getElementById("help-advA-collateral");
  const helpCollB = document.getElementById("help-advB-collateral");
  if (helpCollA) helpCollA.textContent = collateralHelp[output.advA_collateral.value] || "Selecione uma mitigação para ver a explicação.";
  if (helpCollB) helpCollB.textContent = collateralHelp[output.advB_collateral.value] || "Selecione uma mitigação para ver a explicação.";
  spreadExplanation: document.querySelector("#spreadExplanation"),
  costExplanation: document.querySelector("#costExplanation"),
  scoreBreakdown: document.querySelector("#scoreBreakdown"),
  modelizedModel: document.querySelector("#modelizedModel"),
  scenarioAData: document.querySelector("#scenarioAData"),
  scenarioBData: document.querySelector("#scenarioBData"),
  comparisonSummary: document.querySelector("#comparisonSummary"),
  comparisonStatus: document.querySelector("#comparisonStatus"),
  nextActionHint: document.querySelector("#nextActionHint"),
  advancedEditor: document.querySelector("#advancedEditor"),
  splitEditor: document.querySelector("#splitEditor"),
  copyAtoB: document.querySelector("#copyAtoB"),
  copyBtoA: document.querySelector("#copyBtoA"),
  advA_country: document.querySelector("#advA_country"),
  advA_amount: document.querySelector("#advA_amount"),
  advA_tenorDays: document.querySelector("#advA_tenorDays"),
  advA_fxVolatility: document.querySelector("#advA_fxVolatility"),
  advA_hedgeRatio: document.querySelector("#advA_hedgeRatio"),
  advA_instrument: document.querySelector("#advA_instrument"),
  advA_fxInstrument: document.querySelector("#advA_fxInstrument"),
  advA_incoterm: document.querySelector("#advA_incoterm"),
  advA_paymentStructure: document.querySelector("#advA_paymentStructure"),
  advA_documentationQuality: document.querySelector("#advA_documentationQuality"),
  advA_instrumentFeeBps: document.querySelector("#advA_instrumentFeeBps"),
  advA_fxFeeBps: document.querySelector("#advA_fxFeeBps"),
  advA_counterpartyStrength: document.querySelector("#advA_counterpartyStrength"),
  advA_collateral: document.querySelector("#advA_collateral"),
  advB_country: document.querySelector("#advB_country"),
  advB_amount: document.querySelector("#advB_amount"),
  advB_tenorDays: document.querySelector("#advB_tenorDays"),
  advB_fxVolatility: document.querySelector("#advB_fxVolatility"),
  advB_hedgeRatio: document.querySelector("#advB_hedgeRatio"),
  advB_instrument: document.querySelector("#advB_instrument"),
  advB_fxInstrument: document.querySelector("#advB_fxInstrument"),
  advB_incoterm: document.querySelector("#advB_incoterm"),
  advB_paymentStructure: document.querySelector("#advB_paymentStructure"),
  advB_documentationQuality: document.querySelector("#advB_documentationQuality"),
  advB_instrumentFeeBps: document.querySelector("#advB_instrumentFeeBps"),
  advB_fxFeeBps: document.querySelector("#advB_fxFeeBps"),
  advB_counterpartyStrength: document.querySelector("#advB_counterpartyStrength"),
  advB_collateral: document.querySelector("#advB_collateral"),
  cmpScoreA: document.querySelector("#cmpScoreA"),
  cmpScoreB: document.querySelector("#cmpScoreB"),
  cmpScoreDelta: document.querySelector("#cmpScoreDelta"),
  cmpSpreadA: document.querySelector("#cmpSpreadA"),
  cmpSpreadB: document.querySelector("#cmpSpreadB"),
  cmpSpreadDelta: document.querySelector("#cmpSpreadDelta"),
  cmpCostA: document.querySelector("#cmpCostA"),
  cmpCostB: document.querySelector("#cmpCostB"),
  cmpCostDelta: document.querySelector("#cmpCostDelta"),
  copyComparison: document.querySelector("#copyComparison"),
  clearScenarios: document.querySelector("#clearScenarios"),
  compareCardA: document.querySelector("#compareCardA"),
  compareCardB: document.querySelector("#compareCardB"),
};

const SCORE_CALIBRATION = {
  countryGradeFactor: 0.62,
  countryClassFactor: 0.88,
  structuralFactor: 0.42,
};

const compareState = {
  A: null,
  B: null,
  lastResult: null,
  assumptionsLabel: "",
};

const gradeWeights = {
  AA1: 8,
  A1: 12,
  A2: 16,
  B1: 23,
  B2: 29,
  B3: 35,
  BB1: 42,
  BB2: 48,
  C2: 58,
  C3: 68,
  C4: 76,
  D3: 86,
  D4: 94,
};

const countryRiskWeights = {
  Low: 4,
  Medium: 10,
  Sensitive: 16,
  High: 22,
};

const instrumentProfiles = {
  "bank-guarantee": { score: 12, spreadBps: 65, label: "A garantia bancária reduz o incumprimento comercial, mas acrescenta custo bancário." },
  "advance-payment": { score: 5, spreadBps: 25, label: "O adiantamento reduz o risco de crédito e a concentração do recebimento." },
  "importer-financing": { score: 18, spreadBps: 95, label: "O importador assume o financiamento; o risco de reembolso e liquidez continua relevante." },
  "exporter-financing": { score: 24, spreadBps: 130, label: "O exportador financia a contraparte e assume maior exposição de crédito." },
  leasing: { score: 20, spreadBps: 110, label: "O leasing combina risco do ativo, da contraparte e da recuperação residual." },
  factoring: { score: 16, spreadBps: 90, label: "O factoring reduz o esforço de cobrança, mas depende da qualidade dos recebíveis." },
  forfaiting: { score: 11, spreadBps: 72, label: "O forfaiting transfere o risco para um financiador e suaviza o perfil da operação." },
};

const incotermProfiles = {
  exw: { score: 7, spreadBps: 18, label: "EXW transfere a maior parte da logística para o comprador, reduzindo a exposição operacional do exportador." },
  fob: { score: 9, spreadBps: 24, label: "FOB ainda concentra algum risco operacional antes do embarque, mas já reparte melhor as responsabilidades." },
  cif: { score: 12, spreadBps: 34, label: "CIF acrescenta frete e seguro, o que aumenta a complexidade e o custo da operação." },
  dap: { score: 15, spreadBps: 48, label: "DAP expande a responsabilidade do exportador até ao destino e tende a exigir mais margem." },
  ddp: { score: 18, spreadBps: 60, label: "DDP concentra as maiores obrigações no exportador e normalmente encarece a operação." },
};

const paymentProfiles = {
  advance: { score: 4, spreadBps: 12, label: "O adiantamento reduz o risco de crédito porque o exportador recebe antes de entregar." },
  lc: { score: 8, spreadBps: 22, label: "A carta de crédito reduz o risco da contraparte, mas acrescenta custo documental e bancário." },
  "documentary-collection": { score: 13, spreadBps: 34, label: "A cobrança documentária disciplina o pagamento, mas não elimina o risco de recusa ou atraso." },
  "open-account": { score: 20, spreadBps: 58, label: "A conta aberta aumenta a exposição de crédito e alonga o ciclo financeiro do exportador." },
};

const documentationWeights = {
  strong: { score: -6, spreadBps: -18, label: "Documentação estrita reduz disputas, erros formais e fricção de cobrança." },
  standard: { score: 0, spreadBps: 0, label: "Documentação normal não altera muito o risco base de forma material." },
  weak: { score: 10, spreadBps: 28, label: "Documentação fraca aumenta a probabilidade de atraso, rejeição ou litígio." },
};

const fxProfiles = {
  unhedged: { score: 18, spreadBps: 70, label: "Sem cobertura, a operação fica totalmente exposta ao movimento cambial." },
  spot: { score: 11, spreadBps: 40, label: "Spot limita o prazo de exposição, mas não protege fluxos futuros." },
  forward: { score: 5, spreadBps: 28, label: "Forward estabiliza a taxa futura e reduz a incerteza da margem." },
  options: { score: 4, spreadBps: 36, label: "Opções cambiais protegem o downside, mas o prémio entra no custo total." },
};

const counterpartyWeights = {
  strong: { score: 4, spreadBps: 10, label: "A contraparte forte tende a reduzir risco de atraso e incumprimento, baixando o pricing." },
  average: { score: 10, spreadBps: 28, label: "Perfil médio, sem mitigação material nem agravamento relevante." },
  weak: { score: 20, spreadBps: 65, label: "A fragilidade financeira aumenta o risco de atraso e incumprimento." },
};

const collateralWeights = {
  none: { score: 0, spreadBps: 0, label: "Sem mitigação adicional." },
  partial: { score: -7, spreadBps: -18, label: "Seguro ou colateral parcial reduz a perda esperada e melhora o pricing." },
  strong: { score: -14, spreadBps: -42, label: "Seguro ou colateral forte comprime o risco e gera um spread inferior." },
};

const incotermHelp = {
  exw: "EXW desloca mais logística para o comprador: baixa a exposição operacional do exportador, mas pode exigir maior coordenação do lado do importador.",
  fob: "FOB divide melhor as responsabilidades, com risco operacional ainda relevante até ao embarque.",
  cif: "CIF acrescenta frete e seguro, elevando custo e complexidade da operação.",
  dap: "DAP aumenta a obrigação do exportador até ao destino e tende a puxar o pricing para cima.",
  ddp: "DDP concentra o maior peso no exportador, por isso normalmente é o cenário mais caro e mais exposto operacionalmente.",
};

const paymentHelp = {
  advance: "Adiantamento reduz o risco de crédito porque o exportador recebe antes de entregar.",
  lc: "Carta de crédito protege mais o recebimento, mas traz custo bancário e documental.",
  "documentary-collection": "Cobrança documentária controla a entrega dos documentos, mas não elimina o risco de recusa ou atraso.",
  "open-account": "Conta aberta aumenta a exposição ao incumprimento e normalmente exige spread superior.",
};

const documentationHelp = {
  strong: "Documentação estrita reduz erros formais, devoluções e atrasos, ajudando a baixar o spread.",
  standard: "Documentação normal não altera muito o risco base.",
  weak: "Documentação fraca aumenta a probabilidade de disputa, atraso e custo de tratamento.",
};

const instrumentHelp = {
  "bank-guarantee": "A garantia bancária reduz o risco comercial. Aqui soma 12 pontos ao score e 65 bps ao spread, refletindo o custo da estrutura e da emissão.",
  "advance-payment": "Adiantamento melhora o risco de recebimento. Aqui soma 5 pontos e 25 bps, por isso tende a ser uma das opções mais leves.",
  "importer-financing": "Financiamento pelo importador mantém algum risco de reembolso e liquidez. Aqui soma 18 pontos e 95 bps ao pricing.",
  "exporter-financing": "Financiamento pelo exportador aumenta a exposição de crédito. Aqui soma 24 pontos e 130 bps, sendo uma das opções mais caras.",
  leasing: "Leasing combina risco da contraparte, do ativo e da recuperação futura. Aqui soma 20 pontos e 110 bps.",
  factoring: "Factoring reduz o esforço de cobrança, mas depende da qualidade dos recebíveis. Aqui soma 16 pontos e 90 bps.",
  forfaiting: "Forfaiting transfere o risco para um financiador e suaviza a exposição do exportador. Aqui soma 11 pontos e 72 bps.",
};

const fxInstrumentHelp = {
  spot: "Spot reduz o prazo de exposição, mas não protege fluxos futuros. Aqui soma 11 pontos e 40 bps.",
  forward: "Forward estabiliza a taxa futura e diminui a incerteza de margem. Aqui soma 5 pontos e 28 bps.",
  options: "Opções cambiais protegem o downside, mas o prémio entra no custo total. Aqui soma 4 pontos e 36 bps.",
  unhedged: "Sem cobertura, a operação fica totalmente exposta ao movimento cambial. Aqui soma 18 pontos e 70 bps.",
};

const counterpartyHelp = {
  strong: "Uma contraparte forte tende a reduzir risco de atraso e incumprimento, baixando o pricing.",
  average: "Uma contraparte média não altera muito o risco base.",
  weak: "Uma contraparte frágil eleva o risco de incumprimento e pressiona o spread.",
};

const collateralHelp = {
  none: "Sem garantias adicionais, o modelo não aplica mitigação extra.",
  partial: "Seguro ou colateral parcial reduz a perda esperada e melhora o pricing.",
  strong: "Seguro ou colateral forte comprime o risco e gera um spread inferior.",
};

function setHelp(node, text) {
  if (node) {
    node.textContent = text;
  }
}

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function populateCountries() {
  const countries = [...window.COUNTRY_DATA];

  countries.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.country;
    option.textContent = `${entry.country} (${entry.grade} | ${entry.risk})`;
    countrySelect.append(option);

    const advOptionA = document.createElement("option");
    advOptionA.value = entry.country;
    advOptionA.textContent = `${entry.country} (${entry.grade} | ${entry.risk})`;
    output.advA_country.append(advOptionA);

    const advOptionB = document.createElement("option");
    advOptionB.value = entry.country;
    advOptionB.textContent = `${entry.country} (${entry.grade} | ${entry.risk})`;
    output.advB_country.append(advOptionB);
  });

  const portugalOption = countries.find((entry) => entry.country === "Portugal");
  countrySelect.value = portugalOption ? portugalOption.country : countries[0].country;
  output.advA_country.value = countrySelect.value;
  output.advB_country.value = countries.find((entry) => entry.country === "Germany")?.country ?? countries[countries.length - 1].country;
}

function cloneOptions(sourceSelectId, targetSelectId) {
  const source = document.querySelector(`#${sourceSelectId}`);
  const target = document.querySelector(`#${targetSelectId}`);

  if (!source || !target) {
    return;
  }

  target.innerHTML = source.innerHTML;
}

function initializeAdvancedSplitEditor() {
  const selectIds = [
    "incoterm",
    "paymentStructure",
    "documentationQuality",
    "instrument",
    "fxInstrument",
    "counterpartyStrength",
    "collateral",
  ];

  selectIds.forEach((id) => {
    cloneOptions(id, `advA_${id}`);
    cloneOptions(id, `advB_${id}`);
  });

  output.advA_amount.value = form.amount.value;
  output.advA_tenorDays.value = form.tenorDays.value;
  output.advA_fxVolatility.value = form.fxVolatility.value;
  output.advA_hedgeRatio.value = form.hedgeRatio.value;
  output.advA_instrumentFeeBps.value = form.instrumentFeeBps.value;
  output.advA_fxFeeBps.value = form.fxFeeBps.value;

  output.advB_amount.value = form.amount.value;
  output.advB_tenorDays.value = form.tenorDays.value;
  output.advB_fxVolatility.value = form.fxVolatility.value;
  output.advB_hedgeRatio.value = form.hedgeRatio.value;
  output.advB_instrumentFeeBps.value = form.instrumentFeeBps.value;
  output.advB_fxFeeBps.value = form.fxFeeBps.value;

  selectIds.forEach((id) => {
    output[`advA_${id}`].value = form[id].value;
    output[`advB_${id}`].value = form[id].value;
  });

  // Atualiza todas as mensagens de apoio na inicialização
  updateAdvancedFieldHelp();

  // Atualiza ajuda da contraparte na inicialização
  updateAdvancedCounterpartyHelp();

  ADVANCED_DISTINCT_KEYS.forEach((key) => {
    if (distinctToggles[key]) {
      distinctToggles[key].checked = false;
    }
    // Listeners para atualizar mensagens de apoio
    const advA = output[`advA_${key}`];
    const advB = output[`advB_${key}`];
    if (advA) advA.addEventListener("input", updateAdvancedFieldHelp);
    if (advB) advB.addEventListener("input", updateAdvancedFieldHelp);
  });

  applyDistinctLocks();
  updateAdvancedFieldHelp();
}

const ADVANCED_FIELD_KEYS = [
  "country",
  "amount",
  "tenorDays",
  "fxVolatility",
  "hedgeRatio",
  "instrument",
  "fxInstrument",
  "incoterm",
  "paymentStructure",
  "documentationQuality",
  "instrumentFeeBps",
  "fxFeeBps",
  "counterpartyStrength",
  "collateral",
];

const ADVANCED_DISTINCT_KEYS = ADVANCED_FIELD_KEYS.filter((key) => key !== "country");
const distinctToggles = Object.fromEntries(
  ADVANCED_DISTINCT_KEYS.map((key) => [key, document.querySelector(`#diff_${key}`)])
);

function copyAdvancedValues(fromPrefix, toPrefix, { includeCountry = true } = {}) {
  ADVANCED_FIELD_KEYS.forEach((key) => {
    if (!includeCountry && key === "country") {
      return;
    }

    output[`adv${toPrefix}_${key}`].value = output[`adv${fromPrefix}_${key}`].value;
  });

  applyDistinctLocks();
}

function updateDistinctFieldState(key) {
  const toggle = distinctToggles[key];
  if (!toggle) {
    return;
  }

  const isDistinct = toggle.checked;
  output[`advB_${key}`].disabled = !isDistinct;
  output[`advB_${key}`].classList.toggle("field-locked", !isDistinct);

  if (!isDistinct) {
    output[`advB_${key}`].value = output[`advA_${key}`].value;
  }
}

function applyDistinctLocks() {
  ADVANCED_DISTINCT_KEYS.forEach((key) => {
    updateDistinctFieldState(key);
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getCountryProfile(countryName) {
  return window.COUNTRY_DATA.find((entry) => entry.country === countryName) ?? window.COUNTRY_DATA[0];
}

function computeTenorScore(tenorDays) {
  return clamp(4 + tenorDays / 18, 4, 28);
}

function computeTenorSpread(tenorDays) {
  return clamp(12 + tenorDays * 0.25, 12, 160);
}

function computeFxVolatilityScore(fxVolatility) {
  return clamp(fxVolatility * 1.2, 0, 30);
}

function computeFxVolatilitySpread(fxVolatility) {
  return clamp(fxVolatility * 2.4, 0, 120);
}

function getRiskBand(score) {
  if (score < 30) {
    return "Baixo";
  }
  if (score < 50) {
    return "Moderado";
  }
  if (score < 70) {
    return "Elevado";
  }
  return "Muito elevado";
}

function explainScore(score) {
  if (score < 30) {
    return "Score baixo: a operação apresenta exposição relativamente controlada face aos parâmetros escolhidos.";
  }
  if (score < 50) {
    return "Score moderado: existe risco relevante, mas ainda com margem para mitigação via estrutura e cobertura.";
  }
  if (score < 70) {
    return "Score elevado: a operação exige maior prudência, pois vários fatores estão a pressionar o risco.";
  }
  return "Score muito elevado: a combinação de variáveis indica risco significativo e necessidade de mitigação adicional.";
}

function explainSpread(spreadBps, annualSpreadPct) {
  if (spreadBps < 250) {
    return `Spread comprimido (${annualSpreadPct}%/ano): custo de risco relativamente baixo para o perfil atual.`;
  }
  if (spreadBps < 450) {
    return `Spread intermédio (${annualSpreadPct}%/ano): custo compatível com um risco moderado da operação.`;
  }
  if (spreadBps < 650) {
    return `Spread elevado (${annualSpreadPct}%/ano): o risco percebido está a aumentar o preço da operação.`;
  }
  return `Spread muito elevado (${annualSpreadPct}%/ano): o risco agregado e as comissões contratadas estão a penalizar fortemente o pricing.`;
}

function explainCost(estimatedCost, amount, tenorDays) {
  const ratio = amount > 0 ? (estimatedCost / amount) * 100 : 0;
  return `Custo estimado no prazo (${tenorDays} dias): ${formatCurrency(estimatedCost)}, equivalente a ${ratio.toFixed(2)}% do montante nesta janela temporal.`;
}

function updateFieldHelp() {
  const formData = new FormData(form);
  const country = getCountryProfile(formData.get("country"));
  const amount = Number(formData.get("amount")) || 0;
  const tenorDays = Number(formData.get("tenorDays")) || 0;
  const fxVolatility = Number(formData.get("fxVolatility")) || 0;
  const hedgeRatio = Number(formData.get("hedgeRatio")) || 0;
  const incoterm = formData.get("incoterm");
  const paymentStructure = formData.get("paymentStructure");
  const documentationQuality = formData.get("documentationQuality");
  const instrument = formData.get("instrument");
  const fxInstrument = formData.get("fxInstrument");
  const instrumentFeeBps = Number(formData.get("instrumentFeeBps")) || 0;
  const fxFeeBps = Number(formData.get("fxFeeBps")) || 0;
  const counterpartyStrength = formData.get("counterpartyStrength");
  const collateral = formData.get("collateral");

  const countryGradeText = `${country.country}: grade ${country.grade}, risco ${country.risk}. Melhores ratings puxam o score para baixo; piores ratings aumentam o spread.`;
  const amountText = amount >= 250000 ? "Montantes maiores não mudam muito o score, mas aumentam o custo absoluto da operação." : "Montantes menores reduzem o custo absoluto, embora o spread percentual continue a depender do risco.";
  const tenorText = tenorDays >= 180 ? "Prazos longos elevam o risco e o pricing porque aumentam a janela para evento de crédito e volatilidade." : "Prazos curtos comprimem a exposição e normalmente geram pricing mais baixo.";
  const fxVolText = fxVolatility >= 15 ? "Volatilidade elevada aumenta a incerteza cambial e empurra o spread para cima." : "Volatilidade contida tende a estabilizar o custo cambial.";
  const hedgeText = hedgeRatio >= 70 ? "Maior cobertura reduz a componente cambial do risco e ajuda a baixar o spread." : hedgeRatio <= 20 ? "Cobertura reduzida deixa a operação mais exposta ao FX e tende a encarecer o pricing." : "Cobertura parcial mitiga parte do risco cambial sem eliminar o custo.";
  const instrumentFeeText = instrumentFeeBps > 0
    ? `A comissão contratada do instrumento é de ${instrumentFeeBps} bps e entra directamente no pricing final.`
    : "Se não houver comissão contratada, não existe custo adicional do instrumento para além do próprio spread de risco.";
  const fxFeeText = fxFeeBps > 0
    ? `A comissão/taxa cambial contratada é de ${fxFeeBps} bps e aumenta o custo total da cobertura ou conversão cambial.`
    : "Se não houver comissão cambial, não existe custo adicional dessa componente.";

  setHelp(fieldHelp.country, countryGradeText);
  setHelp(fieldHelp.amount, amountText);
  setHelp(fieldHelp.tenorDays, tenorText);
  setHelp(fieldHelp.fxVolatility, fxVolText);
  setHelp(fieldHelp.hedgeRatio, hedgeText);
  setHelp(fieldHelp.incoterm, incotermHelp[incoterm]);
  setHelp(fieldHelp.paymentStructure, paymentHelp[paymentStructure]);
  setHelp(fieldHelp.documentationQuality, documentationHelp[documentationQuality]);
  setHelp(fieldHelp.instrument, instrumentHelp[instrument]);
  setHelp(fieldHelp.fxInstrument, fxInstrumentHelp[fxInstrument]);
  setHelp(fieldHelp.instrumentFeeBps, instrumentFeeText);
  setHelp(fieldHelp.fxFeeBps, fxFeeText);
  setHelp(fieldHelp.counterpartyStrength, counterpartyHelp[counterpartyStrength]);
  setHelp(fieldHelp.collateral, collateralHelp[collateral]);
}

function buildModelizedModel(data) {
  const modelHeader = "1) Modelo com variáveis e ponderadores";
  const modelVariables = [
    "S = score de risco final",
    "B = spread final (bps)",
    "WG = ponderador do grade do país",
    "WR = ponderador da classe de risco",
    `a = fator de ponderação do grade (${SCORE_CALIBRATION.countryGradeFactor})`,
    `b = fator de ponderação da classe de risco (${SCORE_CALIBRATION.countryClassFactor})`,
    `g = fator de ponderação estrutural (${SCORE_CALIBRATION.structuralFactor})`,
    "WT = clamp(4 + prazo/18, 4, 28)",
    "WV = clamp(volatilidade * 1.2, 0, 30)",
    "WH = clamp(cobertura * 0.12, 0, 12)",
    "K = ponderador do instrumento",
    "I = ponderador do incoterm",
    "P = ponderador da estrutura de pagamento",
    "X = ponderador da estratégia cambial",
    "C = ponderador da contraparte",
    "M = ponderador da mitigação adicional",
    "D = ponderador da qualidade documental",
    "BI = custo base do instrumento (bps)",
    "BN = custo base do incoterm (bps)",
    "BP = custo base da estrutura de pagamento (bps)",
    "BX = custo base da estratégia cambial (bps)",
    "BC = custo base da contraparte (bps)",
    "BM = custo base da mitigação adicional (bps)",
    "BD = custo base da qualidade documental (bps)",
    "BT = clamp(12 + 0.25 * prazo, 12, 160)",
    "BV = clamp(2.4 * volatilidade, 0, 120)",
    "FI = comissão do instrumento (bps)",
    "FX = comissão/taxa cambial (bps)",
  ].join("\n");

  const modelScoreEq = "S = clamp(a*WG + b*WR + g*(WT + WV + K + I + P + X + C + M + D - WH), 1, 100)";
  const modelSpreadEq = "B = round(55 + 3.5*S + BI + BN + BP + BX + FI + FX + BT + BV + BC + BM + BD - 0.6*cobertura)";
  const modelCostEq = "Custo = Montante * (B/10000) * (Prazo/360)";

  const valuesHeader = "2) Modelo com valores definidos pelo utilizador";
  const scoreValues = [
    `S = clamp(${SCORE_CALIBRATION.countryGradeFactor}*${data.countryScore.toFixed(1)} + ${SCORE_CALIBRATION.countryClassFactor}*${data.countryRiskScore.toFixed(1)} + ${SCORE_CALIBRATION.structuralFactor}*(${data.tenorScore.toFixed(1)} + ${data.fxVolScore.toFixed(1)} + ${data.instrument.score.toFixed(1)} + ${data.incoterm.score.toFixed(1)} + ${data.payment.score.toFixed(1)} + ${data.fxInstrument.score.toFixed(1)} + ${data.counterparty.score.toFixed(1)} + ${data.collateral.score.toFixed(1)} + ${data.documentation.score.toFixed(1)} - ${data.hedgeMitigation.toFixed(1)}), 1, 100)`,
    `S = ${data.riskScore.toFixed(1)} pontos`,
  ].join("\n");

  const spreadValues = [
    `B = round(55 + 3.5*${data.riskScore.toFixed(1)} + ${data.instrument.spreadBps} + ${data.incoterm.spreadBps} + ${data.payment.spreadBps} + ${data.fxInstrument.spreadBps} + ${data.instrumentFeeBps} + ${data.fxFeeBps} + ${data.tenorSpread.toFixed(1)} + ${data.fxVolSpread.toFixed(1)} + ${data.counterparty.spreadBps} + ${data.collateral.spreadBps} + ${data.documentation.spreadBps} - ${(data.hedgeRatio * 0.6).toFixed(1)})`,
    `B = ${data.spreadBps} bps`,
  ].join("\n");

  const annualSpreadPct = (data.annualSpread * 100).toFixed(2);
  const costValues = [
    `Custo = ${formatCurrency(data.amount)} * (${data.spreadBps}/10000) * (${data.tenorDays}/360)`,
    `Custo = ${formatCurrency(data.estimatedCost)} (${annualSpreadPct}% anual)`
  ].join("\n");

  return [
    modelHeader,
    modelVariables,
    modelScoreEq,
    modelSpreadEq,
    modelCostEq,
    "",
    valuesHeader,
    scoreValues,
    spreadValues,
    costValues,
  ].join("\n\n");
}

function buildScenarioSnapshot(data) {
  return {
    country: data.country.country,
    grade: data.country.grade,
    riskClass: data.country.risk,
    instrument: data.instrumentName,
    fx: data.fxInstrumentName,
    score: data.riskScore,
    spreadBps: data.spreadBps,
    estimatedCost: data.estimatedCost,
    amount: data.amount,
    tenorDays: data.tenorDays,
    assumptionsKey: data.assumptionsKey,
    assumptionsLabel: data.assumptionsLabel,
  };
}

function formatSignedNumber(value, decimals = 1) {
  if (value === 0) {
    return `0.${"0".repeat(decimals)}`;
  }

  const sign = value > 0 ? "+" : "-";
  return `${sign}${Math.abs(value).toFixed(decimals)}`;
}

function formatSignedInt(value) {
  if (value === 0) {
    return "0";
  }

  const sign = value > 0 ? "+" : "-";
  return `${sign}${Math.abs(value)}`;
}

function formatSignedCurrency(value) {
  if (value === 0) {
    return formatCurrency(0);
  }

  const sign = value > 0 ? "+" : "-";
  return `${sign}${formatCurrency(Math.abs(value))}`;
}

function fillComparisonMetrics(a, b) {
  output.cmpScoreA.textContent = a ? a.score.toFixed(1) : "-";
  output.cmpScoreB.textContent = b ? b.score.toFixed(1) : "-";
  output.cmpSpreadA.textContent = a ? `${a.spreadBps} bps` : "-";
  output.cmpSpreadB.textContent = b ? `${b.spreadBps} bps` : "-";
  output.cmpCostA.textContent = a ? formatCurrency(a.estimatedCost) : "-";
  output.cmpCostB.textContent = b ? formatCurrency(b.estimatedCost) : "-";

  if (!a || !b) {
    output.cmpScoreDelta.textContent = "-";
    output.cmpSpreadDelta.textContent = "-";
    output.cmpCostDelta.textContent = "-";
    return;
  }

  output.cmpScoreDelta.textContent = `${formatSignedNumber(b.score - a.score, 1)} pontos`;
  output.cmpSpreadDelta.textContent = `${formatSignedInt(b.spreadBps - a.spreadBps)} bps`;
  output.cmpCostDelta.textContent = formatSignedCurrency(b.estimatedCost - a.estimatedCost);
}

function renderScenarioText(snapshot) {
  if (!snapshot) {
    return "Ainda não guardado.";
  }

  return [
    `${snapshot.country} (${snapshot.grade} | ${snapshot.riskClass})`,
    `Instrumento: ${snapshot.instrument}`,
    `Estratégia cambial: ${snapshot.fx}`,
    `Score: ${snapshot.score.toFixed(1)} | Spread: ${snapshot.spreadBps} bps`,
    `Custo (${snapshot.tenorDays} dias): ${formatCurrency(snapshot.estimatedCost)}`,
  ].join("\n");
}

function renderComparison() {
  output.scenarioAData.textContent = renderScenarioText(compareState.A);
  output.scenarioBData.textContent = renderScenarioText(compareState.B);
  fillComparisonMetrics(compareState.A, compareState.B);
  output.comparisonStatus.textContent = "";
  updateNextActionHint();

  if (!compareState.A || !compareState.B) {
    output.comparisonSummary.textContent = "Ajuste os parâmetros lado a lado (A/B). A comparação atualiza automaticamente.";
    return;
  }

  const deltaScore = compareState.B.score - compareState.A.score;
  const deltaSpread = compareState.B.spreadBps - compareState.A.spreadBps;
  const deltaCost = compareState.B.estimatedCost - compareState.A.estimatedCost;

  const betterRiskCountry = compareState.A.score < compareState.B.score ? compareState.A.country : compareState.B.country;
  const betterSpreadCountry = compareState.A.spreadBps < compareState.B.spreadBps ? compareState.A.country : compareState.B.country;
  const betterCostCountry = compareState.A.estimatedCost < compareState.B.estimatedCost ? compareState.A.country : compareState.B.country;

  const scoreText = deltaScore === 0
    ? "Score igual"
    : `Score ${deltaScore > 0 ? "mais alto" : "mais baixo"} em ${Math.abs(deltaScore).toFixed(1)} pontos`;
  const spreadText = deltaSpread === 0
    ? "spread igual"
    : `spread ${deltaSpread > 0 ? "mais alto" : "mais baixo"} em ${Math.abs(deltaSpread)} bps`;
  const costText = deltaCost === 0
    ? "custo igual"
    : `custo ${deltaCost > 0 ? "mais alto" : "mais baixo"} em ${formatCurrency(Math.abs(deltaCost))}`;

  output.comparisonSummary.textContent = `No cenário B, face ao cenário A: ${scoreText}, ${spreadText} e ${costText}. País com melhor resultado por métrica: risco (${betterRiskCountry}), spread (${betterSpreadCountry}) e custo (${betterCostCountry}).`;

  if (compareState.A.assumptionsKey !== compareState.B.assumptionsKey) {
    output.comparisonStatus.textContent = "Atenção: os pressupostos entre A e B não são iguais. Para comparar apenas países, mantenha os restantes campos iguais.";
  } else {
    output.comparisonStatus.textContent = `Pressupostos alinhados: ${compareState.A.assumptionsLabel}. A comparação isola essencialmente o efeito do país.`;
  }
}

async function copyComparisonToClipboard() {
  if (!compareState.A || !compareState.B) {
    output.comparisonStatus.textContent = "Complete a comparação A/B antes de copiar.";
    return;
  }

  const text = [
    "Comparação de cenários (A vs B)",
    `A: ${renderScenarioText(compareState.A).replaceAll("\n", " | ")}`,
    `B: ${renderScenarioText(compareState.B).replaceAll("\n", " | ")}`,
    `Resumo: ${output.comparisonSummary.textContent}`,
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    output.comparisonStatus.textContent = "Comparação copiada para a área de transferência.";
  } catch {
    output.comparisonStatus.textContent = "Não foi possível copiar automaticamente. Tente novamente.";
  }
}

function clearScenarios() {
  initializeAdvancedSplitEditor();
  recomputeAdvancedComparison();
}

function getSelectedOptionText(selectId, value) {
  const option = form.querySelector(`#${selectId} option[value="${value}"]`);
  return option ? option.textContent : value;
}

function buildAssumptionsKey(formData) {
  const fields = [
    "amount",
    "tenorDays",
    "fxVolatility",
    "hedgeRatio",
    "incoterm",
    "paymentStructure",
    "documentationQuality",
    "instrument",
    "fxInstrument",
    "instrumentFeeBps",
    "fxFeeBps",
    "counterpartyStrength",
    "collateral",
  ];

  return fields.map((field) => `${field}:${formData.get(field)}`).join("|");
}

function buildAssumptionsLabel(formData) {
  return [
    `instrumento ${getSelectedOptionText("instrument", formData.get("instrument"))}`,
    `estratégia ${getSelectedOptionText("fxInstrument", formData.get("fxInstrument"))}`,
    `prazo ${formData.get("tenorDays")} dias`,
    `volatilidade ${formData.get("fxVolatility")}%`,
  ].join(", ");
}

function updateNextActionHint() {
  output.nextActionHint.textContent = "Tabela A/B ativa: assinale 'Diferente?' apenas nas variáveis que quer separar entre A e B. O resto fica alinhado automaticamente.";
}

function buildAssumptionsKeyFromValues(values) {
  return [
    `amount:${values.amount}`,
    `tenorDays:${values.tenorDays}`,
    `fxVolatility:${values.fxVolatility}`,
    `hedgeRatio:${values.hedgeRatio}`,
    `incoterm:${values.incoterm}`,
    `paymentStructure:${values.paymentStructure}`,
    `documentationQuality:${values.documentationQuality}`,
    `instrument:${values.instrument}`,
    `fxInstrument:${values.fxInstrument}`,
    `instrumentFeeBps:${values.instrumentFeeBps}`,
    `fxFeeBps:${values.fxFeeBps}`,
    `counterpartyStrength:${values.counterpartyStrength}`,
    `collateral:${values.collateral}`,
  ].join("|");
}

function readAdvancedScenario(prefix) {
  const base = `adv${prefix}_`;
  const values = {
    country: output[`${base}country`].value,
    amount: Number(output[`${base}amount`].value) || 0,
    tenorDays: Number(output[`${base}tenorDays`].value) || 0,
    fxVolatility: Number(output[`${base}fxVolatility`].value) || 0,
    hedgeRatio: Number(output[`${base}hedgeRatio`].value) || 0,
    instrument: output[`${base}instrument`].value,
    fxInstrument: output[`${base}fxInstrument`].value,
    incoterm: output[`${base}incoterm`].value,
    paymentStructure: output[`${base}paymentStructure`].value,
    documentationQuality: output[`${base}documentationQuality`].value,
    instrumentFeeBps: Number(output[`${base}instrumentFeeBps`].value) || 0,
    fxFeeBps: Number(output[`${base}fxFeeBps`].value) || 0,
    counterpartyStrength: output[`${base}counterpartyStrength`].value,
    collateral: output[`${base}collateral`].value,
  };

  const assumptions = {
    amount: values.amount,
    tenorDays: values.tenorDays,
    fxVolatility: values.fxVolatility,
    hedgeRatio: values.hedgeRatio,
    instrument: instrumentProfiles[values.instrument],
    incoterm: incotermProfiles[values.incoterm],
    payment: paymentProfiles[values.paymentStructure],
    fxInstrument: fxProfiles[values.fxInstrument],
    instrumentFeeBps: values.instrumentFeeBps,
    fxFeeBps: values.fxFeeBps,
    counterparty: counterpartyWeights[values.counterpartyStrength],
    collateral: collateralWeights[values.collateral],
    documentation: documentationWeights[values.documentationQuality],
    instrumentName: output[`${base}instrument`].selectedOptions[0]?.textContent ?? values.instrument,
    fxInstrumentName: output[`${base}fxInstrument`].selectedOptions[0]?.textContent ?? values.fxInstrument,
    assumptionsKey: buildAssumptionsKeyFromValues(values),
    assumptionsLabel: [
      `instrumento ${output[`${base}instrument`].selectedOptions[0]?.textContent ?? values.instrument}`,
      `estratégia ${output[`${base}fxInstrument`].selectedOptions[0]?.textContent ?? values.fxInstrument}`,
      `prazo ${values.tenorDays} dias`,
      `volatilidade ${values.fxVolatility}%`,
    ].join(", "),
  };

  return buildScenarioSnapshot(computeScenarioForCountry(values.country, assumptions));
}

function recomputeAdvancedComparison() {
  compareState.A = readAdvancedScenario("A");
  compareState.B = readAdvancedScenario("B");
  renderComparison();
}

function handleAdvancedInput(prefix, key) {
  if (prefix === "A" && key !== "country" && !distinctToggles[key]?.checked) {
    output[`advB_${key}`].value = output[`advA_${key}`].value;
  }

  recomputeAdvancedComparison();
}

function computeScenarioForCountry(countryName, assumptions) {
  const country = getCountryProfile(countryName);
  const countryScore = gradeWeights[country.grade] ?? 40;
  const countryRiskScore = countryRiskWeights[country.risk] ?? 10;

  const tenorScore = computeTenorScore(assumptions.tenorDays);
  const tenorSpread = computeTenorSpread(assumptions.tenorDays);
  const fxVolScore = computeFxVolatilityScore(assumptions.fxVolatility);
  const fxVolSpread = computeFxVolatilitySpread(assumptions.fxVolatility);
  const hedgeMitigation = clamp(assumptions.hedgeRatio * 0.12, 0, 12);

  const structuralScore =
    tenorScore +
    fxVolScore +
    assumptions.instrument.score +
    assumptions.incoterm.score +
    assumptions.payment.score +
    assumptions.fxInstrument.score +
    assumptions.counterparty.score +
    assumptions.collateral.score +
    assumptions.documentation.score -
    hedgeMitigation;

  const weightedCountryGrade = countryScore * SCORE_CALIBRATION.countryGradeFactor;
  const weightedCountryRisk = countryRiskScore * SCORE_CALIBRATION.countryClassFactor;
  const weightedStructural = structuralScore * SCORE_CALIBRATION.structuralFactor;
  const riskScore = clamp(weightedCountryGrade + weightedCountryRisk + weightedStructural, 1, 100);

  const spreadBps = Math.round(
    55 +
      riskScore * 3.5 +
      assumptions.instrument.spreadBps +
      assumptions.incoterm.spreadBps +
      assumptions.payment.spreadBps +
      assumptions.fxInstrument.spreadBps +
      assumptions.instrumentFeeBps +
      assumptions.fxFeeBps +
      tenorSpread +
      fxVolSpread +
      assumptions.counterparty.spreadBps +
      assumptions.collateral.spreadBps +
      assumptions.documentation.spreadBps -
      assumptions.hedgeRatio * 0.6
  );

  const annualSpread = spreadBps / 10000;
  const estimatedCost = assumptions.amount * annualSpread * (assumptions.tenorDays / 360);

  return {
    country,
    instrumentName: assumptions.instrumentName,
    fxInstrumentName: assumptions.fxInstrumentName,
    riskScore,
    spreadBps,
    estimatedCost,
    amount: assumptions.amount,
    tenorDays: assumptions.tenorDays,
    assumptionsKey: assumptions.assumptionsKey,
    assumptionsLabel: assumptions.assumptionsLabel,
  };
}

function calculate(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const country = getCountryProfile(formData.get("country"));
  const amount = Number(formData.get("amount")) || 0;
  const tenorDays = Number(formData.get("tenorDays")) || 0;
  const fxVolatility = Number(formData.get("fxVolatility")) || 0;
  const hedgeRatio = Number(formData.get("hedgeRatio")) || 0;
  const instrument = instrumentProfiles[formData.get("instrument")];
  const incoterm = incotermProfiles[formData.get("incoterm")];
  const payment = paymentProfiles[formData.get("paymentStructure")];
  const fxInstrument = fxProfiles[formData.get("fxInstrument")];
  const instrumentFeeBps = Number(formData.get("instrumentFeeBps")) || 0;
  const fxFeeBps = Number(formData.get("fxFeeBps")) || 0;
  const counterparty = counterpartyWeights[formData.get("counterpartyStrength")];
  const collateral = collateralWeights[formData.get("collateral")];
  const documentation = documentationWeights[formData.get("documentationQuality")];

  const countryScore = gradeWeights[country.grade] ?? 40;
  const countryRiskScore = countryRiskWeights[country.risk] ?? 10;
  const tenorScore = computeTenorScore(tenorDays);
  const tenorSpread = computeTenorSpread(tenorDays);
  const fxVolScore = computeFxVolatilityScore(fxVolatility);
  const fxVolSpread = computeFxVolatilitySpread(fxVolatility);
  const hedgeMitigation = clamp(hedgeRatio * 0.12, 0, 12);

  const structuralScore =
    tenorScore +
    fxVolScore +
    instrument.score +
    incoterm.score +
    payment.score +
    fxInstrument.score +
    counterparty.score +
    collateral.score +
    documentation.score -
    hedgeMitigation;

  const weightedCountryGrade = countryScore * SCORE_CALIBRATION.countryGradeFactor;
  const weightedCountryRisk = countryRiskScore * SCORE_CALIBRATION.countryClassFactor;
  const weightedStructural = structuralScore * SCORE_CALIBRATION.structuralFactor;

  const rawScore = weightedCountryGrade + weightedCountryRisk + weightedStructural;

  const riskScore = clamp(rawScore, 1, 100);

  const spreadBps = Math.round(
    55 +
      riskScore * 3.5 +
      instrument.spreadBps +
      incoterm.spreadBps +
      payment.spreadBps +
      fxInstrument.spreadBps +
      instrumentFeeBps +
      fxFeeBps +
        tenorSpread +
        fxVolSpread +
      counterparty.spreadBps +
      collateral.spreadBps +
    documentation.spreadBps -
      hedgeRatio * 0.6
  );

  const annualSpread = spreadBps / 10000;
  const estimatedCost = amount * annualSpread * (tenorDays / 360);

  output.riskScore.textContent = riskScore.toFixed(1);
  output.riskLabel.textContent = getRiskBand(riskScore);
  output.annualSpread.textContent = `${(annualSpread * 100).toFixed(2)}%`;
  output.spreadBps.textContent = `${spreadBps} bps`;
  output.estimatedCost.textContent = formatCurrency(estimatedCost);
  output.costNote.textContent = `${formatCurrency(amount)} x ${(annualSpread * 100).toFixed(2)}% x ${tenorDays}/360`;
  output.scoreExplanation.textContent = explainScore(riskScore);
  output.spreadExplanation.textContent = explainSpread(spreadBps, (annualSpread * 100).toFixed(2));
  output.costExplanation.textContent = explainCost(estimatedCost, amount, tenorDays);

  const breakdownItems = [
    [`País ponderado (x${SCORE_CALIBRATION.countryGradeFactor})`, weightedCountryGrade],
    [`Classe de risco ponderada (x${SCORE_CALIBRATION.countryClassFactor})`, weightedCountryRisk],
    [`Prazo ponderado (x${SCORE_CALIBRATION.structuralFactor})`, tenorScore * SCORE_CALIBRATION.structuralFactor],
    [`Volatilidade cambial ponderada (x${SCORE_CALIBRATION.structuralFactor})`, fxVolScore * SCORE_CALIBRATION.structuralFactor],
    [`Instrumento principal ponderado (x${SCORE_CALIBRATION.structuralFactor})`, instrument.score * SCORE_CALIBRATION.structuralFactor],
    [`Incoterm ponderado (x${SCORE_CALIBRATION.structuralFactor})`, incoterm.score * SCORE_CALIBRATION.structuralFactor],
    [`Estrutura de pagamento ponderada (x${SCORE_CALIBRATION.structuralFactor})`, payment.score * SCORE_CALIBRATION.structuralFactor],
    [`Estratégia cambial ponderada (x${SCORE_CALIBRATION.structuralFactor})`, fxInstrument.score * SCORE_CALIBRATION.structuralFactor],
    ["Comissão do instrumento", `${instrumentFeeBps} bps`],
    ["Comissão/taxa cambial", `${fxFeeBps} bps`],
    [`Qualidade da contraparte ponderada (x${SCORE_CALIBRATION.structuralFactor})`, counterparty.score * SCORE_CALIBRATION.structuralFactor],
    [`Mitigação adicional ponderada (x${SCORE_CALIBRATION.structuralFactor})`, collateral.score * SCORE_CALIBRATION.structuralFactor],
    [`Qualidade documental ponderada (x${SCORE_CALIBRATION.structuralFactor})`, documentation.score * SCORE_CALIBRATION.structuralFactor],
    [`Cobertura cambial ponderada (x${SCORE_CALIBRATION.structuralFactor})`, -hedgeMitigation * SCORE_CALIBRATION.structuralFactor],
  ];

  output.scoreBreakdown.innerHTML = breakdownItems
    .map(([label, value]) => {
      if (typeof value === "number") {
        return `<li>${label}: ${value >= 0 ? "+" : ""}${value.toFixed(1)} pontos</li>`;
      }

      return `<li>${label}: ${value}</li>`;
    })
    .join("");

  output.modelizedModel.textContent = buildModelizedModel({
    countryScore,
    countryRiskScore,
    tenorScore,
    tenorSpread,
    fxVolScore,
    fxVolSpread,
    hedgeMitigation,
    riskScore,
    instrument,
    incoterm,
    payment,
    fxInstrument,
    counterparty,
    collateral,
    documentation,
    instrumentFeeBps,
    fxFeeBps,
    hedgeRatio,
    spreadBps,
    annualSpread,
    amount,
    estimatedCost,
    tenorDays,
  });

  compareState.lastResult = {
    country,
    instrumentName: getSelectedOptionText("instrument", formData.get("instrument")),
    fxInstrumentName: getSelectedOptionText("fxInstrument", formData.get("fxInstrument")),
    riskScore,
    spreadBps,
    estimatedCost,
    amount,
    tenorDays,
    assumptionsKey: buildAssumptionsKey(formData),
    assumptionsLabel: buildAssumptionsLabel(formData),
  };

  updateFieldHelp();
}

populateCountries();
initializeAdvancedSplitEditor();
form.addEventListener("submit", calculate);
form.addEventListener("change", updateFieldHelp);
form.addEventListener("input", updateFieldHelp);
output.copyAtoB.addEventListener("click", () => {
  copyAdvancedValues("A", "B", { includeCountry: true });
  recomputeAdvancedComparison();
  output.comparisonStatus.textContent = "Cenário B copiado a partir do cenário A.";
});
output.copyBtoA.addEventListener("click", () => {
  copyAdvancedValues("B", "A", { includeCountry: true });
  recomputeAdvancedComparison();
  output.comparisonStatus.textContent = "Cenário A copiado a partir do cenário B.";
});
output.copyComparison.addEventListener("click", copyComparisonToClipboard);
output.clearScenarios.addEventListener("click", clearScenarios);

ADVANCED_FIELD_KEYS.forEach((key) => {
  output[`advA_${key}`].addEventListener("input", () => handleAdvancedInput("A", key));
  output[`advA_${key}`].addEventListener("change", () => handleAdvancedInput("A", key));
  output[`advB_${key}`].addEventListener("input", () => handleAdvancedInput("B", key));
  output[`advB_${key}`].addEventListener("change", () => handleAdvancedInput("B", key));
});

ADVANCED_DISTINCT_KEYS.forEach((key) => {
  const toggle = distinctToggles[key];
  if (!toggle) {
    return;
  }

  toggle.addEventListener("change", () => {
    updateDistinctFieldState(key);
    recomputeAdvancedComparison();
  });
});

recomputeAdvancedComparison();
updateFieldHelp();
form.requestSubmit();