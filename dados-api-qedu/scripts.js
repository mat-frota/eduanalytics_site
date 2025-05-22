document.addEventListener('DOMContentLoaded', function () {
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error');
  const cardsContainer = document.getElementById('cardsContainer');

  const baseURL = 'https://api.qedu.org.br/v1/ideb';
  const token = 'GvFIhNv6PdeAYufF7kf2v5uZJJ002V60KFMMSJUM';

  const estados = [
    { estado: "Acre", id: 12 },
    { estado: "Alagoas", id: 27 },
    { estado: "Amapá", id: 16 },
    { estado: "Amazonas", id: 13 },
    { estado: "Bahia", id: 29 },
    { estado: "Ceará", id: 23 },
    { estado: "Distrito Federal", id: 53 },
    { estado: "Espírito Santo", id: 32 },
    { estado: "Goiás", id: 52 },
    { estado: "Maranhão", id: 21 },
    { estado: "Mato Grosso", id: 51 },
    { estado: "Mato Grosso do Sul", id: 50 },
    { estado: "Minas Gerais", id: 31 },
    { estado: "Pará", id: 15 },
    { estado: "Paraíba", id: 25 },
    { estado: "Paraná", id: 41 },
    { estado: "Pernambuco", id: 26 },
    { estado: "Piauí", id: 22 },
    { estado: "Rio de Janeiro", id: 33 },
    { estado: "Rio Grande do Norte", id: 24 },
    { estado: "Rio Grande do Sul", id: 43 },
    { estado: "Rondônia", id: 11 },
    { estado: "Roraima", id: 14 },
    { estado: "Santa Catarina", id: 42 },
    { estado: "São Paulo", id: 35 },
    { estado: "Sergipe", id: 28 },
    { estado: "Tocantins", id: 17 }
  ];

  async function fetchEstadoData(estado) {
    const params = {
      id: estado.id,
      ano: 2019,
      dependencia_id: 2,
      ciclo_id: 'AI'
    };

    try {
      const response = await axios.get(baseURL, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        params
      });

      if (response.data && response.data.data && response.data.data.length > 0) {
        createCards(response.data, estado.estado);
      } else {
        console.warn(`Nenhum dado encontrado para ${estado.estado}`);
      }
    } catch (error) {
      console.error(`Erro na requisição para ${estado.estado}:`, error);
      const errorDiv = document.createElement('div');
      errorDiv.textContent = `Erro ao carregar dados de ${estado.estado}: ${error.message}`;
      errorDiv.style.color = 'red';
      cardsContainer.appendChild(errorDiv);
    }
  }

  function createCards(data, estadoNome) {
    const dataItem = data.data[0];

    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = estadoNome;
    cardsContainer.appendChild(sectionTitle);

    const indicators = [
      { title: 'IDEB', value: parseFloat(dataItem.ideb), description: 'Índice de Desenvolvimento da Educação Básica' },
      { title: 'Aprendizado', value: parseFloat(dataItem.aprendizado), description: 'Indicador de aprendizado' },
      { title: 'Fluxo', value: parseFloat(dataItem.fluxo), description: 'Indicador de fluxo escolar' },
      { title: 'Aprovação', value: parseFloat(dataItem.aprovacao), description: 'Taxa de aprovação (%)' }
    ];

    const stateContainer = document.createElement('div');
    stateContainer.className = 'estado-cards';

    indicators.forEach(indicator => {
      const card = document.createElement('div');
      card.className = 'card';

      const title = document.createElement('div');
      title.className = 'card-title';
      title.textContent = indicator.title;

      const value = document.createElement('div');
      value.className = 'card-value';
      value.textContent = isNaN(indicator.value) ? '—' : indicator.value;

      const description = document.createElement('div');
      description.className = 'card-description';
      description.textContent = indicator.description;

      card.appendChild(title);
      card.appendChild(value);
      card.appendChild(description);

      stateContainer.appendChild(card);
    });

    cardsContainer.appendChild(stateContainer);
  }

  // Executa todas as chamadas e exibe após o fim
  async function carregarTodosOsEstados() {
    loadingElement.style.display = 'block';
    cardsContainer.style.display = 'none';
    errorElement.style.display = 'none';

    for (const estado of estados) {
      await fetchEstadoData(estado);
    }

    loadingElement.style.display = 'none';
    cardsContainer.style.display = 'grid';
  }

  carregarTodosOsEstados();
});
