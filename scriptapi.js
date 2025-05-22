document.addEventListener('DOMContentLoaded', function () {
  const loadingElement = document.getElementById('loading')
  const errorElement = document.getElementById('error')
  const cardsContainer = document.getElementById('cardsContainer')

  const estadoSelect = document.getElementById('estado')
  const anoSelect = document.getElementById('ano')
  const dependenciaSelect = document.getElementById('dependencia')
  const cicloSelect = document.getElementById('ciclo')
  const buscarBtn = document.getElementById('buscarBtn')

  const token = 'uCepcSkwipY8IqOGft3XWe8RWvUTyjr94abLkYN6'
  const baseURL = 'https://api.qedu.org.br/v1/ideb'

  buscarBtn.addEventListener('click', () => {
    const id = estadoSelect.value
    const ano = anoSelect.value
    const dependencia_id = dependenciaSelect.value
    const ciclo_id = cicloSelect.value

    const params = { id, ano, dependencia_id, ciclo_id }

    const options = {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      params
    }

    errorElement.style.display = 'none'
    cardsContainer.innerHTML = ''
    loadingElement.style.display = 'block'

    axios.get(baseURL, options)
      .then((response) => {
        if (!response.data || !response.data.data || !response.data.data.length) {
          throw new Error('Nenhum dado encontrado na resposta da API')
        }

        loadingElement.style.display = 'none'
        cardsContainer.style.display = 'grid'

        createCards(response.data)
      })
      .catch((error) => {
        console.error('Erro na requisição:', error)

        let errorMessage = 'Erro na requisição: ' + error.message
        if (error.response) {
          errorMessage += ` (Status: ${error.response.status})`
        }

        errorElement.textContent = errorMessage
        errorElement.style.display = 'block'
        loadingElement.style.display = 'none'
      })
  })

  function createCards(data) {
    try {
      const dataItem = data.data[0]

      const indicators = [
        {
          title: 'IDEB',
          value: parseFloat(dataItem.ideb),
          description: 'Índice de Desenvolvimento da Educação Básica',
          color: '#1f77b4'
        },
        {
          title: 'Aprendizado',
          value: parseFloat(dataItem.aprendizado),
          description: 'Indicador de aprendizado',
          color: '#ff7f0e'
        },
        {
          title: 'Fluxo',
          value: parseFloat(dataItem.fluxo),
          description: 'Indicador de fluxo escolar',
          color: '#2ca02c'
        },
        {
          title: 'Aprovação',
          value: parseFloat(dataItem.aprovacao),
          description: 'Taxa de aprovação (%)',
          color: '#d62728'
        }
      ]

      indicators.forEach(indicator => {
        const card = document.createElement('div')
        card.className = 'card'

        const title = document.createElement('div')
        title.className = 'card-title'
        title.textContent = indicator.title

        const value = document.createElement('div')
        value.className = 'card-value'
        value.style.color = indicator.color
        value.textContent = isNaN(indicator.value) ? 'N/A' : indicator.value

        const description = document.createElement('div')
        description.className = 'card-description'
        description.textContent = indicator.description

        card.appendChild(title)
        card.appendChild(value)
        card.appendChild(description)

        cardsContainer.appendChild(card)
      })
    } catch (error) {
      console.error('Erro ao criar cards:', error)
      errorElement.textContent = 'Erro ao criar cards: ' + error.message
      errorElement.style.display = 'block'
    }
  }
})

