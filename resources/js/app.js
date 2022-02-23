require("./bootstrap");
import Chart from "chart.js/auto";

let canvasMonths = document.getElementById("analyticsPerMonth");
let messagesMonth = JSON.parse(canvasMonths.dataset.messages);
let viewsMonth = JSON.parse(canvasMonths.dataset.views);

let canvasYears = document.getElementById("analyticsPerYear");
let messagesYear = JSON.parse(canvasYears.dataset.messages);
let viewsYear = JSON.parse(canvasYears.dataset.views);

window.onload = function () {
    var ctxMonths = canvasMonths.getContext("2d");
    window.chartMonths = new Chart(ctxMonths, {
        type: "line",
        data: {
            datasets: [
                {
                    type: "line",
                    label: "views",
                    data: Object.values(viewsMonth),
                },
                {
                    type: "bar",
                    label: "Messaggi",
                    data: Object.values(messagesMonth),
                },
            ],
            labels: Object.keys(messagesMonth),
        },
        options: {
            elements: {
                rectangle: {
                    borderWidth: 2,
                    borderColor: "rgb(80, 255, 0)",
                    borderSkipped: "bottom",
                },
            },
            responsive: true,
            title: {
                display: true,
                text: "Monthly Website Visitor",
            },
        },
    });
    var ctxYears = canvasYears.getContext("2d");
    window.chartYears = new Chart(ctxYears, {
        type: "line",
        data: {
            datasets: [
                {
                    type: "line",
                    label: "views",
                    data: Object.values(viewsYear),
                },
                {
                    type: "bar",
                    label: "Messaggi",
                    data: Object.values(messagesYear),
                },
            ],
            labels: Object.keys(messagesYear),
        },
        options: {
            elements: {
                rectangle: {
                    borderWidth: 2,
                    borderColor: "rgb(80, 255, 0)",
                    borderSkipped: "bottom",
                },
            },
            responsive: true,
            title: {
                display: true,
                text: "Monthly Website Visitor",
            },
        },
    });
};
