import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
var averageSeasonsSpan = document.getElementById("averageSeasons");
renderSeriesInTable(series);
averageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.classList.add("table-secondary");
        tr.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td><a href=\"").concat(serie.url, "\">").concat(serie.title, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        seriesTbody.appendChild(tr);
    });
}
// creates a function that calculates the average of the seasons of the series
function averageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) {
        totalSeasons += serie.seasons;
    });
    averageSeasonsSpan.innerText = "Seasons average: " + (totalSeasons / series.length).toFixed(0);
}
