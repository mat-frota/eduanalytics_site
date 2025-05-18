// Dados dos estados por região
const stateData = [
    { state: 'Acre', region: 'norte', ideb: 6.2, learning: 6.5505, flow: 0.9415, approval: 94.1, performance: 'Alto' },
    { state: 'Alagoas', region: 'nordeste', ideb: 5.2, learning: 5.4653, flow: 0.9527, approval: 95.1, performance: 'Médio' },
    { state: 'Amapá', region: 'norte', ideb: 4.8, learning: 5.3548, flow: 0.8907, approval: 88.7, performance: 'Baixo' },
    { state: 'Amazonas', region: 'norte', ideb: 5.8, learning: 6.0438, flow: 0.9563, approval: 95.4, performance: 'Médio' },
    { state: 'Bahia', region: 'nordeste', ideb: 5.0, learning: 5.7648, flow: 0.8664, approval: 86.3, performance: 'Médio' },
    { state: 'Ceará', region: 'nordeste', ideb: 6.5, learning: 6.8664, flow: 0.9513, approval: 95.0, performance: 'Alto' },
    { state: 'Distrito Federal', region: 'centro-oeste', ideb: 6.1, learning: 6.4693, flow: 0.9485, approval: 94.8, performance: 'Alto' },
    { state: 'Espírito Santo', region: 'sudeste', ideb: 6.1, learning: 6.3011, flow: 0.9603, approval: 95.9, performance: 'Alto' },
    { state: 'Goiás', region: 'centro-oeste', ideb: 6.4, learning: 6.5197, flow: 0.9877, approval: 98.5, performance: 'Alto' },
    { state: 'Maranhão', region: 'nordeste', ideb: 3.9, learning: 4.7360, flow: 0.8148, approval: 81.1, performance: 'Baixo' },
    { state: 'Mato Grosso', region: 'centro-oeste', ideb: 5.6, learning: 5.7568, flow: 0.9697, approval: 97.1, performance: 'Médio' },
    { state: 'Mato Grosso do Sul', region: 'centro-oeste', ideb: 5.7, learning: 6.1149, flow: 0.9308, approval: 92.4, performance: 'Médio' },
    { state: 'Minas Gerais', region: 'sudeste', ideb: 6.5, learning: 6.4830, flow: 0.9954, approval: 99.5, performance: 'Alto' },
    { state: 'Pará', region: 'norte', ideb: 5.0, learning: 5.4123, flow: 0.9160, approval: 90.9, performance: 'Médio' },
    { state: 'Paraíba', region: 'nordeste', ideb: 4.9, learning: 5.3937, flow: 0.9165, approval: 90.9, performance: 'Baixo' },
    { state: 'Paraná', region: 'sul', ideb: 6.8, learning: 7.5927, flow: 0.8980, approval: 89.8, performance: 'Excelente' },
    { state: 'Pernambuco', region: 'nordeste', ideb: 5.0, learning: 5.8508, flow: 0.8573, approval: 85.8, performance: 'Médio' },
    { state: 'Piauí', region: 'nordeste', ideb: 6.0, learning: 6.4291, flow: 0.9334, approval: 92.2, performance: 'Alto' },
    { state: 'Rio de Janeiro', region: 'sudeste', ideb: 5.4, learning: 6.0516, flow: 0.9005, approval: 89.9, performance: 'Médio' },
    { state: 'Rio Grande do Norte', region: 'nordeste', ideb: 4.9, learning: 5.3610, flow: 0.9155, approval: 90.6, performance: 'Baixo' },
    { state: 'Rio Grande do Sul', region: 'sul', ideb: 5.8, learning: 6.2864, flow: 0.9247, approval: 92.3, performance: 'Médio' },
    { state: 'Rondônia', region: 'norte', ideb: 5.7, learning: 6.0244, flow: 0.9412, approval: 93.5, performance: 'Médio' },
    { state: 'Roraima', region: 'norte', ideb: null, learning: null, flow: 0.9269, approval: 92.7, performance: 'Sem dados' },
    { state: 'Santa Catarina', region: 'sul', ideb: 5.9, learning: 6.2363, flow: 0.9476, approval: 94.6, performance: 'Médio' },
    { state: 'São Paulo', region: 'sudeste', ideb: 6.6, learning: 6.6611, flow: 0.9903, approval: 99.0, performance: 'Alto' },
    { state: 'Sergipe', region: 'nordeste', ideb: 5.0, learning: 5.4353, flow: 0.9134, approval: 90.0, performance: 'Médio' }
];

// Dados de evolução histórica (exemplo simplificado)
const historicalData = {
    labels: ['2015', '2017', '2019', '2021'],
    datasets: [
        {
            label: 'Paraná',
            data: [5.8, 6.0, 6.5, 6.8],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            tension: 0.3,
            fill: true
        },
        {
            label: 'São Paulo',
            data: [5.8, 6.0, 6.3, 6.6],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.3,
            fill: true
        },
        {
            label: 'Ceará',
            data: [4.9, 5.3, 6.0, 6.5],
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            tension: 0.3,
            fill: true
        },
        {
            label: 'Maranhão',
            data: [3.2, 3.5, 3.7, 3.9],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.3,
            fill: true
        }
    ]
};

// Dados por região
const regionData = {
    norte: { ideb: 5.4, learning: 5.8, flow: 0.93, approval: 92.5 },
    nordeste: { ideb: 5.1, learning: 5.6, flow: 0.89, approval: 89.3 },
    centro: { ideb: 6.0, learning: 6.2, flow: 0.96, approval: 96.1 },
    sudeste: { ideb: 6.1, learning: 6.3, flow: 0.95, approval: 95.8 },
    sul: { ideb: 6.2, learning: 6.7, flow: 0.92, approval: 92.2 }
};

// Preencher tabela interativa
function populateTable(region = 'all') {
    const tableBody = document.querySelector('#interactiveTable tbody');
    tableBody.innerHTML = '';

    const filteredData = region === 'all'
        ? stateData
        : stateData.filter(state => state.region === region);

    filteredData.forEach(state => {
        const row = document.createElement('tr');
        row.className = 'state-row';

        // Mapear região para nome completo
        let regionName = '';
        switch (state.region) {
            case 'norte': regionName = 'Norte'; break;
            case 'nordeste': regionName = 'Nordeste'; break;
            case 'centro-oeste': regionName = 'Centro-Oeste'; break;
            case 'sudeste': regionName = 'Sudeste'; break;
            case 'sul': regionName = 'Sul'; break;
        }

        row.innerHTML = `
                    <td class="px-6 py-4 whitespace-nowrap font-medium">${state.state}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${regionName}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${state.ideb || 'N/A'}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${state.learning ? state.learning.toFixed(4) : 'N/A'}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${state.flow ? state.flow.toFixed(4) : 'N/A'}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${state.approval ? state.approval + '%' : 'N/A'}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${state.performance === 'Excelente' ?
                '<span class="badge badge-blue"><i class="fas fa-star mr-1"></i> Excelente</span>' :
                state.performance === 'Alto' ?
                    '<span class="badge badge-green">Alto</span>' :
                    state.performance === 'Médio' ?
                        '<span class="badge badge-yellow">Médio</span>' :
                        state.performance === 'Baixo' ?
                            '<span class="badge badge-red">Baixo</span>' :
                            '<span class="badge">Sem dados</span>'}
                    </td>
                `;

        tableBody.appendChild(row);
    });
}

// Inicializar tabela
populateTable();

// Event listeners para filtros de região
document.querySelectorAll('.region-filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.region-filter-btn').forEach(b => b.classList.remove('active', 'bg-indigo-600', 'text-white'));
        this.classList.add('active', 'bg-indigo-600', 'text-white');
        const region = this.getAttribute('data-region');
        populateTable(region);
    });
});

// Event listeners para seleção de região
document.querySelectorAll('.region-selector').forEach(selector => {
    selector.addEventListener('click', function () {
        document.querySelectorAll('.region-selector').forEach(s => {
            s.classList.remove('active', 'border-indigo-500');
            s.classList.add('border-transparent');
        });
        this.classList.add('active', 'border-indigo-500');
        this.classList.remove('border-transparent');

        // Aqui você pode atualizar os gráficos com base na região selecionada
        const region = this.getAttribute('data-region');
        updateChartsForRegion(region);
    });
});

// Função para atualizar gráficos com base na região (simplificado)
function updateChartsForRegion(region) {
    // Esta função seria implementada para filtrar os dados dos gráficos
    console.log('Atualizando gráficos para região:', region);
}

// Event listeners para abas
document.querySelectorAll('.tab-button').forEach((button, index) => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active', 'border-indigo-500', 'text-indigo-600'));
        this.classList.add('active', 'border-indigo-500', 'text-indigo-600');

        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
        document.querySelectorAll('.tab-content')[index].classList.remove('hidden');
    });
});

// Event listeners para botões de evolução
document.querySelectorAll('.evolution-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.evolution-btn').forEach(b => {
            b.classList.remove('active', 'bg-indigo-600', 'text-white');
            b.classList.add('bg-white', 'text-gray-700');
        });
        this.classList.add('active', 'bg-indigo-600', 'text-white');
        this.classList.remove('bg-white', 'text-gray-700');

        const years = this.getAttribute('data-years');
        updateEvolutionChart(years);
    });
});

// Função para atualizar gráfico de evolução (simplificado)
function updateEvolutionChart(years) {
    console.log('Atualizando gráfico para anos:', years);
    // Implementação real filtraria os dados conforme o período selecionado
}

// Inicializar gráficos
function initializeCharts() {
    // Gráfico de comparação por estado
    const stateComparisonCtx = document.getElementById('stateComparisonChart').getContext('2d');
    new Chart(stateComparisonCtx, {
        type: 'bar',
        data: {
            labels: stateData.map(state => state.state),
            datasets: [{
                label: 'IDEB',
                data: stateData.map(state => state.ideb),
                backgroundColor: stateData.map(state => {
                    if (state.ideb >= 6.0) return 'rgba(74, 222, 128, 0.7)';
                    if (state.ideb >= 5.0) return 'rgba(250, 204, 21, 0.7)';
                    return 'rgba(248, 113, 113, 0.7)';
                }),
                borderColor: stateData.map(state => {
                    if (state.ideb >= 6.0) return 'rgba(74, 222, 128, 1)';
                    if (state.ideb >= 5.0) return 'rgba(250, 204, 21, 1)';
                    return 'rgba(248, 113, 113, 1)';
                }),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 8,
                    title: {
                        display: true,
                        text: 'IDEB'
                    }
                },
                x: {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const state = stateData.find(s => s.state === context.label);
                            return [
                                `IDEB: ${context.raw}`,
                                `Aprendizado: ${state.learning ? state.learning.toFixed(4) : 'N/A'}`,
                                `Aprovação: ${state.approval ? state.approval + '%' : 'N/A'}`
                            ];
                        }
                    }
                }
            }
        }
    });

    // Gráfico de pizza por região
    const regionPieCtx = document.getElementById('regionPieChart').getContext('2d');
    new Chart(regionPieCtx, {
        type: 'pie',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
            datasets: [{
                data: [5.4, 5.1, 6.0, 6.1, 6.2],
                backgroundColor: [
                    'rgba(22, 163, 74, 0.7)',
                    'rgba(250, 204, 21, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(168, 85, 247, 0.7)',
                    'rgba(6, 182, 212, 0.7)'
                ],
                borderColor: [
                    'rgba(22, 163, 74, 1)',
                    'rgba(250, 204, 21, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(168, 85, 247, 1)',
                    'rgba(6, 182, 212, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Média IDEB: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });

    // Gráfico de radar para aprendizado por região
    const learningRadarCtx = document.getElementById('learningRadarChart').getContext('2d');
    new Chart(learningRadarCtx, {
        type: 'radar',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
            datasets: [{
                label: 'Aprendizado',
                data: [5.8, 5.6, 6.2, 6.3, 6.7],
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
                borderColor: 'rgba(79, 70, 229, 1)',
                pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(79, 70, 229, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 4,
                    suggestedMax: 7
                }
            }
        }
    });

    // Gráfico de linha para evolução histórica
    const evolutionLineCtx = document.getElementById('evolutionLineChart').getContext('2d');
    new Chart(evolutionLineCtx, {
        type: 'line',
        data: historicalData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 3,
                    max: 7,
                    title: {
                        display: true,
                        text: 'IDEB'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.dataset.label}: ${context.raw}`;
                        }
                    }
                }
            }
        }
    });

    // Gráfico de dispersão para correlação
    const correlationScatterCtx = document.getElementById('correlationScatterChart').getContext('2d');
    new Chart(correlationScatterCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Estados',
                data: stateData.filter(s => s.learning && s.flow).map(state => ({
                    x: state.learning,
                    y: state.flow
                })),
                backgroundColor: stateData.filter(s => s.learning && s.flow).map(state => {
                    if (state.ideb >= 6.0) return 'rgba(74, 222, 128, 0.7)';
                    if (state.ideb >= 5.0) return 'rgba(250, 204, 21, 0.7)';
                    return 'rgba(248, 113, 113, 0.7)';
                }),
                borderColor: stateData.filter(s => s.learning && s.flow).map(state => {
                    if (state.ideb >= 6.0) return 'rgba(74, 222, 128, 1)';
                    if (state.ideb >= 5.0) return 'rgba(250, 204, 21, 1)';
                    return 'rgba(248, 113, 113, 1)';
                }),
                borderWidth: 1,
                pointRadius: 8,
                pointHoverRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Aprendizado'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Fluxo'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const state = stateData.find(s =>
                                Math.abs(s.learning - context.parsed.x) < 0.1 &&
                                Math.abs(s.flow - context.parsed.y) < 0.01
                            );
                            return state ? [
                                `Estado: ${state.state}`,
                                `Aprendizado: ${context.parsed.x.toFixed(4)}`,
                                `Fluxo: ${context.parsed.y.toFixed(4)}`,
                                `IDEB: ${state.ideb}`
                            ] : '';
                        }
                    }
                }
            }
        }
    });

    // Gráfico de barras para top 10 estados
    const topStates = [...stateData]
        .filter(s => s.ideb)
        .sort((a, b) => b.ideb - a.ideb)
        .slice(0, 10);

    const topStatesCtx = document.getElementById('topStatesChart').getContext('2d');
    new Chart(topStatesCtx, {
        type: 'bar',
        data: {
            labels: topStates.map(state => state.state),
            datasets: [{
                label: 'IDEB',
                data: topStates.map(state => state.ideb),
                backgroundColor: 'rgba(74, 222, 128, 0.7)',
                borderColor: 'rgba(74, 222, 128, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 5,
                    max: 7,
                    title: {
                        display: true,
                        text: 'IDEB'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const state = topStates[context.dataIndex];
                            return [
                                `IDEB: ${context.raw}`,
                                `Posição: ${context.dataIndex + 1}º`
                            ];
                        }
                    }
                }
            }
        }
    });

    // Gráfico de barras para bottom 10 estados
    const bottomStates = [...stateData]
        .filter(s => s.ideb)
        .sort((a, b) => a.ideb - b.ideb)
        .slice(0, 10);

    const bottomStatesCtx = document.getElementById('bottomStatesChart').getContext('2d');
    new Chart(bottomStatesCtx, {
        type: 'bar',
        data: {
            labels: bottomStates.map(state => state.state),
            datasets: [{
                label: 'IDEB',
                data: bottomStates.map(state => state.ideb),
                backgroundColor: 'rgba(248, 113, 113, 0.7)',
                borderColor: 'rgba(248, 113, 113, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 3,
                    max: 5.5,
                    title: {
                        display: true,
                        text: 'IDEB'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const state = bottomStates[context.dataIndex];
                            return [
                                `IDEB: ${context.raw}`,
                                `Posição: ${stateData.filter(s => s.ideb).length - (10 - context.dataIndex)}º`
                            ];
                        }
                    }
                }
            }
        }
    });

    // Gráfico de barras para comparação regional
    const regionBarCtx = document.getElementById('regionBarChart').getContext('2d');
    new Chart(regionBarCtx, {
        type: 'bar',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
            datasets: [
                {
                    label: 'IDEB',
                    data: [5.4, 5.1, 6.0, 6.1, 6.2],
                    backgroundColor: 'rgba(79, 70, 229, 0.7)',
                    borderColor: 'rgba(79, 70, 229, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Aprendizado',
                    data: [5.8, 5.6, 6.2, 6.3, 6.7],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 4,
                    max: 7,
                    title: {
                        display: true,
                        text: 'Pontuação'
                    }
                }
            }
        }
    });

    // Gráfico de donut para aprovação por região
    const approvalDonutCtx = document.getElementById('approvalDonutChart').getContext('2d');
    new Chart(approvalDonutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
            datasets: [{
                data: [92.5, 89.3, 96.1, 95.8, 92.2],
                backgroundColor: [
                    'rgba(22, 163, 74, 0.7)',
                    'rgba(250, 204, 21, 0.7)',
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(168, 85, 247, 0.7)',
                    'rgba(6, 182, 212, 0.7)'
                ],
                borderColor: [
                    'rgba(22, 163, 74, 1)',
                    'rgba(250, 204, 21, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(168, 85, 247, 1)',
                    'rgba(6, 182, 212, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Aprovação: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Gráfico de radar para fluxo por região
    const flowRadarCtx = document.getElementById('flowRadarChart').getContext('2d');
    new Chart(flowRadarCtx, {
        type: 'radar',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
            datasets: [
                {
                    label: 'Fluxo',
                    data: [0.93, 0.89, 0.96, 0.95, 0.92],
                    backgroundColor: 'rgba(99, 102, 241, 0.2)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(99, 102, 241, 1)'
                },
                {
                    label: 'Média Nacional',
                    data: [0.9287, 0.9287, 0.9287, 0.9287, 0.9287],
                    backgroundColor: 'rgba(156, 163, 175, 0.2)',
                    borderColor: 'rgba(156, 163, 175, 1)',
                    pointBackgroundColor: 'rgba(156, 163, 175, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(156, 163, 175, 1)',
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0.8,
                    suggestedMax: 1.0
                }
            }
        }
    });
}

// Inicializar gráficos quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initializeCharts);