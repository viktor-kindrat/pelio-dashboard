let genData = [];
for (let i=0; i!==5; i++) {
    genData.push(Math.round(Math.random() * 100))
}
function setChart1(data) {
    const ctx = document.getElementById('statistic-chart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1.5', '2', '2.5', '3', '3.5', '4'],
            datasets: [{
                label: '',
                data: genData,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 250)',
                    'rgb(255, 159, 64)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 251)',
                    'rgb(255, 159, 64)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false //This will do the task
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                },
                y: {
                    grid: {
                        display: false
                    },
                    beginAtZero: false
                }
            }
        }
    });
}

function setChart2(data) {
    const newCtx = document.getElementById('transactions-chart');
    const newChart = new Chart(newCtx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                label: '',
                data: data,
                fill: false,
                borderColor: '#FF684D',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 7,
                tension: 0.4
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
        }
    });
}

setChart1(genData)
setChart2(genData)
