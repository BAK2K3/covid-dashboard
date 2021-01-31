# COVID Dashboard - Testing Documentation

The Main README documentation can be found under [README.md](README.md)

[View website on GitHub Pages](https://bak2k3.github.io/covid-dashboard/index.html)

# Table of contents

>1. [User Story Testing](#user-story-testing)
>2. [Feature Testing](#feature-testing)
>3. [Browser Testing](#browser-testing)
>4. [Code Validation](#code-validation)
>5. [Significant Bugs](#significant-bugs)
>6. [Other Technical Difficulties](#other-technical-difficulties)

# User Story Testing

## As a visitor to the website, I want to know what the website does, so that I can decide whether I'm interested in engaging with it.

**Acceptance Criteria:** A user must be able to identify the website's name and understand its purpose on first visit.

**Summary:**

- When the user visits the website, they are presented with a Logo containing a self-descriptive name.
- The logo is isolated in a container, is centrally placed, and is always present at the top of the page.
- The website's name allows a user to discern the website's general purpose: "COVID Dashboard".
- Once the data has loaded, the user is provided with a website overview. This overview explains the websites purpose, lists the Features provided by the website (which align with the Navigational Toggler), 
and provides a succinct explanation of each Feature.

**Outcome: Pass**

## As an interested user, I want the interface to be simple and intuitive, so that I can easily navigate and interact with the website.

**Acceptance Criteria:** A user should be able to understand how to both navigate and interact with the website and its Features, either through design, implementation or through instructions.

**Summary:**

- When the website is initially loaded, the user is provided with a website overview. This overview explains the website's purpose, lists the Features provided by the website 
(which align with the Navigational Toggler), and provides a succinct explanation of each Feature.
- The Navigation Togglers are initially in an inactive state when the user is on the overview page; as such, due to their stark contrast to the surrounding content, they stand out to the user.
- When hovering over each Toggler, a fill effect is produced, and the pointer changes to a *select* pointer; both of which have interactive connotations.
- Engaging with a Toggler will retain the fill effect, and underline the respective text. Any previously engaged (and therefore *filled*) Toggler will revert to its inactive state. 
This allows a user to understand their location at any given time.
- Only the relevant Feature and content is presented to the user at any given stage, so as to not overwhelm the user with information and/or Features. This produces a clean, clear, and succinct feel to each Feature
- Each Feature contains How-To Content, containing text which explains how the relevant Feature works and how to engage with it.
- Each Feature's Selector has a self-descriptive default entry, so as to assist the user's understanding of what the Selector contains, what it is used for, and how to use it.
- As soon as a user engages with a particular Feature (i.e. selected a country/statistic from any Selector), the respective Visualisation Content will appear, replacing the How-To Content. 
This produces a responsive feel to the website, acting on users inputs immediately.

**Outcome: Pass**

## As an engaged user, I want to be given a choice of data visualisations, so that I can choose how the statistics are presented to me.

**Acceptance Criteria:** A user should be able to choose from more than one method of visualising statistics.

**Summary:**

- The user can select from 3 different methods of visualisation.
- **Compare:** This Feature allows a user to view a single country's statistical overview, or compare two countries' statistics side by side, in a **Table.**
- **Visualise:** This Feature allows a user to view historical accumulated statistics for the past 30 days, for up to 3 statistics, on a **Time Series Graph**.
- **Map:** This Feature allows a user to compare a single statistic on a global scale, via a **Choropleth Map.**

**Outcome: Pass**

## As an engaged user, I want to be able to interact with the visualisations, so that I get to control the data that I'm engaging with.

**Acceptance Criteria:** A user should be able to have some degree of control of each method of visualisation implemented.

**Summary:**

- Each method of visualisation has varying degrees of interactivity.
- **Compare:** The user can choose to view one country's statistics in isolation, or compare two countries side by side. As soon as a user selects a second country, 
comparative indicators appear next to each numerical statistic where both countries contain data for the same statistic. These are dynamically generated, and represent whether the country's statistic is higher, 
lower, or equal to that being compared against. The user has a choice of 221 countries to view and compare.
- **Visualise:** The user can choose out of 185 countries to view its accumulative figures for **Total Cases** , **Total Recovered** , and **Total Deaths** , on a 30-day rolling basis, displayed on a Time Series Graph. 
All three statistics are presented initially, and the user can remove or add a statistic from the graph by interacting with the Legend. The Graph adapts dynamically to the data being presented at any given stage. 
The user can interact with each point on the graph, which displays the date, value, and statistic of the data point.
- **Map:** The user can choose out of 13 statistics (those presented on the Compare Feature), to be transposed onto a Choropleth Map, in order to compare a single statistic on a global scale. 
The shading of each country is determined by the Legend, which is dynamically calculated to produce the most aesthetically pleasing results. Each country can be interacted with the obtain the name of the country, 
and its numerical statistical value. The user can also interact with the Legend, to remove countries from the map based on their placement within the Legend thresholds. The user can zoom in and traverse the map with 
either **mouse** or **touch** input.

**Outcome: Pass**

## As a mobile user, I want to be able to utilise all aspects of the site, so that I can interact with the website on the go.

**Acceptance Criteria:** A user should be able to benefit from all features on the website, regardless of viewport.

**Summary:**

- As the website utilises Bootstrap for its foundation, most of the structure natively adapts to a user's viewport, allowing native compatibility on any screen size.
- The **Compare** Feature has a `Table-Responsive` class, and targeted media queries for smaller devices, to allow a comfortable fit on any screen size, with legible text and easily interactable interfaces.
- The **Visualise** Feature also utilises a `Table-Responsive` class, to allow for dynamic shaping of the graph, and has a pre-determined minimum height on smaller viewports to ensure the graph is still legible and interactable.
- The **Map** Feature also takes advantage of a minimum height on smaller viewports to ensure the map can be seen completely zoomed out, and zoomed in an appropriate amount, to be able benefit from all functionality of the map.
- All features described within **User Story 4** testing are compatible on all screen sizes.

**Outcome: Pass**


# Feature Testing

Other than the testing performed on the **HTML Generation**, all testing was completed manually, as described accordingly.

## Fetching API Data

- On page load, open Chrome Dev Tools and locate the `Global Compare Dataset` by typing `globalCompareDataset` into the console.
  - Ensure the object contains 221 entries.
  - Ensure each object contains a country name, and the required 13 statistics (those not defined as `null`within the `statisticDictionary`).
- On page load, open Chrome Dev Tools and locate the `Global Visual Dataset` by typing `globalVisualDataset`.
  - Ensure the object contains 185 entries.
  - Ensure each object contains a country name, and a Timeline key containing 3 datasets (`cases`, `recovered`, and `deaths`).
- Open Chrome Dev Tools, and throttle network to prolong the page's first load time.
  - Ensure the Splash Screen is presented to the user while the API data is loading.
  - Ensure the user is unable to interact with the Logo during this time.
  - Ensure the user can still interact with the footer elements during this time.
  - Ensure the Splash Screen is replaced with the Information Section when loading is complete.
- Intentionally break the API request, in order to force the Error Message being presented to the user, to ensure it functions as intended.
  - Ensure that the Navbar Toggler is not presented to the user when the Error Message is present.
  - Ensure the Logo is not interactable when the Error Message is present.

## The Navigation Effect

- Ensure the Toggler is not visible while the page is loading.
- Ensure the Logo cannot be interacted with while the page is loading.
- Once the website has loaded, ensure the Splash Screen is replaced with the Information Container and the Toggler appears.
- Once the website has fully loaded, navigate through all aspects of the page in every possible order to ensure they are functional and route correctly:
  - Logo -> Compare // Logo -> Visualise // Logo -> Map
  - Compare -> Logo // Compare -> Visualise // Compare -> Map
  - Visualise -> Logo // Visualise -> Compare // Visualise -> Map
  - Map -> Logo // Map -> Compare // Map -> Visualise
- Ensure that each aspect of the site (Logo/Compare/Visualise/Map) only displays its relevant content:
  - Interacting with the **Logo** displays the Information Section.
  - Interacting with the **Compare** tab of the Toggler only displays the How-To Content for this visualisation.
    - Interacting with either Selector on this Feature replaces the How-To Content with the Table Visualisation.
    - Reverting back to the default value (*Select a Country*) for both Selectors, or interacting with the **Compare** tab of the Toggler while on the visualisation, removes the Table Visualisation and displays the correct How-To Content.
  - Interacting with the **Visualise** tab of the Toggler only displays the How-To Content for this visualisation.
    - Interacting with this Feature's Selector replaces the How-To Content with the Graph Visualisation.
    - Reverting back to the default value (*Select a Country*), or interacting with the Visualise tab of the Toggler while on the visualisation, removes the Graph Visualisation and displays the correct How-To Content.
  - Interacting with the **Map** tab of the Toggler only displays the How-To Content for this visualisation.
    - Interacting with this page's Selector replaces the How-To Content with the Map Visualisation.
    - Reverting back to the default value (*Select a Statistic*), or interacting with the Map tab of the Toggler while on the visualisation, removes the Map Visualisation and displays the correct How-To Content.
  - Ensure each tab of the Toggler presents the correct **Hover** and **Fill** effects, and revert to their inactive state when inactive.

## Dynamic HTML Generation

This aspect of the testing was implemented via Unit Testing, using Jasmine.

See below for an overview of the tests and their respective results, via the Jasmine UI.

![Jasmine Unit Test Results](https://res.cloudinary.com/bak2k3/image/upload/v1612113441/covid-dashboard/Jasmine_Test_Results_drl08l.jpg)

To see the Spec for these tests, please see: [dataSpec.js](assets/js/spec/dataSpec.js)

To see a live demonstration of the testing, please visit: [tests.html](https://bak2k3.github.io/covid-dashboard/tests.html)

## Compare

- Ensure that when a user selects the Compare tab of the Toggler, the user is presented with the correct How-To Content.
- Ensure that two Selectors are always visible at the top of the container while the user is engaged with this section.
- Ensure that selecting **any** country, from either Selector, initialises the Table.
- For both Selectors, ensure the following:
  - The full country name fits comfortably within the Selector once selected.
  - Where the full country name is too long for the Selector, an ellipsis is present at the end of the country name, and the full string fits comfortably within the Selector.
- Ensure that when a country is selected, on either one or both of the Selectors, the following statistics appear in the respective column of the Table, and in the following format:
  - **Time of Update:** FormattedDate Object
  - **Name of Country:** Raw Text
  - **Total Amount of Cases:** Numerical Locale String
  - **Amount of Cases Diagnosed Today:** Numerical Locale String
  - **Total Cases of Deaths:** Numerical Locale String
  - **Amount of Deaths Today:** Numerical Locale String
  - **Total Cases Recovered:** Numerical Locale String
  - **Amount Recovered Today:** Numerical Locale String
  - **Currently Active Cases:** Numerical Locale String
  - **Currently Critical Cases:** Numerical Locale String
  - **Cases Per One Million:** Numerical Locale String
  - **Deaths Per One Million:** Numerical Locale String
  - **Total Amount of Tests:** Numerical Locale String
  - **Tests Per One Million:** Numerical Locale String
  - **Population of Country: :** Numerical Locale String
- Ensure that when a user selects a country from either Selector, the correct column of the table is populated depending on which Selector is interacted with.
- Ensure that when a single country's statistics are present on the Table, and the user selects a country from the alternative Selector:
  - The new statistics requested are presented on the correct column.
  - All Numerical Locale Strings are concatenated with comparative indicators.
  - All null values are presented as `-`.
  - Comparative indicators on the left column appear before the value.
  - Comparative indicators on the right column appear after the value.
  - No comparative indicators appear where a row has a `-` entry.
- Ensure that each comparative indicator correctly represents whether its representative figure is higher or lower than that being compared against.
  - For example, if the first column's Total Deaths is 3,105, and the Second Column's Total Deaths is 67, the 3,105 should have an **UP** arrow before it, and the 67 should have a **DOWN** arrow after it.
- Ensure that when the user changes either country, when two countries are selected, that all comparative indicators are updated to reflect the new figures being compared against.
- Ensure the user can navigate through the currently selected Selector using the up or down keys on a keyboard.
- Ensure that a user can search for a country by typing when a Selector is active.
- Ensure that when both Selectors are reverted to their default value (*Select a Country*), the Table is replaced with the How-To Content.
- Ensure that when the Table is present, and the user selects the **Compare** tab of the Toggler, the section is *reset* and the How-To Content replaces the Table.
- Ensure that any time the user navigates away from the Table, the section is *reset*, and the Selector is *reset* to its default value.
- Ensure that all text on the Table is legible.

## Visualise

- Ensure that when a user selects the Visualise tab of the Toggler, the user is presented with the correct How-To Content.
- Ensure that a Selector is always visible at the top of the container while the user is engaged with this section.
- Ensure that selecting **any** country from the Selector initialises the Graph.
- For the Selector, ensure the following:
  - The full country name fits comfortably within the Selector once selected.
  - Where the full country name is too long for the Selector, an ellipsis is present at the end of the country name, and the full string fits comfortably within the Selector.
- Ensure that when the Graph is initialised:
  - A Time Series graph is presented to the user.
  - The X-Axis is labelled *Date*, and all labels are clear and legible.
  - The Y-Axis is labelled *Total*, and all labels are clear and legible.
  - Ensure that 3 sets of data are presented to the user:
    - **Cases** (White Line)
    - **Deaths** (Black Line)
    - **Recovered** (Green Line)
- Ensure that for each country's graph, the Legend is interactive, and the graph updates accordingly:
  - Interacting with either of the three statistics at the top of the graph (either the block colour or the representative text) removes the respective data from the graph.
  - The scale of the Y-Axis dynamically adapts to the new ranges of data being displayed.
- Ensure that for each country's graph, each data point is interactive, and displays the following information legibly in a tooltip when interacted with:
  - **Statistic Value**
  - **Statistic Name**
  - **Date of Statistic**
- Ensure that when the Graph is currently displaying a country's data, and the user changes the country, the Graph is updated to reflect the newly selected country's data.
- Ensure the user can navigate through the Selector, once active, using the up or down keys on the keyboard.
- Ensure that a user can search for a country by typing on a keyboard when the Selector is active.
- Ensure that when the Selector is reverted to its default value (*Select a Country*), the Graph is replaced with the How-To Content.
- Ensure that when the Graph is present, and the user selects the **Visualise** tab of the Toggler, the section is *reset* and the How-To Content replaces the Graph.
- Ensure that any time the user navigates away from the Graph, the section is reset, and the Selector is reset to its default value.
- Ensure the `formatTimeSeries` function is performed each time a new country is selected.

## Map

- Ensure that when a user selects the Map tab of the Toggler, the user is presented with the correct How-To Content.
- Ensure that a Selector is always visible at the top of the container while the user is engaged with this section.
- Ensure that selecting **any** statistic from the Selector initiates the Map.
- Ensure that the full string of each statistic fits comfortably within the Selector.
- Ensure that when the Graph Visualisation is initiated:
  - A Choropleth Map is presented to the user.
  - The outline of each country is clearly differentiated.
  - Manual *Zoom* buttons are displayed on the top left-hand corner of the map for desktop, and bottom left for mobile.
  - A Legend is presented to the user underneath the map.
  - The Legend's title is clear, the colour of each category is easily differentiated, and the representative text is legible.
- For each statistic, ensure that all interactive features are functional:
  - **Hovering** over/ **Interacting** with a single country changes the colour of the country to a contrasting pastel pink colour.
  - A **tooltip** appears displaying the country name and a numerical representation of the statistic displayed in locale string format.
  - Each threshold within the Legend can **be interacted with** to either add or remove countries, contained within the selected threshold, from the Map.
- Ensure that when the Map is currently displaying a statistic, and the user changes the statistic from the Selector, the Map is updated to reflect the newly selected statistical data.
  - Each country should contain its updated figure on interaction.
  - Each country's colour should change depending on the Legend thresholds.
  - All countries that contain no data for the statistic are de-selected by default.
- Ensure the user can *Zoom* in and out of the map, and subsequently navigate the map:
  - The user should be able to *Zoom* in and out with the relevant **buttons** , the **mouse-wheel** , or by **pinching** on a touchscreen device.
  - The user should be able to **click and drag** , or **swipe** on a touchscreen device, to navigate once zoomed it.
  - All features must be functional when zoomed in.
- Ensure the user can navigate through the Selector, once active, using the up or down keys on the keyboard.
- Ensure that a user can search for a statistic by typing on a keyboard when the Selector is active.
- Ensure that when the Selector is reverted to its default value (*Select a Statistic*), the Map is replaced with the How-To Information.
- Ensure that when the Map is present, and the user selects the **Map** tab of the Toggler, the section is *reset* and the How-To Section replaces the Map.
- Ensure that any time the user navigates away from the Map, the section is *reset*, and the Selector is reset to its default value.
- Ensure the `formatMapData` function is **only** executed **the first time** the user engages with this Feature.

## Modals

These tests were applied to both the **Donate** and **Credits** Modals.

- Ensure the Modal works no matter where the user is on the website.
- Ensure the Modal is displayed centrally, and the background is appropriately dimmed.
- Ensure the Modal has a header, body text, and a close button.
- Ensure the Modal can be dismissed by interacting with the screen outside the modal area.
- Ensure pressing the escape key closes the Modal.
- Ensure the close button closes the Modal.
- Ensure all links work, and open in a separate browser window.
- Ensure all content in the Modal fits appropriately within the Modal, and is legible.

## Responsive Layout and Design

The testing detailed above, specifically those relating to visual aspects of the website, was re-tested for its responsive layout and design using Chome Development tools, either via the pre-set mobile 
device resolutions or via the manual responsive tool (using `Toggle Device Toolbar`).

- Using Chrome Development Tools, and select `Toggle Device Toolbar`.
- Cycle through each available device, and perform the tests as detailed above:
  - Moto G4
  - Galaxy S5
  - Pixel 2
  - Pixel 2XL
  - iPhone 5/SE
  - iPhone 6/7/8 (and plus)
  - iPhone X
  - iPad
  - iPad Pro
  - Surface Duo
  - Galaxy Fold
- Ensure all Features function correctly from at least 320px wide.
- Due to how both the Graph and Map Features were implemented for native mobile viewing, extensive testing was performed on navigating to and from these visualisations, and interacting with these visualisations, 
to ensure all resolutions performed as expected.
- Ensure Modals are presented appropriately on all viewports:
  - Interaction is enabled.
  - The Modal fits on device's screen.
  - The content is legible.
  - The user can dismiss the modal.

# Browser Testing

Cross-Browser compatibility was tested via applying the methodology described above within each browser detailed below.

## Chrome/Firefox/Edge

All functionality worked as intended.

## Internet Explorer 11

As COVID Dashboard uses JavaScript ES6, support for Internet Explorer 11 has not been considered or tested.

## Safari

All functionality worked as intended, other than one aesthetic bug with regard to the Selectors, whereby text was not centrally aligned. However, despite multiple various implementation attempts, 
according to [WebKit's](https://bugs.webkit.org/show_bug.cgi?id=40216) bug reports: *"We are not going to center or justify menu items on Mac OS X"*. As such, this bug remains as it would require 
a [significant CSS overhaul](https://stackoverflow.com/questions/11182559/text-align-is-not-working-on-safari-select) in order to overcome.

# Code Validation

Code Validation was completed via third party applications, in order to assess the markdown syntax and logical application of the languages used.

1. [**W3 Markup Validation**](https://validator.w3.org/) – HTML Validation

  - The project's HTML was validated using the automated W3 Markup Validator at intervals throughout the development process.
  - At no point were Errors presented.
  - At final deployment, no Errors or Warnings are present.

1. [**W3 Jigsaw**](https://jigsaw.w3.org/css-validator/) – CSS Validation

  - The project's CSS was validated using the automated W3 Jigsaw Validator at intervals throughout the development process.
  - One Error was identified, regarding the pre-written CSS rule for .mapael .mapTooltip, as `moz-opacity` was defined incorrectly. This was easily resolved by adding the appropriate `-` to the beginning of the rule.
  - Warnings are present in the final deployed website, due to unknown vendor extensions and certain borders/backgrounds being the same colour, however I'm aware of these warnings and am satisfied these can be dismissed.

1. [**Google Lighthouse**](https://developers.google.com/web/tools/lighthouse) - Accessibility, Performance, and Best Practices Audit:

  - **Desktop**

![Lighthouse Desktop Results](https://res.cloudinary.com/bak2k3/image/upload/v1612113928/covid-dashboard/Lighthouse_vjgt5h.jpg)

  - **Mobile**

![Lighthouse Mobile Results](https://res.cloudinary.com/bak2k3/image/upload/v1612113928/covid-dashboard/Lighthouse-mobile_kmjbqj.jpg)

  - It appears the Mobile Performance was reduced due to the throttling imposed on the mobile testing for the Lighthouse assessment. Additionally, the background file could have been converted to a jpeg for greater compression. 
  However, this was tested and resulted in a substantial difference in quality; artifacts were present, and the colours were not as pure. As such, given the background image consists of graphics, I'm satisfied with the performance 
  of the site and maintained the filetype of PNG for the background.

# Significant Bugs

## Unable to obtain full list of endpoints for the Global Visual Dataset API

The Visualise Feature (Time Series graph) utilises the John Hopkins University Dataset, while the Compare and Map Features (Table and Choropleth, respectively), utilise the Worldometers Dataset. 
When querying the API for the Compare and Map Features (to be stored in the `Global Compare Dataset`), a full list of available countries is returned from a single query. However, when querying the API for the Visualise Feature 
(to be stored in the `Global Visual Dataset`), explicit country names need to be provided in order to receive the required countries' data.

The initial implementation saw the John Hopkins API being queried with a list of all countries returned from the Worldometers API request. However, when reviewing the subsequently retrieved data, it became apparent that 
multiple countries returned `404` statuses for their requests, resulting in `null` values in the `Global Visual Dataset`. After extensive research into the disease.sh documentation, it was clear there was no explicit list of endpoints 
for this particular API request. Therefore, as opposed to giving the user an option to select a country for visualisation, to only be informed no data was available for the requested country, 
the decision was made to attempt to **brute force** the possible endpoints, and hard code a list of countries which successfully returned data.

A full ISO2 to Country Name dictionary was obtained externally, and the keys from this dictionary were passed as a list into the query as possible endpoints.

```
$.getJSON(`https://disease.sh/v3/covid-19/historical/${Object.values(fullISO)}`)
```

From this, I retrieved a list of all countries and their responses; those that returned valid data were valid endpoints, and those that returned `null` or `404` responses were invalid endpoints. 
I subsequently wrote a script that iterated through the returned object, and appended any country that contained valid data to a list called `condensedCountryList`.

```
// For each item in the returned object
response.forEach(function (item) {
    // If the item is not null
    if (item != null) {
    // Append the name of the country to a list
      condensedCountryList.push(item.country);
    }
});

// Print the list to console
console.log(condensedCountryList);
```

I then printed the `condensedCountryList` to console, and hard-coded the output as a `const` variable into the `data.js` script, which would then be passed straight into the API on page load to obtain a full and 
valid list of all available endpoints for the John Hopkins dataset.

This solved two problems:

1. Ensured only valid endpoints were queried for this API, and as such ensured users were only able to request data for valid countries, and;
2. Prevented countries **not** in the Worldometers Dataset, but were available endpoints for the John Hopkins Dataset, from being excluded from the query.

![API Endpoints](https://res.cloudinary.com/bak2k3/image/upload/v1612114426/covid-dashboard/API_Endpoints_q6j6pu.png)

## Map Feature not functioning when testing the code locally offline

When hosting the website via Gitpod, or via GitHub Pages, the Map Feature worked as intended. However, when downloading the code as a .zip file from GitHub and running the index.html directly from the file directory, 
the Map Feature would not appear when choosing a country from the relevant Selector.

Upon inspecting the console in Chrome Dev Tools, an `ERR_FILE_NOT_FOUND` was returned for the `jquery.mapael.min.js` file.

Upon reviewing the imports in the index.html file, it appeared the link provided from the CDN (Cloudflare) for this particular js file was formatted incorrectly:

`<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-mapael/2.2.0/js/jquery.mapael.min.js"></script>`

I amended the import by adding `https` to the beginning of the script `src`, as follows:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mapael/2.2.0/js/jquery.mapael.min.js"></script>`

Following this amendment, full functionality returned to the local offline deployment of the site, while maintaining functionality for online deployment.

## Map Feature Bugs

The following two bugs were found during a single testing session. Due to their interlinked nature, their solution was combined as they related to the same function:

### Map Legend displayed the incorrect title and thresholds after navigating away and returning

When testing the Map Feature, it was identified that in the following circumstances, the Legend would present the thresholds for the previously requested statistics:

- User initialises the Map Feature by choosing a statistic.
- User navigates away from the Map Feature.
- User returns to the Map Feature, and re-initialises by selecting a **different** statistic.

![Map Incorrect Legend](https://res.cloudinary.com/bak2k3/image/upload/v1612114563/covid-dashboard/Incorrect_Legend_lluq6n.jpg)

### MapData was being prepared every time the map was re-initialised

Due to the vast amount of data requiring pre-processing prior to generation of the map, it was intended for the Map Data to be executed **once** per user session. In order to test this, a breakpoint was set on 
the `Format Map Data` function, and was tested in conjunction with the previous test (which identified the Legend bug).

![Format Map Data Breakpoint](https://res.cloudinary.com/bak2k3/image/upload/v1612114587/covid-dashboard/Breakpoint_lqs5p0.png)

It was identified that the `Format Map Data` function was being called on first initialisation of the Map, **every time** the user navigated away from this feature and returned.

### Solution

When reviewing the relevant code for the function tied to the above functionality, it became apparent that the anonymous function tied to the Selector state change was unnecessarily complicated. As such, 
I found it difficult to isolate the aspects of the function which caused these two errors. As a result of this, it was decided to refactor this functionality in its entirety, splitting each core functionality into independent functions, 
allowing the logic for the _on state change_ to be more concise, and their resultant actions more verbose, due to calling appropriately named functions.

Once refactored, and re-implemented, the first bug discussed was resolved. This can be attributed to the fact that the re-implementation of intended functionality was simpler when the logic was clearer. 
Furthermore, the second bug was identified from the following condition during the refactoring process:

```
    if ($.isEmptyObject(mapLegends)) {
        generateLegends(statisticChoice);
    }
```
The anonymous function was only updating the Legends when the `mapLegends` object was empty, and the `mapLegends` object was being reset each time a user navigated away from the Feature. As such, as part of the refactoring process, 
this was corrected to always update the Legend on state change.

## The Graph's height would be incorrect after navigating away and returning when using a mobile device

When testing the Visualise Feature on mobile devices, it was identified that in the following circumstances, the Map's `height` would display incorrectly:

- User initialises the Visualise Feature by choosing a country.
- User navigates away from the Visualise Feature.
- User returns to the Visualise Feature, and re-initialises by selecting **any** country.

**First Initialisation**

![Graph Destroy Example 1](https://res.cloudinary.com/bak2k3/image/upload/v1612114662/covid-dashboard/Graph-destroy-1_luj9kl.jpg)

**Second Initialisation**

![Graph Destroy Example 2](https://res.cloudinary.com/bak2k3/image/upload/v1612114662/covid-dashboard/graph-destroy-2_t1cd8n.jpg)

In order to force Chart.js to function as intended on mobile devices, the `height` of the graph's container had to be specified in CSS on lower screen-width media queries. However, when reviewing the in-line styling of the 
graph's `canvas` in Chrome Development Tools on second initialisation, it appeared that by specifying an explicit `height`, `width` in-line styling lingered on the canvas when the `.destroy()` method was called 
(which is a function of the Chart.js library).

![Graph Destroy Example 3](https://res.cloudinary.com/bak2k3/image/upload/v1612114662/covid-dashboard/graph-destroy-3_agf6tb.jpg)

In order to resolve this, the `width` attribute was targeted and removed each time the graph was destroyed, which fixed the issue and allowed the user to re-initialise the map on navigation with the correct `height`.

![Graph Destroy Example 4](https://res.cloudinary.com/bak2k3/image/upload/v1612114662/covid-dashboard/Graph-destroy-4_hdyrdq.jpg)

## Map Legend re-activating "No Data Available" threshold on statistic change

When a user chooses a statistic on the Map Feature, they should be presented with only the countries on the map which have valid data for the given statistic. Options for the Mapael package were set to do this within 
the `Generate Legends` function, by setting this particular Legend threshold's option property as: `clicked: true`.

Whilst this would work for the first initialisation of the Map, every time the selector was changed to cycle through the statistics, all Legend states would be reset, including the one for `No Data Available`.

A solution to this was found by navigating to the [GitHub repository](https://github.com/neveldo/jQuery-Mapael/blob/7f38564085eed2445ccecf30bbf7d267984de0cf/js/jquery.mapael.js#L953) for Mapael, and understanding 
whether this was a **Feature** or a **Bug**.

```
// IF we update areas, plots or legend, then reset all legend state to "show"
if (opt.mapOptions.areas !== undefined || opt.mapOptions.plots !== undefined || opt.mapOptions.legend !== undefined) {
    $("[data-type='elem']", self.$container).each(function (id, elem) {
        if ($(elem).attr('data-hidden') === "1") {
            // Toggle state of element by clicking
            $(elem).trigger("click", [false, animDuration]);
        }
    });
}
```
Understanding that this was a Feature of Mapael, I targeted the specific code that was causing the reset, and essentially reversed it for the first element of the Legend to *re-hide* it after the Map had been updated.

```
$("[data-type='legend-elem']").first().trigger("click", [false, 300]);
```

## Mapael throwing an "Uncaught TypeError"

Mapael occasionally throws an `Uncaught TypeError`. It must be noted, however, that I have not been successful in consistently re-creating this error, and as such have found it difficult to isolate what is causing the particular bug. 
Regardless, from what I have identified this does not prevent any form of functionality.

![Mapael Error](https://res.cloudinary.com/bak2k3/image/upload/v1612114877/covid-dashboard/Mapael-resizing_pcwesh.jpg)

[Similar](https://stackoverflow.com/questions/22967790/uncaught-typeerror-cannot-read-property-offsetwidth-of-null) bugs have been reported when using the Google Maps API, when the order in which data is loaded is incorrect. 
However, due to time restraints, and as this did not prevent any unexpected behaviour, this bug still exists.

# Other Technical Difficulties

---

[Click here](README.md) to return to the main README.md.