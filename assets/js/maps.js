// Global access mapdata
var mapData = {};

// Global legend data
var mapLegends = {};

// Function for formattings "globalCompareData" for Mapael.js
function formatMapData() {

    // Obtains the possible stastics for each country, and iterate through them 
    Object.keys(globalCompareDataset[0]).forEach(function (statistic) {

        // Initialise the parent object for the given statistic
        mapData[statistic] = {};
        // Initialise the "areas" field (required for Mapael) for each statistic
        mapData[statistic].areas = {};

        // For each statistic, iterate through each country in the globalCompareDataset
        globalCompareDataset.forEach(function (country) {

            // If the list of "world_countries.js" countries contains the current country 
            if (Object.values(worldCountriesISOList).includes(fullISO[country.country])) {

                // Add an entry into the current dictionairy (which would be mapData.statistic.areas) 
                mapData[statistic].areas[fullISO[country.country]] = {
                    // Below is the required format for Mapael (Value: X, Href: Y, Tooltip, Z)
                    value: country[statistic], href: "#", tooltip: {
                        content: `<strong>${country.country}</strong> <br/> ${statistic}: ${country[statistic]}`
                    }
                };
            }

        })

        // For each statistic, iterate through the whole list of countries contained within world_countries.js
        worldCountriesISOList.forEach(function (mapCountry) {

            //  Find any countries within this list, which hasn't been populated within mapData.statistic.areas
            if (!(Object.keys(mapData[statistic].areas).includes(mapCountry))) {

                // And provide a generic "No data available" and -1 value for identification on the map
                mapData[statistic].areas[mapCountry] = {
                    value: -1, href: "#", tooltip: {
                        content: `No data available for this country!`
                    }
                };
            }
        })
    })

    // Once all data preperation is complete, generate the map
    generateMap();

}

// Function for generating the Legends (tier for colours)
function generateLegends(statistic) {

    // Initiate maxValue;
    let maxValue = 0;

    // Iterate through each country, in order to ascertain the maximum value for this statistic
    Object.keys(mapData[statistic].areas).forEach(function (country) {

        // Determine if the value is higher than that currently stored (maxValue)
        if (mapData[statistic].areas[country].value > maxValue) {

            // if so, overrite the maxValue
            maxValue = mapData[statistic].areas[country].value;
        }
    })

    // Access global "mapLegends", and overwrite current legends (tiers)
    mapLegends = {
        area: {
            title: statistic,
            slices: [
                {
                    // Lower quarter
                    max: Math.round(maxValue / 4),
                    attrs: {
                        fill: "#97e766"
                    },
                    label: `Less than ${Math.round(maxValue / 4)}`
                },
                {
                    // Lower Half
                    min: Math.round(maxValue / 4),
                    max: Math.round(maxValue / 2),
                    attrs: {
                        fill: "#7fd34d"
                    },
                    label: `More than ${Math.round(maxValue / 4)}, but Less than ${Math.round(maxValue / 2)}`
                },
                {
                    // Lower 3/4s
                    min: Math.round(maxValue / 2),
                    max: Math.round((maxValue / 2) + (maxValue / 4)),
                    attrs: {
                        fill: "#5faa32"
                    },
                    label: `More than ${Math.round(maxValue / 2)}, but Less than ${Math.round((maxValue / 2) + (maxValue / 4))}`
                },
                {
                    // Max Value
                    min: Math.round((maxValue / 2) + (maxValue / 4)),
                    max: Math.round(maxValue),
                    attrs: {
                        fill: "#3f7d1a"
                    },
                    label: `More than ${Math.round(maxValue / 2) + (maxValue / 4)}, but Less than ${Math.round(maxValue)}`
                }

            ]
        }
    }
}

// Function for generating the map
function generateMap() {

    // Assign the current value within the Stat selector
    let statisticChoice = $("#statisticSelectMap").val();

    // Generate legends (tiers) for current statistic if  legends have yet to be generated
    if ($.isEmptyObject(mapLegends)) {
        generateLegends(statisticChoice);
    }

    // Call the mapael jquery function
    $(".mapContainer").mapael({
        // Use the world_countries map
        map: {
            name: "world_countries",
            // Basic set up for testing
            defaultArea: {
                attrs: {
                    stroke: "#fff",
                    "stroke-width": 0.5
                },
                attrsHover: {
                    "stroke-width": 1
                },
            },
            zoom: {
                enabled: true,
                touch: true
            },
        },
        // Basic legend for testing
        legend: mapLegends,

        // Assign the "areas" parameter the currently selected statistic
        areas: mapData[statisticChoice]["areas"]
    });
}

// Update the Mapael map to target specific statistic within nested object (mapdata)
$("#statisticSelectMap").change(function () {

    // If mapData is not empty
    if (!($.isEmptyObject(mapData))) {

        // Generate new legend data from given statistic
        generateLegends($("#statisticSelectMap").val());

        // Trigger mapael update
        $(".mapContainer").trigger('update', [{

            mapOptions: {
                // Set the mapOptions "areas" to the currently selected statistic
                'areas': mapData[$("#statisticSelectMap").val()]["areas"],
                // Set the mapOptions "legend" to the newly generated legend
                'legend': mapLegends
            },
            animDuration: 300
        }]);
    }
});
