let genData = [];
for (let i=0; i!==5; i++) {
    genData.push(Math.round(Math.random() * (100 - 20) + 20))
}

let statsCtx = document.getElementById('statistics-open-counter');
let statChart = new Chart (statsCtx, {
    type: 'line',
    data: {
        labels: ['j', 'd', 'f', 'a', 'd', 'd'],
        datasets: [{
            label: 'Web site visits',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#FF684D',
            tension: 0.1
        }]
    }
})

let ctx = document.getElementById('statistic-chart');
let myChart = new Chart(ctx, {
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

let newCtx = document.getElementById('transactions-chart');
let newChart = new Chart(newCtx, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '',
            data: genData,
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

function setChart1(data) {
    myChart.destroy();
    let ctx = document.getElementById('statistic-chart');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1.5', '2', '2.5', '3', '3.5', '4'],
            datasets: [{
                label: '',
                data: data,
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
    newChart.destroy();
    let newCtx = document.getElementById('transactions-chart');
    newChart = new Chart(newCtx, {
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

function setStatChart() {
    let data = [];
    for (let i = visits.length - 1; data.length !== 6; i--) {
        if (i >= 0) {
            data.unshift(visits[i].visiting);
        } else if (data.length !== 6) {
            data.unshift(0)
        }
    }
    statChart.destroy();
    let statsCtx = document.getElementById('statistics-open-counter');
    statChart = new Chart (statsCtx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                label: 'Web site visits',
                data: data,
                fill: false,
                borderColor: '#FF684D',
                tension: 0.1
            }]
        }
    })
}

setStatChart();
setChart1(actualUser.data1);
setChart2(actualUser.data2);