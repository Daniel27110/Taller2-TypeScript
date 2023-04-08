import { Serie } from "./serie.js";

import { series } from "./data.js";


let seriesTbody: HTMLTableSectionElement = document.getElementById("series") as HTMLTableSectionElement;
let averageSeasonsSpan: HTMLSpanElement = document.getElementById("averageSeasons") as HTMLSpanElement;

renderSeriesInTable(series);
averageSeasons(series);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(serie => {
        let tr: HTMLTableRowElement = document.createElement("tr");
        tr.classList.add("table-secondary");
        tr.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td><a href="${serie.url}">${serie.title}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTbody.appendChild(tr);
    });
}

// creates a function that calculates the average of the seasons of the series
function averageSeasons(series: Serie[]): void {
    let totalSeasons: number = 0;
    series.forEach(serie => {
        totalSeasons += serie.seasons;
    });
    averageSeasonsSpan.innerText = "Seasons average: " + (totalSeasons / series.length).toFixed(0);

}