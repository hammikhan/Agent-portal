function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) {
        var t = document.getElementById(e).getAttribute("data-colors");
        return (t = JSON.parse(t)).map(function(e) {
            var t = e.replace(" ", "");
            if (-1 == t.indexOf("--")) return t;
            var r = getComputedStyle(document.documentElement).getPropertyValue(t);
            return r || void 0
        })
    }
}
var barchartColors = getChartColorsArray("chart-column"),
    options = {
        series: [{
            name: "Net Profit",
            data: [18, 21, 17, 24, 21, 27, 25, 32, 26]
        }, {
            name: "Revenue",
            data: [21, 24, 20, 27, 25, 29, 26, 34, 30]
        }],
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "35%",
                borderRadius: 6,
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        colors: ["#fff", "#fff"],
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
        },
        yaxis: {
            labels: {
                formatter: function(e) {
                    return e + "k"
                }
            },
            tickAmount: 4
        },
        legend: {
            show: !1
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !0,
                gradientToColors: [barchartColors[0], barchartColors[1]],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 38, 100, 38]
            }
        }
    },
    chart = new ApexCharts(document.querySelector("#chart-column"), options);
chart.render();
options = {
    series: [76],
    chart: {
        type: "radialBar",
        height: 162,
        sparkline: {
            enabled: !0
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#f3f2f9",
                strokeWidth: "97%",
                margin: 5,
                dropShadow: {
                    enabled: !1,
                    top: 2,
                    left: 0,
                    color: "#999",
                    opacity: 1,
                    blur: 2
                }
            },
            hollow: {
                margin: 15,
                size: "65%"
            },
            dataLabels: {
                name: {
                    show: !1
                },
                value: {
                    offsetY: -2,
                    fontSize: "22px"
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    grid: {
        padding: {
            top: -10
        }
    },
    colors: barchartColors = getChartColorsArray("chart-radialBar"),
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            shadeIntensity: .4,
            inverseColors: !1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        }
    },
    labels: ["Average Results"]
};
(chart = new ApexCharts(document.querySelector("#chart-radialBar"), options)).render();
options = {
    chart: {
        height: 270,
        type: "area",
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: 2
    },
    series: [{
        name: "Current",
        data: [21, 54, 45, 84, 48, 56]
    }, {
        name: "Previous",
        data: [40, 32, 60, 32, 55, 45]
    }],
    colors: barchartColors = getChartColorsArray("chart-area"),
    legend: {
        show: !0,
        position: "top",
        horizontalAlign: "right"
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .45,
            opacityTo: .05,
            stops: [20, 100, 100, 100]
        }
    },
    yaxis: {
        tickAmount: 4
    },
    xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }
};
(chart = new ApexCharts(document.querySelector("#chart-area"), options)).render();
options = {
    chart: {
        height: 220,
        type: "donut"
    },
    plotOptions: {
        pie: {
            donut: {
                size: "50%"
            }
        }
    },
    dataLabels: {
        enabled: !1
    },
    series: series,
    labels: labels,
    colors: barchartColors = getChartColorsArray("chart-donut"),
    fill: {
        type: "gradient"
    },
    legend: {
        show: !1,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0
    }
};
(chart = new ApexCharts(document.querySelector("#chart-donut"), options)).render();