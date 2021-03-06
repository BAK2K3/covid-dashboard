// Global access mapdata
var mapData = {};

// Global legend data
var mapLegends = {};

// Function for formattings "globalCompareData" for Mapael.js
function formatMapData() {

    // Obtains the possible stastics for each country, and iterate through them 
    Object.keys(globalCompareDataset[0]).forEach(function (statistic) {

        // Checks that statistic is not null in statisticDictionary, also prevents Update Time/Country Name from being added to mapData
        if (statisticDictionary[statistic] !== null && statisticDictionary[statistic] !== "Time of Update" && statisticDictionary[statistic] !== "Name of Country") {

            // Initialise the parent object for the given statistic
            mapData[statistic] = {};

            // Initialise the "areas" field (required for Mapael) for each statistic
            mapData[statistic].areas = {};

            // For each statistic, iterate through each country in the globalCompareDataset
            globalCompareDataset.forEach(function (country) {

                // If the list of "world_countries.js" countries contains the current country 
                if (Object.values(worldCountriesISOList).includes(fullISO[country.country])) {

                    // If the entry is Null, state there is no data for this particular statistic
                    if (country[statistic] == null) {

                        // Add an entry into the current dictionairy (which would be mapData.statistic.areas) 
                        mapData[statistic].areas[fullISO[country.country]] = {
                            // Below is the required format for Mapael (Value: X, Href: Y, Tooltip, Z)
                            value: -1, href: "", tooltip: {
                                content: `<strong>${country.country}</strong>: No data available for this statistic!`
                            }
                        };

                    } else {

                        // Add an entry into the current dictionairy (which would be mapData.statistic.areas) 
                        mapData[statistic].areas[fullISO[country.country]] = {
                            // Below is the required format for Mapael (Value: X, Href: Y, Tooltip, Z)
                            value: country[statistic], tooltip: {
                                content: `<strong>${country.country}</strong>: ${Number(country[statistic]).toLocaleString()}`
                            }
                        };
                    }
                }
            });

            // For each statistic, iterate through the whole list of countries contained within world_countries.js
            worldCountriesISOList.forEach(function (mapCountry) {

                //  Find any countries within this list, which hasn't been populated within mapData.statistic.areas
                if (!(Object.keys(mapData[statistic].areas).includes(mapCountry))) {

                    // And provide a generic "No data available" and -1 value for identification on the map
                    mapData[statistic].areas[mapCountry] = {
                        value: -1, href: "", tooltip: {
                            content: `<strong>${getKeyByValue(fullISO, mapCountry)}</strong>: No data available for this country!`
                        }
                    };
                }
            });
        }
    });
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
    });

    // Access global "mapLegends", and calculate variable thresholds dependent on data
    mapLegends = {
        area: {
            title: statisticDictionary[statistic],
            slices: [
                {
                    // No Data
                    sliceValue: -1,
                    label: `No data available`,
                    clicked: true,
                    attrs: {
                        fill: "#EFF1F3"
                    }
                },
                {
                    // Lower Eight
                    max: Math.round(maxValue / 8),
                    attrs: {
                        fill: "#97e766"
                    },
                    label: `Less than ${Number(Math.round(maxValue / 8)).toLocaleString()}`
                },
                {
                    // Lower Sixth
                    min: Math.round(maxValue / 8),
                    max: Math.round(maxValue / 6),
                    attrs: {
                        fill: "#7fd34d"
                    },
                    label: `Between ${Number(Math.round(maxValue / 8)).toLocaleString()} and ${Number(Math.round(maxValue / 6)).toLocaleString()}`
                },
                {
                    // Lower Quarter
                    min: Math.round(maxValue / 6),
                    max: Math.round(maxValue / 4),
                    attrs: {
                        fill: "#5faa32"
                    },
                    label: `Between ${Number(Math.round(maxValue / 6)).toLocaleString()} and ${Number(Math.round(maxValue / 4)).toLocaleString()}`
                },
                {
                    // Max Value
                    min: Math.round(maxValue / 4),
                    attrs: {
                        fill: "#3f7d1a"
                    },
                    label: `More than ${Number(Math.round(maxValue / 4)).toLocaleString()}`
                }
            ]
        }
    };
}

// Function for generating the map
function generateMap(statisticChoice) {

    // Call the mapael jquery function
    $(".mapContainer").mapael({

        // Use the world_countries map
        map: {
            name: "world_countries",
            // custom styling
            defaultArea: {
                // Outline/Fille
                attrs: {
                    stroke: "#252627",
                    "stroke-width": 0.2
                },
                attrsHover: {
                    "stroke-width": 0.4,
                    "fill": "#D78170"
                },
                eventHandlers: {
                    click: function () {
                    },
                    dblclick: function () { }
                }
            },
            // Zoom settings
            zoom: {
                enabled: true,
                touch: true,
                maxLevel: 100,
                step: 0.5
            },
        },

        // Assign the "areas" parameter the currently selected statistic
        areas: mapData[statisticChoice].areas,
        // Set generated legends
        legend: mapLegends
    });
}

// On Selector change, destroy - update - or create map.
$("#statisticSelectMap").change(function () {

    // If the value selected is the default option, destroy the map and reset the section
    if ($(this).val() == "none") {
        $("#covidMap .mapContainer").addClass("d-none");
        $("#covidMap .text-container").removeClass("d-none");
        $(".map").html("");
        $(".areaLegend").html("");

    } else {

        // Obtain the statistic chosen
        let statisticChoice = getKeyByValue(statisticDictionary, $("#statisticSelectMap").val());

        // Check to see whether mapData exists 
        if ($.isEmptyObject(mapData)) {
            // If not, create it
            formatMapData();
        }

        // Generate new legends for the statistic chosen
        generateLegends(statisticChoice);

        // Check to see whether the correct containers are in view
        if ($("#covidMap .mapContainer").hasClass("d-none")) {
            $("#covidMap .mapContainer").removeClass("d-none");
            $("#covidMap .text-container").addClass("d-none");
        }

        // If the map exists, update it (could also check the .map container)
        if ($(".areaLegend").html() !== "") {
            // Trigger mapael update
            $(".mapContainer").trigger('update', [{
                mapOptions: {
                    // Set the mapOptions "legend" to the newly generated legend
                    'legend': mapLegends,
                    // Set the mapOptions "areas" to the currently selected statistic
                    'areas': mapData[statisticChoice].areas
                },
                animDuration: 300
            }]);

            // https://github.com/neveldo/jQuery-Mapael/blob/7f38564085eed2445ccecf30bbf7d267984de0cf/js/jquery.mapael.js#L953
            $("[data-type='legend-elem']").first().trigger("click", [false, 300]);

        } else {
            // Otherwise Create it
            generateMap(statisticChoice);
        }
    }
});