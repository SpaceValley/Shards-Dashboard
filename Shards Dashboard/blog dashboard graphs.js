var ctx = document.getElementById("myChart");
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [1,7,14,21,28],
        datasets: [
            {
                label: "Current Month",
                backgroundColor: 'rgba(229, 242, 252, 0.5)',
                borderColor: "#007bff",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                zIndex: "1",
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: "Previous Month",
                fill:true,
                backgroundColor: 'rgba(255, 236, 240, 0.5)',
                borderColor: "#ff6383",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [25, 59, 30, 61, 36, 55, 60]
            }
        ]
    },
})
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Desktop", "Tablet", "Mobile"],

        datasets: [{
            backgroundColor: ["#1988ff","#7fbdff","#b2d7ff"],
            data: [68.3,24.2,7.5],
        }]
    },

});

new Chart(document.getElementById("line-chart-1"), {
    type: 'line',
    data: {
        datasets: [
            {
                backgroundColor: "#f0f9fb",
                borderColor: "#7fd9e9",
                borderWidth: "1px",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [28, 48, 40, 19, 86, 27, 98]
            },
        ]
    },
    options: {
        legend: {
            display: false
        },
        elements: { point: { radius: 0 } },
        axes : {display:false},
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        }
    }
})

new Chart(document.getElementById("line-chart-2"), {
    type: 'line',
    data: {
        datasets: [
            {
                backgroundColor: "#f2fbf7",
                borderColor: "#8ae2b8",
                borderWidth: "1px",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [18, 8, 60, 29, 86, 27, 1]
            },
        ]
    },
    options: {
        legend: {
            display: false
        },
        elements: { point: { radius: 0 } },
        axes : {display:false},
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        }
    }
})

new Chart(document.getElementById("line-chart-3"), {
    type: 'line',
    data: {
        datasets: [
            {
                backgroundColor: "#fefaf1",
                borderColor: "#fedb88",
                borderWidth: "1px",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [8, 48, 40, 89, 36, 27, 10]
            },
        ]
    },
    options: {
        legend: {
            display: false
        },
        elements: { point: { radius: 0 } },
        axes : {display:false},
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        }
    }
})

new Chart(document.getElementById("line-chart-4"), {
    type: 'line',
    data: {
        datasets: [
            {
                backgroundColor: "#fef5f7",
                borderColor: "#ffa1b5",
                borderWidth: "1px",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [8, 20, 10, 40, 16, 60, 10]
            },
        ]
    },
    options: {
        legend: {
            display: false
        },
        elements: { point: { radius: 0 } },
        axes : {display:false},
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        }
    }
})

new Chart(document.getElementById("line-chart-5"), {
    type: 'line',
    data: {
        datasets: [
            {
                backgroundColor: "#eff6fc",
                borderColor: "#7fbbfc",
                borderWidth: "1px",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [28, 3, 40, 3, 86, 127, 90]
            },
        ]
    },
    options: {
        legend: {
            display: false
        },
        elements: { point: { radius: 0 } },
        axes : {display:false},
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        }
    }
})


