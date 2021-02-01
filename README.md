![COVID Dashboard Logo](https://res.cloudinary.com/bak2k3/image/upload/v1611429573/covid-dashboard/Logo_iy23uj.jpg)

**COVID Dashboard** is an interactive platform which allows users to compare and visualise up to date COVID-19 Statistics. 

[View website on GitHub Pages](https://bak2k3.github.io/covid-dashboard/index.html).

# Table of contents

>1. [Overview](#overview)
>2. [UX](#ux)
>    1. [Strategy](#strategy)
>    2. [Scope](#scope)
>    3. [Structure](#structure)
>    4. [Skeleton](#skeleton)
>    5. [Surface](#surface)
>3. [Features](#features)
>    1. [Existing Features](#existing-features)
>    2. [Future Feature Considerations](#future-feature-considerations)
>4. [Technologies Used](#technologies-used) 
>5. [Testing](#testing)
>6. [Deployment](#deployment)
>7. [Credits](#credits)
>    1. [Content](#content)
>    2. [Media](#media)
>    3. [Code](#code)
>8. [Acknowledgements](#acknowledgements)
>9. [Disclaimer](#disclaimer)

# Overview

COVID Dashboard is an interactive platform designed to communicate statistics surrounding the Coronavirus Pandemic in a multifaceted and accessible manner. 
The project obtains up to date COVID-19 data, and displays it to a user in a useful, straightforward, and easily digestible manner. Users can review individual country statistics, 
compare these statistics with other countries, view 30-day running accumulative statistics of any given country, and visualise individual statistics on a global scale via a Choropleth Map.

The project was developed using **HTML**, **CSS**, and **JavaScript**.

---

# UX

## Strategy

### Stakeholder Interview 

**When looking to find out COVID-19 statistics, what are your most important considerations?**

*“Sometimes it’s hard to gauge the scale or relevance of the figures being provided.”*

*“I usually just get told a single daily figure, and I wish I could compare these figures with other countries.”*

*“I usually only hear about the countries that are suffering the most.”*

*“I want to have some degree of control over how the data is presented to me”.*

### Competitor review

[Gov.UK Interactive Map](https://coronavirus.data.gov.uk/details/interactive-map)

The Gov.uk interactive map has precise location data for Upper Tier Local Authorities (UTLA), Middle Layer Super Output Arears (MSOA) and Lower Tier Local Authorities (LTLA), 
allowing both precise and general infection data. While the location data provides fluctuation over a seven-day period, it focuses on a single statistic only. 
You can zoom into the map using a mouse wheel.

**Mobile Friendly?** Native.

[WHO Coronavirus Disease (COVID-19) Dashboard Map](https://covid19.who.int/)

The WHO interactive map is aesthetically impressive, with a co-ordinated colour scheme and multiple statistics on hover. Clicking on a country allows for further details on the respective figures. 
However, there is an inability to zoom into the map using a mouse wheel, the legend is hidden from the outset and you can’t filter countries via the legend, and it takes a few minutes of usage before 
figuring out how to fully utilise the map.  

**Mobile Friendly?** Yes, albeit it feels crammed, and the “hover overview” functionality is lost due to the “click” function performing a significant action.  

[WHO Coronavirus Disease (COVID-19) Dashboard Table](https://covid19.who.int/table)

The WHO interactive table is well presented, with country flags, “progress bar” style accumulative statistics, and provides data on all available countries. 
However, the inference of the statistics is limited, focusing on daily and cumulative Cases and Deaths, however does provide details on transmission classification. 
The table allows sorting, however the greyscale overlay implemented to represent comparativeness has the potential to be effective but the relevance must be deduced by the user due to lack of legend.

**Mobile Friendly?** Yes, albeit the interface has not been designed for mobile interaction. 

[Worldometers Worldwide Graphs](https://www.worldometers.info/coronavirus/worldwide-graphs/)

The Worldometers Coronavirus Worldwide graphs are interactive, and clearly represent the data. 
Various graphs are presented with pre-set data, although these are all prepared sequentially and must be scrolled through to see all the possible graphs. 
Additionally, the data being presented is quite specific, and predetermined, and therefore provides limited user choice. 
The graphs do, however, provide over 300 days of data and gives a broad exploration of data analysis.

**Mobile Friendly?** Native

[CSSE JHU Covid-19 Dashboard](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)

The CSSE JHU Covid-19 Dashboard has an impressive design; however, with that comes a sense of overwhelm, with the user being presented with a huge amount of 
information without it being instinctively clear what each aspect of the dashboard represents, and how it can be interacted with (such as tab names Admin01, Admin02, Admin03). 
The map utilises the scroll wheel, and the dashboard as a whole presents tables, maps, and graphs.

**Mobile Friendly?** No

### User Stories

1. `“As a visitor to the website, I want to know what the website does, so that I can decide whether I’m interested in engaging with it.”`
2. `"As an interested user, I want the interface to be simple and intuitive, so that I can easily navigate and interact with the website."`
3. `“As an engaged user, I want to be given a choice of data visualisations, so that I can choose how the statistics are presented to me.”`
4. `“As an engaged user, I want to be able to interact with the visualisations, so that I get to control the data that I’m engaging with.”`
5. `“As a mobile user, I want to be able to utilise all aspects of the site, so that I can interact with the website on the go.”`

### Project Strategy Summary

#### Ideal User 
Any individual interested in COVID-19 Statistics.

#### Project Goal
Provide a platform on which users are able to not only obtain up to date COVID-19 statistics, but to do so dynamically, 
presenting the information in a user friendly and understandable manner, whilst providing users control over how the data is presented.

#### User Needs 
- To be able to navigate the site with ease.
- To be able to choose how the data is presented.
- To be able to control the data visualisations.
- To be able to understand the statistics.

#### Project Objectives 
- To create an *all in one* solution to providing statistics surrounding the COVID-19 Pandemic. 
- Give users a reason to use this site, over multiple other individual sites. 
- Engage the user.
- Allow the user to navigate and control the website with ease. 

## Scope

### Functional Requirements

#### Simplistic User Interface and Interactivity

- Allow the user to navigate, and interact with, the site with ease.
  - Implement an intuitive navigation system which is consistent in style and structure.
- Take a minimalistic approach to layout and structure, whilst presenting sufficient information at all times.
  - This should allow instinctive and self-explanatory usage and interaction.
- Ensure the layout, structure, and visualisations are native to mobile.

#### Data Visualisations

- Allow the user to choose how the data is visualised.
- Implement various methods of data visualisation:
  - **Compare** (To compare 2 countries' full data side by side via table)
  - **Visualise** (To see Time Series data for a single country via graph)
  - **Map** (To compare a single statistic across all countries via choropleth)

#### User Control

- Let the user decide how the data is presented to them.
  - Present the choice of visualisation, rather than presenting all available visualisations at once, so as to not overwhelm, and to instil the user with control.
- Allow the user to choose what data is visualised.
  - Allow the user to select the country/statistics they want to look at and/or compare.
- Allow the user to have a degree of control over the data being visualised.
  - Allow the user to filter aspects of the data where applicable.

#### Data Extraction, Cleaning and Formatting

- Extract the necessary data from an API (See Content Requirements).
- Clean the data, to remove any aspects of the data that are not required.
- Pre-process the data for their respective visualisations.
- Format the data, where applicable, for easy user interpretation.

### Content Requirements

#### Global Daily COVID-19 Statistics

- Obtain bulk daily COVID-19 statistics for as many countries as possible.
- Ideally, the data should be:
  - updated regularly.
  - consistent in content across the countries.
- This data can be utilised for comparing (via table), and mapping (via choropleth).

#### Global Historic COVID-19 Statistics

- Obtain Time Series COVID-19 data for as many countries as possible.
- Obtain more than one statistic per country, where possible.
- Ideally, the data should be:
  - updated regularly.
  - consistent in content across the countries.
- This data can be utilised for Time Series visualisation (via graph).

## Structure

### Information Architecture

The website uses a single page, with the content being constructed/deconstructed via JavaScript as the user navigates through the website.

- Consideration was given to having a separate HTML file for each data visualisation. While this would reduce the dependency on JavaScript for the sole purpose of navigation, 
and would reduce the possibility of running into basic navigational bugs, it was decided that this would be a good opportunity to demonstrate additional JavaScript capabilities. 
Furthermore, given the majority of the HTML is static, with only the content being dynamic, it seemed like the most appropriate solution.

#### Logo

The Logo (the page's primary heading) is presented centrally at the top of the page at all times. It is isolated in its own container for consistent visibility. 
It establishes the theme of the project, and is consistent with the rest of the website's design choices.

#### Splash Screen

A Splash Screen is presented to the user while the data initially loads; while this is present, only the Logo is visible.

#### Navigation Toggler

Once the data is loaded, a Navigation Toggler appears, with a Section Container attached underneath. All tabs are initially deselected, and the Section Container contains a website overview (Information Section).

Once the user selects a tab from the toggler, the Information Section is removed from view, and the relevant HTML is generated, hidden, and/or displayed for the requested Visualisation Section.

#### Section Container

The Section Container is attached to the Navigation Toggler, and dynamically presents the required Section; be it the project overview, visualisation specific instructions, or the visualisations themselves.

#### Information Section

The Information Section is essentially the *Landing Page*, providing a project overview and basic instructions.

#### Visualisation Section

When a user selects a visualisation method from the Toggler, the relevant How-To Content is presented. Upon engaging with the Section (by either selecting a country or a statistic, where applicable), the appropriate Visualisation Content
replaces the How-To Content.

- **How-To Content**: The How-To Content provides a simple set of instructions, explaining how the user can interact with the requested visualisation method.

- **Visualisation Content**: The Visualisation Content presents the user with the requested data (either country or statistic) in the requested visualisation method.

#### Footer

The Footer is attached to the bottom of the page, and is **not** designed to remain in the viewport at all times, so as to not obfuscate the viewport. The footer is split into three sections: 
a GitHub Link, a link to a Donation modal, and a link to a Credits modal.

#### Modal

The Donation and Credits sections are contained within modals, and linked to at the bottom of the page, due to their low informational and user priority. These sections are not integral to the project's functionality, 
however, are available if users are interested in either supporting relevant charities, or are interested in the packages used to develop the project.

### Interaction Design

The overall goal of the interaction design is to allow users to retrieve statistics, or their representative visualisations, with the least amount of interaction possible, and to be intuitive in doing so.

#### Splash Screen

On page load, all content but the Logo is hidden. While the Logo is visible, you cannot interact with it until the data has loaded. This prevents un-interactable elements being present when the data is loading, 
and prevents the user interaction before the data is pre-processed.

#### Navigation Toggler

The Navigation Toggler is designed to aesthetically represent the section the user is currently engaged with. *Hover* effects are implemented to show potential navigation, and *Fill* effects are implemented to represent current engagement. 
This interaction is responsive, reflective of its intentions, and intends to provide a positive user experience.

#### Visualisation Sections

Each Visualisation Section contains the relevant Selectors at the top of each Section, regardless of what content is being displayed. Their default value is representative of their instructions (i.e *Select a Country* for the country Selector, 
and *Select a Statistic* for the statistic Selector).

Upon a user engaging with this Selector, the How-To Content is removed, and the visualisation process immediately commences; be it via Table, Graph, or Map generation. This also applies to when the user changes the Selector's value, 
and when the default value is reselected. When the user changes the requested data (i.e from Italy to France, or Total Deaths to Total Cases), the relevant data is immediately prepared, formatted, and represented on the requested 
method of visualisation, in order to reflect the users intentions. When the default value is re-selected, the How-To Content repopulates the respective container. These concepts were implemented to achieve an intuitive sense of interaction, 
attempting to pre-empt and reduce the required user inputs, ultimately producing a user-friendly interface.

## Skeleton

> **Note:** Due to the resolution of the wireframe documents, it is recommended that these PDFs are downloaded to be viewed in the browser, rather than using GitHub's native PDF viewer.

Header and Footer Wireframe: [Link](./assets/wireframes/header-footer-wireframe.pdf)

Compare Wireframe: [Link](./assets/wireframes/compare-wireframe.pdf)

Visualise Wireframe: [Link](./assets/wireframes/visualise-wireframe.pdf)

Map Wireframe: [Link](./assets/wireframes/map-wireframe.pdf)

## Surface

The project's aesthetic design is intended to be simple, yet informative and engaging.

### Colour Scheme

> **Please note:** Some screenshots throughout the documentation may contain colours that differ from those documented below. Throughout the development and documentation process, 
strong, vivid, and bold colours were used for the separate Section Containers to allow for differentiation when developing and testing. Once the navigational development had been completed, the colour scheme discussed below was implemented.

![Primary Colour Scheme](https://res.cloudinary.com/bak2k3/image/upload/v1611426025/covid-dashboard/Colour_Scheme_Primary_j9z5er.jpg)

#### Blue

The colour scheme for this project centres around a light pastel shade of blue (#72A3C0), due to its symbolism of [wisdom, inspiration, and calmness](https://en.wikipedia.org/wiki/Color_symbolism). 
This colour was ultimately implemented into the Logo, the Section Containers, and the Navigation Toggler. The shade of blue chosen also closely resembles the *water* shade of blue commonly used in map diagrams, 
which allowed the Map Feature to synergise with its hosting container.

#### White

An off shade of white (#EFF1F3) was initially chosen as the background colour, and as the background colour for interactive containers (such as selectors, unselected togglers for navigation, and modals). 
After preliminary user testing and feedback, the background colour of the project was changed substantially; this has been discussed in the **Visual Effects** aspect of the documentation.

#### Black

In order to comply with WCAG 2.0, a Rich Black colour (#0E0F19) was chosen for primary text throughout the website. This resulted in a 7:1 ratio for Black on Blue, and a 16.84:1 ratio for Black on White.

![Primary Colour](https://res.cloudinary.com/bak2k3/image/upload/v1611426998/covid-dashboard/Contrast_Checker_ivkbfn.jpg)![Secondary Colour](https://res.cloudinary.com/bak2k3/image/upload/v1611426998/covid-dashboard/Contrast_Checker_2_i3fclr.jpg)

#### Orange and Dark Grey

Two colours complimentary to those preceding were also used throughout the project. A pastel orange/pink (#D78170) was used for stark visual contrast when highlighting or selecting a country on the Map Feature. 
A dark shade of Grey (#252627) was also used for certain shading and lines throughout the project as a subtle yet effective alternative to the primary shade of black.

![Secondary Colour Scheme](https://res.cloudinary.com/bak2k3/image/upload/v1611426025/covid-dashboard/Colour_Scheme_Secondary_yklj3i.jpg)

#### Green Scale

Four shades of green (#97E766, #7FD34D, #5FAA32, #3F7D1A) were implemented into the Map Feature, so as to prescribe thresholds to statistics, in a relevant shade and colour, 
given they represented land areas on a map. One of these shades of grey was also incorporated into the Visualise Feature, to represent "Recovered" cases, due to the positive connotations of the colour.

### Typography

- **Logo Font:** [Crimson Text](https://fonts.google.com/specimen/Crimson+Text) was chosen for the Logo. This is a sharp and poignant font, with historic undertones, 
intended to stand out and isolate itself from the rest of the text on the page, especially given the Logo is present throughout the site.
- **Body Font:** [Raleway](https://fonts.google.com/specimen/Raleway) was chosen as the body font due to its softer and curvier aesthetic, and easier to read in bulks of text.

### Logo

The Logo was initially designed in GIMP, and implemented into the project using CSS. Its intention is to be simplistic, relatable, yet identifiable through the use of underlining and isolated italics, combined with the chosen font.

### Visual Effects

#### Background Image

After preliminary user testing and feedback, it was concluded that a *plain white* background, against a primary blue coloured container, resulted in a particularly monotonous and dull user experience. 
As such, a graphic was designed using GIMP as the background for the website.

This background focuses on the primary blue colour chosen, with a circular gradient, progressively transitioning to the rich black colour chosen on the outer edges, producing a focusing effect on the centre of the page. 
In addition to this, the graphic was overlayed with a bump mapped mosaic, to create depth and texture to the overall aesthetic.

The mosaic design was chosen due its random yet cohesive nature; its symbolism resonates with the data of the project, given the interconnectivity of people, things, place and statistics that all appear unique in isolation, 
yet are influenced and derived from their surroundings.

#### Navigation Toggler

The Navigation Toggler is the primary method of navigating throughout the site, and as such is implemented with a feedback based visual effect, designed to communicate interactivity without explicitly instructing the user to do so.

![Navigation Toggler](https://res.cloudinary.com/bak2k3/image/upload/v1611478771/covid-dashboard/Functioning_Toggler_p7lk98.jpg)

Each buttons' idle state is a white background. When a user hovers over the icon, the pointer changes, and a fill effect (from bottom to top) commences, filling the button with the primary blue colour.

When the user clicks or interacts with one of the buttons, the respective text underlines, the fill colour remains, and any previously active button returns to its inactive state. 
The resultant effect, while subtle, effectively portrays the user's current *location* within the project.

#### Border Shadows

Border shadows are used consistently throughout the project. Whilst varying in implementation, the intended effect is to create visual depth to the layers of information present at any given time.

External border shadows are used on the following elements:

- Logo
- Section Containers
- Selectors

Inset border shadows are used on the following elements:

- Text Decorators within Sections
- Footer

---

# Features

## Existing Features

### Fetching API Data

The core functionality of the project is dependent on obtaining large amounts of data, to be accessed from various functions. As such, on page load, the disease.sh API is queried for the following data repositories:

>[https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)

This returns the daily statistics for all available countries, which is then stored in a global variable (`Global Compare Dataset`).

>[https://disease.sh/v3/covid-19/historical/{countries}?lastdays=30](https://disease.sh/v3/covid-19/historical/%7Bcountries%7D?lastdays=30)

This returns Time Series data, over a 30-day period, for the countries specified within the `{countries}` variable, for accumulative figures for Total Cases, Total Recovered, and Total Deaths. 
The available endpoints for this API were hard-coded as a list (`Condensed Country List`), and passed into the API request. **See Testing.MD for further details on this topic.** 
The data returned from this API request is then stored in a global variable (`Global Visual Dataset`).

Whilst this data is being obtained, the Splash Screen is displayed to the user and interaction with the website's navigation system is disabled. 
Once the data has been obtained, interactivity is unlocked and the Information Section is displayed to the user, along with the Navigation Toggler. If the API returns an error, 
the user is presented with an error message requesting they refresh the page, use the correct browser, or contact the developer.

### The Navigation Effect

As discussed in the **Structure** section, under **Information Architecture** , the website utilises a single HTML file, with all content either being hidden, shown, or generated as and when needed. 
Elements that are *static* (i.e do not change between interaction and navigation) are hard coded into the HTML, with Bootstrap's `d-none` class being utilised to hide the Section Containers not being interacted with. 
All other content, that which is contained within the Section Containers, is dynamically created, adjusted, or reset when the user navigates through the Sections.

When the user interacts with the Navigation Toggler, all Section Containers are hidden, their respective content *Reset*, and the requested Feature has its respective Section Container's `d-none` class removed. 
Initially, jQuery was intended to be used to `.hide()` and `.show()` the aforementioned Containers, but due to the inclusion of the Bootstrap Framework, dynamic class management had to be implemented instead.

The *Reset* functionality was initially incorporated into the navigation function (`Toggle Covid Sections`), and was designed to be called each time the user navigated to a different Section Container. 
However, upon testing the user experience, it was clear that a user may want to reset the currently active Container by interacting with the currently active Feature's tab on the Toggler. 
While re-calling this function would have achieved the intended result, it would also run a superfluous amount of script in order to achieve it. As such, the `Toggle Covid Sections` function was refactored, 
and split into three separate *Reset* functions; one for each Feature. As a result of this, the respective Container's *Reset* function would be called when the user re-interacted with the currently active element, 
and when the user navigated to a different feature, all three *Reset* functions were called in conjunction with the navigational aspect of the original function.

The result of the Navigation Effect produces smooth transitions between content, and with near instantaneous response to the JavaScript, 
allows the user to navigate through the different aspects of the website as if moving through different HTML files.

### Dynamic HTML Generation

Each Visualisation Feature contains one or more Selector; the elements of which are dynamically generated through JavaScript on page load, through the `Generate HTML` function. 
Once loaded into the Selector elements, they remain static until the page itself is reloaded.

#### Compare

Two Selector elements are present within the Compare Feature; the contents of which are obtained from the country keys within the `Global Compare Dataset`. 
Given these elements are pulled directly from the raw `Global Compare Dataset`, users will be able to view any new countries that are added as and when the dataset is updated. 
This also allows the Selector's explicit value to be used find the respective country's index position within the dataset to obtain the relevant data.

#### Visualise

One Selector element is present within the Visualise Feature; the contents of which are generated from the aforementioned hard coded `Condensed Country List`. 
As such, until the API endpoints for this data repository are provided programmatically by the disease.sh API, users will currently only be able to view the Time Series data for the countries identified 
within the dataset at the time of deployment.

As the entries in this Selector reference explicit country names contained within the `Global Visual Dataset`, when the user selects a country from this Selector, 
its explicit value is used to find the index position within the dataset to obtain the relevant data.

#### Map

One Selector element is present on the Map Feature; the contents of which are obtained from the available statistics present for a given country within the `Global Compare Dataset`.

The available statistics are filtered to remove `Name of Country` and `Time of Update` (as these are not statistical values which can be represented on a Choropleth Map), 
and then filtered through a Statistics Dictionary, hard-coded to return either `null` for statistics which may not be entirely *layman* friendly, or a string which provides a verbose representation of the 
statistic (ie. ` active: "Currently Active Cases"`). By filtering the possible statistics the user can select, it removes the possibility of selecting a statistic which would not produce expected results.

As the options within the Selector are string representations of the statistic keys, when the user selects a statistic from the Map Visualisation Selector, 
a reverse lookup (`getKeyByValue`) is performed on the dictionary to identify the required key within the `Global Compare Dataset`.

### Compare

The Compare Feature allows users to see individual country statistics in isolation, or compare two countries' respective statistics side by side. This Feature utilises Bootstrap, jQuery, and Font Awesome; the data pre-processing, 
formatting, and HTML generation is self-written.

When a user first selects a country from either Selector, the How-To Content is replaced with a generated table, providing the requested country's statistics. The table contains a central column containing the statistic definition, 
and within the column in which the user selected the country, the respective statistics are appropriately displayed and formatted. If there is no data for a particular statistic, this will be communicated to the user through a `-` symbol.

If a user chooses a second country from the Selector, the respective column is populated with the second country's data, and all numerical statistics (on both sides of the table) are affixed with a relevant comparative indicators to represent 
whether the figure is higher, lower, or equal to the figure being compared against. If either country has no data for a given statistic, no comparative indicator will be presented on that row.

If a user returns either Selector to its default value (*Select a Country*), the respective column will be emptied, and the column which retains data will have any indicators removed.

Once a Selector has been engaged with, the user can use their keyboard arrows to traverse to country list.

If a user returns both Selectors to their default value (*Select a Country*), the table will be removed, and the How-To Content will be displayed.

The statistics presented to the user are formatting depending on their data type:

- **Country Name:** Raw String
- **Date:** Converted to Date Object, and reconstructed for coherent date format.
- **Statistic:** Converted to Locale Numerical Format (eg. `3000` would be presented as `3,000` for UK and `3.000` for IT)

### Visualise

The Visualise Feature allows users to see accumulative statistics for Total Cases, Total Recovered, and Total Deaths for the requested country, over a 30-day period, on a Time Series graph. 
This Feature utilises Chart.js for the graph visualisation, and jQuery for HTML targeting.

When a user first selects a country from the Selector, the How-To Content is replaced with the requested country's Time Series graph. 
Every time the Selector is changed, the graph is updated to present the new country's Time Series data.

The Line Chart contains a Legend, which defines each line's representative statistic. This Legend is interactive, and allows users to remove/re-add statistics from/to the chart. 
As data is removed/added to the chart, the Y axis scales dynamically to adjust to the data range being displayed.

Each point on the Chart is interactive, allowing users to **hover** or **click** on them to see a tooltip describing the selected datapoint's value, the statistic it represents, and the date the datapoint represents. 
In its current state, the value represented in the tooltip is not converted to locale string (as seen in the Compare and Map Features), and the date is represented in a full Date format (including `HH:MM:SS`).

In order for Chart.js to recognise, read, and display the data as intended, the `Global Visual Dataset` had to be formatted appropriately. The self-written function `Format Time Series` performs the required pre-processing and 
formatting **each time a new country is selected**. Due to the amount of data that would need to be processed and stored (30 data points for each 3 statistics, for 185 countries), this solution appeared to present an 
optimal balance between processing time and memory and storage management.

See below for a visualisation of how the raw data is retrieved and stored, for the `Global Visual Dataset`, against the format required for Chart.js:

![Chart.js Data Conversion](https://res.cloudinary.com/bak2k3/image/upload/v1612028101/covid-dashboard/Visual_to_Chartjs_acae25.jpg)

When the user selects the default option in the Selector (*Select a Country*), or uses the Navigation Toggler (either re-selecting Visualise or navigating to a different section), 
the graph is destroyed. Given the approach taken to format the data as described above, this allows the browser to not retain too much data in memory that is not being utilised by the user, whilst still producing optimal speeds.

After initial user testing, the question was raised as to whether a logarithmic scale would be more appropriate for the Y Axis on the Time Series graph. Given the **Death** figure is comparatively lower than other figures, 
a normal scale on this axis sometimes results in a substantial gap between the **Cases**/**Recovered** lines, and the **Death** line, causing the **Deaths** line to even sometimes appear to stagnate on the 0 threshold. As a result of this, 
a Logarithmic scale was implemented and tested, but was subsequently reverted back to a normal scale. This was due to both the Y Axis Labels overlapping, and due to the less structured view it produced, making it more difficult to be 
interpreted from the standpoint of users who may not have a more thorough understanding of data visualisations. A future update to the project may see the ability for users to select which type of graph is presented.

**Example Graph of Italy using a Linear Scale**

![Italy Linear Graph](https://res.cloudinary.com/bak2k3/image/upload/v1612028194/covid-dashboard/Italy_Linear_jvbzbt.jpg)


**Example Graph of Italy using a Log Scale**

![Italy Log Graph](https://res.cloudinary.com/bak2k3/image/upload/v1612028194/covid-dashboard/Italy_Log_dckv5v.jpg)


### Map

The Map Feature allows users to visualise and compare a single statistic on a global scale, via a Choropleth Map. Using self-implemented dynamic thresholds for the Legend, the countries are shaded dependent on their current statistic 
(on a comparative basis). This Feature uses Mapael, a jQuery extension of Rapael, for the Choropleth Map, and jQuery for HTML targeting. **The Map Feature was originally going to be implemented with [DataMaps](https://datamaps.github.io/),** 
however this library is now over 5 years old, and due to certain aspects of the code being outdated, in was not innately compatible with other packages I intended to use.

When a user first selects a statistic from the Selector, the How-To Content is replaced with a map of the world, with each country colour coded based on the respective countries' statistic, with the shading determined by the 
Legend thresholds. Any country that has no data for that particular statistic will be de-selected (transparent) by default. The user can zoom in and out using a **mouseweel**, with the **provided icons**, or through **pinching** on a mobile device. 
Navigation when zoomed in works through **clicking and dragging**, or **swiping** on mobile devices.

Each country on the Map is interactive, allowing users to **hover** or **click** on them to see a tooltip containing the name of the country, and the given country's statistic. This action feels responsive, as interacting with each 
country changes the shading to a contrasting pastel orange colour. The tooltip contains dynamically generated HTML, allowing for `<strong>` country names, and numerical values converted to locale strings.

The first time a user selects a statistic from the Selector on this Feature, the data from the `Global Compare Dataset` is processed and formatted into a global variable using the self-written `Format Map Data` function. 
Unlike the Visualise Feature, this operation **is only performed once.** Given there is a fraction of the data to be processed (13 statistics across 177 countries), the solution in this instance appeared to produce optimal 
results when considering the trade-off between processing speed and memory and storage management. There is an occasional delay when first interacting with the map, but subsequent interactions appear to result in very quick responses.

See below for a visualisation of how the raw data is retrieved and stored, for the `Global Compare Dataset`, against the format required for Mapael:

![Mapael data conversion](https://res.cloudinary.com/bak2k3/image/upload/v1612028101/covid-dashboard/Compare_to_Mapael_ydf6d3.jpg)

The Map contains an interactive Legend, positioned underneath the map, which not only describes the colour coded thresholds, but allows users to hide/show specified thresholds. **Each time a statistic is selected** from the Selector, 
a calculation is performed via the `Generate Legends` Functions to determine the highest value within the requested statistic data, and the Legend is split into the following thresholds:

- No Data
- Between 0 and 1/8 of the maximum value
- Between 1/8 to 1/6
- Between 1/6 to ¼
- Higher than ¼ of maximum value

Various thresholds were tested, and given the variance of the data, some cases resulted in the *clustering* of data points, where values were only falling within the top or bottom threshold. 
One solution to this was include more thresholds, but the above implementation both produced the most aesthetically pleasing results, and avoided additional processing time without overbearing the user with too many options.

### Modals

Modals are implemented into the site, using Bootstrap, to provide an additional degree of interactivity, and to layer content depending on its importance. 
The modals either contain information relating to donating to charities (`Donate`), or citations to the primary packages used throughout the project (`Credits`). Both of these can be interacted with through the footer.

### Responsive Layout and Design

Using a combination of Bootstrap and CSS's Flexbox, the project is designed to be fully compatible and interactive on all screen types and sizes, ensuring maximum functionality **down to 320px width screen sizes**. 
This limit was chosen due to the interactive nature of the website, and given that [99%](https://screensiz.es/) of the mobile devices used today are above this width in pixels. Other than the default Bootstrap breakpoints, 
a single custom breakpoint differentiates the implemented layout design between *full* and *compact*; both of which contain the same degree of interactivity and information. This allows a user to have the same experience regardless 
of how they choose to visit the site.

Given Chart.js and Mapael both require pre-determined Container width and height on page load to generate their respective graphics, attention was given to allocating sufficient space to their relative Containers for mobile devices 
to allow a full and interactive display on smaller resolution devices, without limiting interactivity, visibility or capabilities on these resolutions.

## Future Feature Considerations

### Data Refresh

Currently, a user is unable to *Refresh* or obtain updated data from the disease.sh repository without refreshing the page. Ideally, a user should be able to achieve this without having to cease engagement or without having to navigate 
away from the website.

When initially implementing the `Fetch API Data` function, it was given two optional parameters for a `callback` and a `string`. The `callback` was for execution when the data had been fetched, and the `string` was to instruct the 
function which of the two Datasets to refresh. This could allow a *Refresh* to be performed based on what Feature the user was currently engaged with when the request was made.

`$(document).ready(fetchApiData(generateHTML, "all")`

Due to time restraints, it was decided to refactor this function and remove the optional parameters, instructing the `Fetch API Data` function instead to be called a single time on page load. 
Additionally, once the design choices had been finalised, difficulties were faced placing an additional interactive element, which would allow a user to request the data, without obfuscated the rest of the user interface and experience.

As the concept for this feature had previously been developed, with more time I would have considered how to incorporate this function and how to implement it into the user experience.

### Map Auto-Zoom for Mobile View

Currently, on mobile devices, when the Map is initially generated it is located at the top of its hosting container, leaving a blank space underneath until the user zooms in. Whilst this is the default functionality 
when over-riding the Mapael container's default width and height, in order to provide a more personal and interactive user experience I would consider adding an Auto Zoom into the user's current location on first load of the Map.

### Implement a User-Friendly *Clear* Option on the Compare Feature

On the Compare Feature, when a user selects a country from the Selector, the current functionality allows the user to *Clear* the respective column data by either selecting the Selector's default value (*Select a Country*), 
or by interacting with the Compare tab of the Toggler to reset the whole section.

Consideration was given as to how to implement a `Clear` button or interface, to allow a user to simply reset the specified column data without having to perform such arbitrary tasks to do so.

One implementation for this was tested using `X` symbols next to each of the Selectors, however upon testing this in mobile view it was clear that it provided a sub-optimal user experience; 
both due to the crammed nature of the aesthetic, and due to the small size of the interactable icon.

![Example of Table with X's](https://res.cloudinary.com/bak2k3/image/upload/v1612028666/covid-dashboard/X-tags_on_table_example_wzqtet.jpg)

Whilst this concept has since been removed, one solution to this would be to add an additional row underneath the Selectors with respective `Clear` buttons.

### Ability to Add Multiple Countries to the Visualise Feature

To aid the understanding and comparative nature of the data presented within the Visualise Feature, it is entirely possible to add additional datasets from other countries to the graph. 
Consideration must be given as to whether or not to allow all three sets of statistics per country, but this addition would complement the user's goal to both have more control over the data, and choose how the data is presented to them.

### Add a Full Country Data Table

Similar to one of the websites discussed in the **Competitor Review**, a table could be implemented in the project which provides a list of all countries, allowing the user to dynamically control which data is be added to the table, 
and the ability to filter and sort the data on the table.

### Backup Data

Given the project relies solely on a single API, a future feature implementation could see the storage of a local backup of the required datasets. 
This would allow users to continue to interact with the site as intended, in the event the API goes down or the request fails. In its current state, 
the website presents the user with an error message when the API fails to load, and functionality is disabled.

---

# Technologies Used

* The project was written in HTML  CSS, and JavaScript.
* The project was written and tested in the [Gitpod](https://gitpod.io/) IDE.
* The project was debugged using [Google Chrome](https://www.google.com/intl/en_uk/chrome/) [Dev Tools](https://developers.google.com/web/tools/chrome-devtools).
* The project uses [GitHub](https://GitHub.com/) for hosting source code, for utilising git version control, and for hosting the site on GitHub pages.  
* The project's template was generated from [Code Institute's Gitpod Template](https://GitHub.com/Code-Institute-Org/gitpod-full-template).
* The project uses [Boostrap](https://getbootstrap.com/) 5.0.0-Beta 1, a 'Mobile First' HTML/CSS Framework for simple and intuitive responsive web design.
* The project uses [Popper.js](https://popper.js.org/) v2.5.4 (bundled with Bootstrap), a Tooltip and Popover Positioning Engine, for Tooltips.
* The project uses [jQuery](https://jQuery.com/) v3.5.1, a JavaScript library, for DOM Traversal, HTML Maniuplation, and Event Handling.
* The project uses [jQuery Mousewheel](https://github.com/jQuery/jQuery-mousewheel), a cross-browser mouse-wheel support library, which the Map Feature utilises.
* The project uses [jsDelivr](https://www.jsdelivr.com/), [Cloudflare](https://www.cloudflare.com/en-gb/), [PageCDN](https://pagecdn.com/) as various Content Delivery Networks for packages and libraries.
* The project uses [FontAwesome](https://fontawesome.com/) v5.15.1, a free icon-set/toolkit for web development.
* The project uses [Chart.js](https://www.chartjs.org/) for the Time Series Line Chart implementation.
* The project uses [Raphael](http://dmitrybaranovskiy.github.io/raphael/), a Javascript Vector Library, and [Mapael](https://www.vincentbroute.fr/mapael/) a jQuery and Rapahel Extension, for the Interactive Choropleth Map.
* The project uses [disease.sh](https://disease.sh/), an Open Source Disease Data Repository, for obtaining up to date COVID-19 Statistics.
* The project uses [Google Fonts](https://fonts.google.com/) for typography.
* The project's images were compressed via [tinyjpg](https://tinyjpg.com/) to be appropriately sized for web content.
* The project utlised [favicon.io](https://favicon.io/favicon-converter/) to convert the Favicon to the appropriate format.
* The project's accessibility was assesed via WebAim's [W.A.V.E](https://wave.webaim.org/) and [Contrast Checker](https://webaim.org/resources/contrastchecker/) and Google Chrome's [Lighthouse](https://developers.google.com/web/tools/lighthouse).
* The project's screen-reader accessibility was tested using [Screen Reader for Google Chrome](https://chrome.google.com/webstore/detail/screen-reader-for-google/nddfhonnmhcldcbmhbdldfpkbfpgjoeh/related?hl=en).
* The project used Toptal's [Colorfilter](https://www.toptal.com/designers/colorfilter/) to assess how colour-blind-friendly the site was.
* The project's cross-browser compatibility was enhanced using [Autoprefixer.io](https://autoprefixer.GitHub.io).
* The project's HTML was validated using [W3C HTML Markup Validator](https://validator.w3.org/).
* The project's CSS was validated using [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/).
* The project's JS was validated using [JSHint](https://jshint.com/).
* The project's wireframes were designed in [Balsamiq](https://balsamiq.com/wireframes/).
* The project's background was designed using [GIMP](https://www.gimp.org/).
* The images used in the project's README and TESTING documentation were hosted and served through [Cloudinary](https://cloudinary.com/console).
* This project uses [Jasmine](https://jasmine.github.io/) for unit testing.
* This project utilised [metatags.io](https://metatags.io/) for generating Social Media previews.

---

# Testing

Testing documentation, processes, and outcomes can be found under [TESTING.md](TESTING.md).

---

# Deployment

This project has a `dev` (Development) and `master` (Deployed) branch. All development was completed on the `dev` branch, and merged with the `master` branch when new functionality had been implemented and tested. 
The live site is deployed from the `master` branch.

## How this Project was Deployed

This project was deployed to GitHub pages via the following steps:

1. Log into [GitHub](https://GitHub.com/).
2. From the list of Repositories, select [covid-dashboard](https://github.com/BAK2K3/covid-dashboard/).
3. From the Repository's sub-headings, select "Settings".
4. Under "Options", the first category of settings, scroll down to the GitHub Pages section.
5. From the dropdown list under the "Source" heading, select "master".
6. A second drop-down menu that appears should remain as the default value, `/root`.
7. Press Save. 
8. On Page refresh, scroll back down to the GitHub Pages section, and the link to the deployed site will be available in a green sub-section with a tick icon next to it.

## How to Run this Project in your Browser

1. Install the [Google Chrome](https://www.google.co.uk/chrome/) or [Firefox](https://www.mozilla.org/en-GB/exp/firefox/new/) browser.
2. Install the applicable [GitPod](https://www.gitpod.io/docs/browser-extension/) Browser Extensions for your chosen browser.
4. Create a [GitHub](https://GitHub.com/join) account. 
3. Log in to [Gitpod](https://gitpod.io/login/) using your GitHub account.
4. Visit COVID Dashboard's [GitHub Repository](https://github.com/BAK2K3/covid-dashboard/).
5. To run the master branch, ensure the master branch is selected next to the "branches" and "tags" subheadings. To run the dev branch, please select dev branch. 
    * Please note that any features that exist purely in the dev branch are in testing and may not be fully functional. 
6. Open the repository in Gitpod:
    * Click the green "Gitpod" icon at the top of the Repository, or
    * Open the [master branch](https://gitpod.io/#https://github.com/BAK2K3/covid-dashboard/tree/master) or [dev branch](https://gitpod.io/#https://github.com/BAK2K3/covid-dashboard/tree/dev) directly in Gitpod via these links.
7. A new workspace will open with the current state of the requested branch. Any changes made to the requested branch after this point will not be automatically updated in your Gitpod Workspace.

## How to Run this Project Locally

### Cloning the Repository

1. Visit COVID Dashboard's [GitHub Repository](https://github.com/BAK2K3/covid-dashboard/).
2. Click the "Code" dropdown box above the repository's file explorer. 
3. Under the "Clone" heading, click the "HTTPS" sub-heading.
4. Click the clipboard icon, or manually copy the text presented: `https://github.com/BAK2K3/covid-dashboard.git`
5. Open your preferred IDE (VSCode, Atom, PyCharm, etc).
6. Ensure your IDE has support for Git, or has the relevant Git extension.
7. Open the terminal, and create a directory where you would like the Repository to be stored.
8. Type `git clone` and paste the previously copied text (`https://github.com/BAK2K3/covid-dashboard.git`) and press enter.
    * If you would like to clone only the dev branch, please type `git clone -b dev` before the previously copied link to the repository.
9. The Repository will then be cloned to your selected directory. 

### Manually Downloading the Repository

1. Visit COVID Dashboard's [GitHub Repository](https://github.com/BAK2K3/covid-dashboard/).
    * Ensure you have selected the appropriate branch, as previously discussed.
2. Click the "Code" dropdown box above the repository's file explorer. 
3. Click the "Download ZIP" option; this will download a copy of the selected branch's repository as a zip file.
4. Locate the ZIP file downloaded to your computer, and extract the ZIP to a designated folder which you would like the repository to be stored.

### Opening the Repository 

1. Open your preferred IDE (VSCode, Atom, PyCharm, etc).
2. Navigate to the chosen directory where the Repository was Cloned/Extracted.
3. You will now have offline access to the contents of the project.
    * **Note**: Due to the nature of the project, internet access is required to obtain full functionality of the website.

---

# Credits

## Content

* All instructional text used throughout the site was written by me.
* The data used for the Map, Visualise, and Map Features was obtained from [disease.sh](https://disease.sh/). Specifically:
    * The data used for the `Global Compare Dataset` (Compare and Map Features) is from the [Worldometers](https://www.worldometers.info/coronavirus/) dataset.
    * The data used for the `Global Visual Dataset` (Visualise Feature) is from the [John Hopkins](https://coronavirus.jhu.edu/) dataset.

## Media

* I designed the background graphic in [GIMP](https://www.gimp.org/) myself.
* I designed the Favicon icon in [GIMP](https://www.gimp.org/) myself, and converted it to appropriate format using [favicon.io](https://favicon.io/).

## Code

* HTML/CSS: Implementation and utilisation of Flexbox was assisted by [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
* HTML/CSS: The concept, model and structure for Modals were inspired by my previous project, [Hard Drivers](https://github.com/BAK2K3/hard-drivers/blob/master/about.html). 
* HTML/CSS: Guidance on Bootstrap, Tooltips, Modals and general Bootstrap integration and usage was obtained from the [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/).  
* HTML/CSS: Guidance on general HTML/CSS usage was obtained from [Mozilla's Web Documentation](https://developer.mozilla.org/en-US/docs/Web/Reference).
* CSS: Code snippet taken from [CSS-Tricks](https://css-tricks.com/the-current-state-of-styling-selects-in-2019/) and modified to style Selector elements.
* CSS: Code snippet taken from [Hover.css](https://ianlunn.GitHub.io/Hover/) and modified for Fill Effect on the COVID Toggler.
* CSS: Code snippet taken from [loading.io](https://loading.io/css/) and modified for the Beating Heart loading icon.
* CSS: Code snippets taken from CSS-Tricks pages on [Neumorphism](https://css-tricks.com/neumorphism-and-css/) and [Box Shadow](https://css-tricks.com/snippets/css/css-box-shadow/) and modified to achieve the desired elevated effect on certain HTML elements.  
* JavaScript: The disease.sh [documentation](https://disease.sh/docs/#/COVID-19%3A%20JHUCSSE/get_v3_covid_19_historical__countries_) was used extensively to understand the correct formatting for API requests.
* JavaScript: The Chart.js [documentation](https://www.chartjs.org/docs/latest/) was used extensively to understand the installation, configuration, and data structures required for fully interactive dynamic graphs.
* JavaScript: The Mapael [documentation](https://www.vincentbroute.fr/mapael/) was used extensively to understand the installation, configuration, and data structures required for fully interactive dynamic maps.
* JavaScript: The Mapael [World Countries](https://github.com/neveldo/mapael-maps/blob/master/world/world_countries.js) JavaScript file was taken directly from the developer's GitHub repo of pre-made maps. 
* JavaScript: Inspiration was taken from [StackOverflow](https://stackoverflow.com/questions/57445562/chart-js-timeseries-chart-formatting-and-missing-data-values) when creating a function to dynamically structure Time Series data. 
* JavaScript: Guidance on converting JSON date strings to Date() objects was obtained from [David Sekar](https://davidsekar.com/javascript/converting-json-date-string-date-to-date-object).
* JavaScript: Inspiration was taken from the example Chart.js graphs demonstrated on [Tobia Sahlin's blog](https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/).
* JavaScript: Solutions were explored from these two StackOverflow posts ([one](https://stackoverflow.com/questions/24815851/how-to-clear-a-chart-from-a-canvas-so-that-hover-events-cannot-be-triggered), 
[two](https://stackoverflow.com/questions/40056555/destroy-chart-js-bar-graph-to-redraw-other-graph-in-same-canvas)) as to how to resolve graphs stacking on re-draw. 
* JavaScript: Inspiration was taken [Mastering JS](https://masteringjs.io/tutorials/fundamentals/foreach) as to how to best utilise the ForEach function for iterating through an array.
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/1484506/random-color-generator) for dynamically generation hex colours for when initially testing the Visualise Feature.  
* JavaScript: Code snippet taken from [GitHub Gist](https://gist.github.com/maephisto/9228207) for a Country Name to ISO Code dictionary, and amended to reflect required explicit country names (as per datasets).
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/11258077/how-to-find-index-of-an-object-by-key-and-value-in-an-javascript-array) for finding the index of an object in a key value pair.
* JavaScript: Inspiration taken from [StackOverflow](https://stackoverflow.com/questions/6792663/javascript-style-for-optional-callbacks) for implementing functions with optional callbacks. 
    * **Note**: This was originally implemented in the Fetch API Data function, but subsequently removed when refactoring the code to remove this aspect of the functionality. 
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/6792663/javascript-style-for-optional-callbacks) for targetting multiple elements for a single event in jQuery.
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript) and modified to appropriately convert numbers to their relative locale strings.
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/8043026/how-to-format-numbers-by-prepending-0-to-single-digit-numbers) to achieve a two digit representation of single digit minutes using splicing (i.e 10:1am -> 10:01am).
* CSS/HTML/JavaScript: Multiple code snippets taken from [StackOverflow](https://stackoverflow.com/questions/38874529/chart-js-adjust-height-in-mobile-view) and modified to allow for dynamic resizing of Chart.js graphs.

---

# Acknowledgements

* The concept for this project was devised from my love for all things data related; the ultimate goal was to produce an website that I would want to use myself.
* Thank you to my wife, for her relentless patience and support.
* Thank you to my mentor, Dick Vlaanderen, for his encouragement and guidance.   
* Thank you to Jim Morel, the current Slack Channel Lead for the User Centric Frontend Development, and Bim Williams, a CI Alumni, for the time they've taken throughout the development process to discuss and brainstorm with me.
* Thank you to Daisy McGirr for the time she took to discuss the practical application of unit testing with me.
* Thank you to the active Slack users who take part in the regular group calls. 

---

# Disclaimer

This website is for educational purposes only.

---