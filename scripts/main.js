import { series } from "./data.js";
var seriesTbody = document.getElementById("seriesTable");
var averageSeasonsSpan = document.getElementById("averageSeasons");
var seriesCard = document.getElementById("seriesCard");
renderSeriesInTable(series);
averageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.classList.add("table-secondary");
        tr.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td><a href=\"").concat(serie.url, "\">").concat(serie.title, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        // makes the row clickable, when clicked it will call the function showSerieCard
        tr.addEventListener("click", function () {
            showSerieCard(serie);
        });
        seriesTbody.appendChild(tr);
    });
}
// Function that calculates the average of the seasons of the series
function averageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) {
        totalSeasons += serie.seasons;
    });
    averageSeasonsSpan.innerText = "Seasons average: " + (totalSeasons / series.length).toFixed(0);
}
// Function that shows a bootstrap card with the image, title, a description of the serie and a link to the series
function showSerieCard(serie) {
    seriesCard.innerHTML = "\n        <div class=\"card\">\n            <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.title, "</h5>\n                <p class=\"card-text\">").concat(serie.description, "</p>\n                <a href=\"").concat(serie.url, "\" class=\"btn btn-primary\">Go to serie</a>\n            </div>\n        </div>\n    ");
}
