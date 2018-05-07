$(function () {
    var defectRate = document.getElementById("defectRate");
    var status = document.getElementById("status");
    var openCloseBugs = document.getElementById("openCloseBugs");
    var progressExecucao = document.getElementById("progressExecucao");
    var listaProjetos = [];

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var circle = new Path2D();
    circle.arc(25, 25, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill(circle);

    var chart = new Chart(defectRate, {
        type: 'line',
        data: {
            labels: ['11/04/18', '12/04/18', '13/04/18', '14/04/18', '15/04/18', '16/04/18', '17/04/18', '18/04/18',
                '19/04/18', '20/04/18', '21/04/18', '22/04/18'],
            datasets: [{
                backgroundColor: 'rgb(232,71,28)',
                pointBackgroundColor: 'rgb(232,71,28)',
                borderColor: 'rgb(232,71,28)',
                data: ['69.0', '5.7', '4.9', '4.9', '4.9', '22.1', '12.1', '6.8', '6.8', '6.8', '6.8', '6.8'],
                datalabels: {
                    align: '-50',
                    anchor: 'end',
                    rotation: -25,
                    offset: -5
                },
                lineTension: 0,
                fill: false,
                label: "Defect Rate",
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 5,
                    right: 30,
                    top: 0,
                    bottom: 0
                }
            },
            plugins: {
                datalabels: {
                    backgroundColor: function (context) {
                        return context.dataset.backgroundColor;
                    },
                    borderRadius: 4,
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 10
                    },
                    formatter: function (value, context) {
                        return value + "%";
                    }

                },
            },
            scales: {
                xAxes: [{
                    ticks: {
                        minRotation: 50
                    }
                }]
            }
        }
    });

    var chart = new Chart(status, {
        type: 'pie',
        data: {
            labels: ['TCs Passed', 'TCs N/A', 'TCs Failed', 'TCs Blocked', 'TCs No Run'],
            datasets: [{
                data: ['10', '20', '30', '10', '30'],
                datalabels: {
                    anchor: 'end',
                },
                backgroundColor: [
                    'rgb(0,176,80)',
                    'rgb(190,227,149)',
                    'rgb(255,0,0)',
                    'rgb(64,64,64)',
                    'rgb(217,217,217)'
                ]
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 5,
                    right: 30,
                    top: 0,
                    bottom: 5
                }
            },
            plugins: {
                datalabels: {
                    backgroundColor: function (context) {
                        return context.dataset.backgroundColor;
                    },
                    borderColor: 'white',
                    borderRadius: 25,
                    borderWidth: 2,
                    color: 'white',
                    display: function (context) {
                        var dataset = context.dataset;
                        var count = dataset.data.length;
                        var value = dataset.data[context.dataIndex];
                        return value > count * 1.5;
                    },
                    font: {
                        weight: 'bold'
                    },
                    formatter: function (value, context) {
                        return value + "%";
                    }
                }
            }

        }
    });

    var chart = new Chart(openCloseBugs, {
        type: 'bar',
        data: {
            labels: ['11/04/18', '12/04/18', '13/04/18', '14/04/18', '15/04/18', '16/04/18', '17/04/18', '18/04/18'],
            datasets: [{
                label: "Open",
                backgroundColor: 'rgb(178,38,0)',
                data: [32, 72, 42],
                datalabels: {
                    align: 'center',
                    anchor: 'center',
                },
            }, {
                label: "Closed",
                backgroundColor: 'rgb(255,132,39)',
                data: [42, 32, 52],
                datalabels: {
                    align: 'center',
                    anchor: 'center'
                },
            }, {
                label: "Reopend",
                backgroundColor: 'rgb(0,176,240)',
                data: [72, 22, 62],
                datalabels: {
                    align: 'center',
                    anchor: 'center',
                },
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    color: 'white',
                    display: function (context) {
                        return context.dataset.data[context.dataIndex];
                    },
                    font: {
                        weight: 'bold'
                    }
                }
            },
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    var chart = new Chart(progressExecucao, {
        type: 'line',
        data: {
            labels: ['11/04/18', '12/04/18', '13/04/18', '14/04/18', '15/04/18', '16/04/18', '17/04/18', '18/04/18'],
            datasets: [{
                pointBackgroundColor: 'rgb(232,71,28)',
                backgroundColor: 'rgb(232,71,28)',
                borderColor: 'rgb(232,71,28)',
                borderColor: 'rgb(232,71,28)',
                data: ['15', '122', '123', '123', '123', '124', '132', '133'],
                datalabels: {
                    align: 'start',
                    anchor: 'start',
                    align: '50',
                    //rotation: -25,
                    offset: -5
                },
                lineTension: 0,
                fill: false,
                label: "TC Criados",
            }, {
                backgroundColor: 'rgb(0,112,192)',
                borderColor: 'rgb(0,112,192)',
                data: ['13', '25', '38', '38', '38', '51', '63', '137'],
                lineTension: 0,
                fill: false,
                label: "TC Planejados",
                borderDash: [5, 5]
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 5,
                    right: 30,
                    top: 0,
                    bottom: 0
                }
            },
            plugins: {
                datalabels: {
                    backgroundColor: function (context) {
                        return context.dataset.backgroundColor;
                    },
                    borderRadius: 4,
                    color: 'white',
                    font: {
                        weight: 'bold'
                    },
                    formatter: function (value, context) {
                        return value;
                    }

                },
            },
            scales: {
                yAxes: [{
                    stacked: true,
                }],
                xAxes: [{
                    stacked: true,
                    offset: 1
                }]
            }
        }
    });


    let dropdown = $('#projectId');
    dropdown.empty();
    dropdown.append('<option selected="true" disabled>Escolha o projeto</option>');
    dropdown.prop('selectedIndex', 0);

    let dropdownCycle = $('#cycleId');
    dropdownCycle.empty();
    dropdownCycle.append('<option selected="true" disabled>Escolha o ciclo</option>');
    dropdownCycle.prop('selectedIndex', 0);

    $("#projectId").click(function () {

        if (listaProjetos.length == 0) {
            $.loadingBlockShow({
                imgPath: 'img/default.svg',
                text: 'jQuery Script Loading ...',
                style: {
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, .8)',
                    left: 0,
                    top: 0,
                    zIndex: 10000
                }
            });

            $.ajax({
                type: 'GET',
                xhrFields: {
                    withCredentials: true
                },
                cache: false,
                dataType: 'json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Basic ' + btoa('jean.ferreira@ewave.com.br:14364545*%ed'));
                },
                url: "https://rumolog.atlassian.net/rest/api/2/project.json"
            }).done(function (data) {
                listaProjetos = data;
                $.each(data, function (key, entry) {
                    dropdown.append($('<option></option>').attr('value', entry.key).text(entry.name));
                })
                $.loadingBlockHide();
            });
        } else {
            $.loadingBlockHide();
        }
    });

    ///
});