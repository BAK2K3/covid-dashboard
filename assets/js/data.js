//Global Variable to store datasets
var globalCompareDataset;
var globalVisualDataset;

// Full dictionary of ISO2 country codes for Map data, testing, and querying API endpoints
const fullISO = {
    'Afghanistan': 'AF', 'Aland Islands': 'AX', 'Albania': 'AL', 'Algeria': 'DZ', 'American Samoa': 'AS', 'Andorra': 'AD', 'Angola': 'AO', 'Anguilla': 'AI', 'Antarctica': 'AQ', 'Antigua and Barbuda': 'AG', 'Argentina': 'AR', 'Armenia': 'AM',
    'Aruba': 'AW', 'Australia': 'AU', 'Austria': 'AT', 'Azerbaijan': 'AZ', 'Bahamas': 'BS', 'Bahrain': 'BH', 'Bangladesh': 'BD', 'Barbados': 'BB', 'Belarus': 'BY', 'Belgium': 'BE', 'Belize': 'BZ', 'Benin': 'BJ', 'Bermuda': 'BM', 'Bhutan': 'BT',
    'Bolivia': 'BO', 'Bosnia': 'BA', 'Botswana': 'BW', 'Bouvet Island': 'BV', 'Brazil': 'BR', 'British Indian Ocean Territory': 'IO', 'Brunei': 'BN', 'Bulgaria': 'BG', 'Burkina Faso': 'BF', 'Burundi': 'BI',
    'Cambodia': 'KH', 'Cameroon': 'CM', 'Canada': 'CA', 'Cabo Verde': 'CV', 'Cayman Islands': 'KY', 'Central African Republic': 'CF', 'Chad': 'TD', 'Chile': 'CL', 'China': 'CN', 'Christmas Island': 'CX', 'Cocos (Keeling) Islands': 'CC',
    'Colombia': 'CO', 'Comoros': 'KM', 'Congo': 'CG', 'DRC': 'CD', 'Cook Islands': 'CK', 'Costa Rica': 'CR', 'Côte d\'Ivoire': 'CI', 'Croatia': 'HR', 'Cuba': 'CU', 'Cyprus': 'CY', 'Czechia': 'CZ', 'Denmark': 'DK',
    'Djibouti': 'DJ', 'Dominica': 'DM', 'Dominican Republic': 'DO', 'Ecuador': 'EC', 'Egypt': 'EG', 'El Salvador': 'SV', 'Equatorial Guinea': 'GQ', 'Eritrea': 'ER', 'Estonia': 'EE', 'Ethiopia': 'ET', 'Falkland Islands (Malvinas)': 'FK', 'Faroe Islands': 'FO',
    'Fiji': 'FJ', 'Finland': 'FI', 'France': 'FR', 'French Guiana': 'GF', 'French Polynesia': 'PF', 'French Southern Territories': 'TF', 'Gabon': 'GA', 'Gambia': 'GM', 'Georgia': 'GE', 'Germany': 'DE', 'Ghana': 'GH', 'Gibraltar': 'GI',
    'Greece': 'GR', 'Greenland': 'GL', 'Grenada': 'GD', 'Guadeloupe': 'GP', 'Guam': 'GU', 'Guatemala': 'GT', 'Guernsey': 'GG', 'Guinea': 'GN', 'Guinea-Bissau': 'GW', 'Guyana': 'GY', 'Haiti': 'HT', 'Heard Island & Mcdonald Islands': 'HM',
    'Holy See (Vatican City State)': 'VA', 'Honduras': 'HN', 'Hong Kong': 'HK', 'Hungary': 'HU', 'Iceland': 'IS', 'India': 'IN', 'Indonesia': 'ID', 'Iran': 'IR', 'Iraq': 'IQ', 'Ireland': 'IE', 'Isle Of Man': 'IM', 'Israel': 'IL',
    'Italy': 'IT', 'Jamaica': 'JM', 'Japan': 'JP', 'Jersey': 'JE', 'Jordan': 'JO', 'Kazakhstan': 'KZ', 'Kenya': 'KE', 'Kiribati': 'KI', 'Korea': 'KR', 'Kuwait': 'KW', 'Kyrgyzstan': 'KG', 'Lao People\'s Democratic Republic': 'LA', 'Latvia': 'LV',
    'Lebanon': 'LB', 'Lesotho': 'LS', 'Liberia': 'LR', 'Libyan Arab Jamahiriya': 'LY', 'Liechtenstein': 'LI', 'Lithuania': 'LT', 'Luxembourg': 'LU', 'Macao': 'MO', 'Macedonia': 'MK', 'Madagascar': 'MG', 'Malawi': 'MW', 'Malaysia': 'MY',
    'Maldives': 'MV', 'Mali': 'ML', 'Malta': 'MT', 'Marshall Islands': 'MH', 'Martinique': 'MQ', 'Mauritania': 'MR', 'Mauritius': 'MU', 'Mayotte': 'YT', 'Mexico': 'MX', 'Micronesia, Federated States Of': 'FM', 'Moldova': 'MD', 'Monaco': 'MC',
    'Mongolia': 'MN', 'Montenegro': 'ME', 'Montserrat': 'MS', 'Morocco': 'MA', 'Mozambique': 'MZ', 'Myanmar': 'MM', 'Namibia': 'NA', 'Nauru': 'NR', 'Nepal': 'NP', 'Netherlands': 'NL', 'Caribbean Netherlands': 'AN', 'New Caledonia': 'NC',
    'New Zealand': 'NZ', 'Nicaragua': 'NI', 'Niger': 'NE', 'Nigeria': 'NG', 'Niue': 'NU', 'Norfolk Island': 'NF', 'Northern Mariana Islands': 'MP', 'Norway': 'NO', 'Oman': 'OM', 'Pakistan': 'PK', 'Palau': 'PW',
    'Palestinian Territory, Occupied': 'PS', 'Panama': 'PA', 'Papua New Guinea': 'PG', 'Paraguay': 'PY', 'Peru': 'PE', 'Philippines': 'PH', 'Pitcairn': 'PN', 'Poland': 'PL', 'Portugal': 'PT', 'Puerto Rico': 'PR', 'Qatar': 'QA', 'Reunion': 'RE',
    'Romania': 'RO', 'Russia': 'RU', 'Rwanda': 'RW', 'Saint Barthelemy': 'BL', 'Saint Helena': 'SH', 'Saint Kitts And Nevis': 'KN', 'Saint Lucia': 'LC', 'Saint Martin': 'MF', 'Saint Pierre And Miquelon': 'PM',
    'Saint Vincent And Grenadines': 'VC', 'Samoa': 'WS', 'San Marino': 'SM', 'Sao Tome And Principe': 'ST', 'Saudi Arabia': 'SA', 'Senegal': 'SN', 'Serbia': 'RS', 'Seychelles': 'SC', 'Sierra Leone': 'SL', 'Singapore': 'SG', 'Slovakia': 'SK',
    'Slovenia': 'SI', 'Solomon Islands': 'SB', 'Somalia': 'SO', 'South Africa': 'ZA', 'South Georgia And Sandwich Isl.': 'GS', 'South Sudan': "SS", 'Spain': 'ES', 'Sri Lanka': 'LK', 'Sudan': 'SD', 'Suriname': 'SR', 'Svalbard And Jan Mayen': 'SJ', 'Swaziland': 'SZ',
    'Sweden': 'SE', 'Switzerland': 'CH', 'Syrian Arab Republic': 'SY', 'Taiwan': 'TW', 'Tajikistan': 'TJ', 'Tanzania': 'TZ', 'Thailand': 'TH', 'Timor-Leste': 'TL', 'Togo': 'TG', 'Tokelau': 'TK', 'Tonga': 'TO', 'Trinidad and Tobago': 'TT',
    'Tunisia': 'TN', 'Turkey': 'TR', 'Turkmenistan': 'TM', 'Turks And Caicos Islands': 'TC', 'Tuvalu': 'TV', 'Uganda': 'UG', 'Ukraine': 'UA', 'UAE': 'AE', 'UK': 'GB', 'USA': 'US',
    'United States Outlying Islands': 'UM', 'Uruguay': 'UY', 'Uzbekistan': 'UZ', 'Vanuatu': 'VU', 'Venezuela': 'VE', 'Vietnam': 'VN', 'British Virgin Islands': 'VG', 'Virgin Islands, U.S.': 'VI', 'Wallis And Futuna': 'WF', 'Western Sahara': 'EH',
    'Yemen': 'YE', 'Zambia': 'ZM', 'Zimbabwe': 'ZW'
};

// Condensed Country List: All available country endpoints (names only) for the Historical dataset REST endpoint, and to be used for HTML listing
// See README.MD for detailed discuss on how this was obtained, and why it has been hard coded.
const condensedCountryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cabo Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "DRC", "Costa Rica",
    "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "S. Korea", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Uganda", "Ukraine", "UAE", "UK",
    "USA", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

// Full list of countries on World_Countries.js, displayed in ISO2 format. 
const worldCountriesISOList = ["PE", "BF", "FR", "LY", "BY", "PK", "ID", "YE", "MG", "BO", "CI", "DZ", "CH", "CM", "MK", "BW", "UA", "KE", "TW", "JO", "MX", "AE", "BZ", "BR", "SL", "ML", "CD", "IT", "SO", "AF", "BD", "DO", "GW", "GH",
    "AT", "SE", "TR", "UG", "MZ", "JP", "NZ", "CU", "VE", "PT", "CO", "MR", "AO", "DE", "SD", "TH", "AU", "PG", "IQ", "HR", "GL", "NE", "DK", "LV", "RO", "ZM", "IR", "MM", "ET", "GT", "SR", "EH", "CZ", "TD", "AL", "FI", "SY", "KG", "SB", "OM",
    "PA", "AR", "GB", "CR", "PY", "GN", "IE", "NG", "TN", "PL", "NA", "ZA", "EG", "TZ", "GE", "SA", "VN", "RU", "HT", "BA", "IN", "CN", "CA", "SV", "GY", "BE", "GQ", "LS", "BG", "BI", "DJ", "AZ", "MY", "PH", "UY", "CG", "RS", "ME", "EE", "RW",
    "AM", "SN", "TG", "ES", "GA", "HU", "MW", "TJ", "KH", "KR", "HN", "IS", "NI", "CL", "MA", "LR", "NL", "CF", "SK", "LT", "ZW", "LK", "IL", "LA", "KP", "GR", "TM", "EC", "BJ", "SI", "NO", "MD", "LB", "NP", "ER", "US", "KZ", "SZ", "UZ", "MN",
    "BT", "NC", "FJ", "KW", "TL", "BS", "VU", "FK", "GM", "QA", "JM", "CY", "PR", "PS", "BN", "TT", "PF", "WS", "LU", "KM", "FO", "SS", "BH"];

// Dictionary for mapping key statistics from Compare dataset
// Null = To be skipped
// String = Representative text for statistic
const statisticDictionary = {
    updated: "Time of Update",
    country: "Name of Country",
    countryInfo: null,
    cases: "Total Amount of Cases",
    todayCases: "Amount of Cases Diagnosed Today",
    deaths: "Total Cases of Deaths",
    todayDeaths: "Amount of Deaths Today",
    recovered: "Total Cases Recovered",
    todayRecovered: "Amount Recovered Today",
    active: "Currently Active Cases",
    critical: "Currently Critical Cases",
    casesPerOneMillion: "Cases Per One Million",
    deathsPerOneMillion: "Deaths Per One Million",
    tests: "Total Amount of Tests",
    testsPerOneMillion: "Tests per One Million",
    population: "Population of Country",
    continent: null,
    oneCasePerPeople: null,
    oneDeathPerPeople: null,
    oneTestPerPeople: null,
    activePerOneMillion: null,
    recoveredPerOneMillion: null,
    criticalPerOneMillion: null
};


// Function for obtaining key from specified value
// https://stackoverflow.com/a/28191966/13810970
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// Function for API request for both datasets
function fetchApiData() {
    $.when(
        // Query all required datasets
        $.getJSON("https://disease.sh/v3/covid-19/countries"),
        $.getJSON(`https://disease.sh/v3/covid-19/historical/${condensedCountryList}`)
    ).then(

        function (compareDataset, visualDataset) {
            // Assign the response to the relevant global variable
            globalCompareDataset = compareDataset[0];
            globalVisualDataset = visualDataset[0];

            generateHTML();

        });
}

// Map the global data to appropriate HTML strings for selectors
function generateHTML() {

    // List full set of countries for compare
    let listItemsCompare = ' <option value = "none" > Select a Country </option> ';
    listItemsCompare += globalCompareDataset.map(function (item) {
        return ` <option value = "${item.country}" > ${item.country} </option> `;
    });

    // List Condensed Countries (for historical availablity) for Visualise
    let listItemsVisual = ' <option value = "none" > Select a Country </option> ';
    condensedCountryList.forEach(function (item) {
        listItemsVisual += ` <option value = "${item}" > ${item} </option> `;
    });

    // List Stats for Map Section
    let listItemsMap = `<option value = "none" > Select a Statistic </option>`;
    Object.keys(globalCompareDataset[0]).forEach(function (item) {
        // Checks that statistic is not null in statisticDictionary, also prevents Update Time/Country Name from being added
        if (statisticDictionary[item] !== null && statisticDictionary[item] !== "Time of Update" && statisticDictionary[item] !== "Name of Country") {
            listItemsMap += ` <option value = "${statisticDictionary[item]}" > ${statisticDictionary[item]} </option> `;
        }
    });

    // Insert the generated lists into the relevant Country Select Drop downs
    $("#firstCountrySelect").html(listItemsCompare);
    $("#secondCountrySelect").html(listItemsCompare);
    $('#countrySelectVisualise').html(listItemsVisual);
    $('#statisticSelectMap').html(listItemsMap);

    // Once everything has finished loading, remove the loading icon and add the info page 
    toggleCovidSections('#covidInfo');
}

// On document load, fetch datasets then generate required HTML elements
$(document).ready(
    fetchApiData()
);

