import { Serie } from "./serie.js";

import { series } from "./data.js";


let seriesTbody: HTMLTableSectionElement = document.getElementById("seriesTable") as HTMLTableSectionElement;
let averageSeasonsSpan: HTMLSpanElement = document.getElementById("averageSeasons") as HTMLSpanElement;
let seriesCard: HTMLDivElement = document.getElementById("seriesCard") as HTMLDivElement;

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
        // makes the row clickable, when clicked it will call the function showSerieCard
        tr.addEventListener("click", () => {
            showSerieCard(serie);
        });
        seriesTbody.appendChild(tr);
    });
}

// Function that calculates the average of the seasons of the series
function averageSeasons(series: Serie[]): void {
    let totalSeasons: number = 0;
    series.forEach(serie => {
        totalSeasons += serie.seasons;
    });
    averageSeasonsSpan.innerText = "Seasons average: " + (totalSeasons / series.length).toFixed(0);

}

// Function that shows a bootstrap card with the image, title, a description of the serie and a link to the series
function showSerieCard(serie: Serie): void {
    seriesCard.innerHTML = `
        <div class="card">
            <img src="${serie.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${serie.title}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.url}" class="btn btn-primary">Go to serie</a>
            </div>
        </div>
    `;
}