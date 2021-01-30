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

“Sometimes it’s hard to gauge the scale or relevance of the figures being provided.”

“I usually just get told a single daily figure, and I wish I could compare these figures with other countries.”

“I usually only hear about the countries that are suffering the most.”

“I want to have some degree of control over how the data is presented to me”.

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

The Worldometers Coronavirus Worldwide Graphs are interactive, and clearly represent the data. 
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
- To create an “all in one” solution to providing statistics surrounding the COVID-19 Pandemic. 
- Give users a reason to use this site, over multiple other individual sites. 
- Engage the user.
- Allow the user to navigate and control the application with ease. 

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
- Implement various methods of data visualisation
  - **Compare** (To compare 2 countries' full data side by side via table)
  - **Visualise** (To see time-series data for a single country via graph)
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

- Obtain time-series COVID-19 data for as many countries as possible.
- Obtain more than one statistic per country, where possible.
- Ideally, the data should be:
  - updated regularly.
  - consistent in content across the countries.
- This data can be utilised for time-series visualisation (via graph).

## Structure

### Information Architecture

The website uses a single page, with the content being constructed/deconstructed via JavaScript as the user navigates through the website.

- Consideration was given to having a separate HTML file for each data visualisation. While this would reduce the dependency on JavaScript for the sole purpose of navigation, 
and would reduce the possibility of running into basic navigational bugs, it was decided that this would be a good opportunity to demonstrate additional JavaScript capabilities. 
Furthermore, given the majority of the HTML is static, with only the content being dynamic, it seemed like the most appropriate solution.

#### Logo

The "Logo" (the page's primary heading) is presented centrally at the top of the page at all times. It is isolated in its own container for consistent visibility. 
It establishes the theme of the project, and is consistent with the rest of the website's design choices.

#### Splash Screen

A Splash Screen is presented to the user while the data initially loads; while this is present, only the "Logo" is visible.

#### Navigation Toggler

Once the data is loaded, a Navigation Toggler appears, with a Section Container attached underneath. All tabs are initially deselected, and the Section Container contains a website overview (Information Section).

Once the user selects a tab from the toggler, the Information Section is removed from view, and the relevant HTML is generated, hidden, and/or displayed for the requested visualisation section.

#### Section Container

The Section Container is attached to the Navigation Toggler, and dynamically presents the required Section; be it the project overview, visualisation specific instructions, or the visualisations themselves.

#### Information Section

The Information Section is essentially the *Landing Page*, providing a project overview and basic instructions.

#### Visualisation Section

When a user selects a visualisation method from the Toggler, the relevant How-To Content is presented. Upon engaging with the section (by either selecting a country or a statistic, where applicable), the appropriate Visualisation Content
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

On page load, all content but the Logo is hidden. While the logo is visible, you cannot interact with it until the data has loaded. This prevents un-interactable elements being present when the data is loading, 
and prevents the user interaction before the data is pre-processed.

#### Navigation Toggler

The Navigation Toggler is designed to aesthetically represent the section the user is currently engaged with. *Hover* effects are implemented to show potential navigation, and *Fill* effects are implemented to represent current engagement. 
This interaction is responsive, reflective of its intentions, and intends to provide a positive user experience.

#### Visualisation Sections

Each Visualisation Section contains (and retains) the relevant Selectors at the top of each container. Their default value is representative of their instructions (i.e "Select a Country" for the country Selector, and "Select a Statistic"
 for the statistic Selector).

Upon a user engaging with this selector, the How-To Content is removed, and the visualisation process immediately commences; be it via Table, Graph, or Map generation. This also applies to when the user changes the selector'ss value, 
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
This colour was ultimately implemented into the Logo, the Section Containers, and the Navigation Toggler. The shade of blue chosen also closely resembles the "water" shade of blue commonly used in map diagrams, 
which allowed the Map Feature to synergise with its hosting container.

#### White

An off shade of white (#EFF1F3) was initially chosen as the background colour, and as the background colour for interactive containers (such as selectors, unselected togglers for navigation, and modals). 
After preliminary user testing and feedback, the background colour of the project was changed substantially; this has been discussed in the "Visual Effects" section.

#### Black

In order to comply with WCAG 2.0, a Rich Black colour (#0E0F19) was chosen for primary text throughout the website. This resulted in a 7:1 ratio for Black on Blue, and a 16.84:1 ratio for Black on White.

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

The logo was initially designed in GIMP, and implemented into the project using CSS. Its intention is to be simplistic, relatable, yet identifiable through the use of underlining and isolated italics, combined with the chosen font.

### Visual Effects

#### Background Image

After preliminary user testing and feedback, it was concluded that a "plain white" background, against a primary blue coloured container, resulted in a particularly monotonous and dull user experience. 
As such, a graphic was designed using GIMP as the background for the website.

This background focuses on the primary blue colour chosen, with a circular gradient, progressively transitioning to the rich black colour chosen on the outer edges, producing a focusing effect on the centre of the page. 
In addition to this, the graphic was overlayed with a bump mapped mosaic, to create depth and texture to the overall aesthetic.

The mosaic design was chosen due its random yet cohesive nature; its symbolism resonates with the data of the project, given the interconnectivity of people, things, place and statistics that all appear unique in isolation, 
yet are influenced and derived from their surroundings.

#### Navigation Toggler

The Navigation toggler is the primary method of navigating throughout the site, and as such is implemented with a feedback based visual effect, designed to communicate interactivity without explicitly instructing the user to do so.

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

## Future Feature Considerations

---

# Technologies Used

* The project was written in HTML  CSS, and JavaScript.
* The project was written and tested in the [Gitpod](https://gitpod.io/) IDE.
* The project was debugged using [Google Chrome](https://www.google.com/intl/en_uk/chrome/) [Dev Tools](https://developers.google.com/web/tools/chrome-devtools).
* The project uses [GitHub](https://GitHub.com/) for hosting source code, for utilising git version control, and for hosting the site on GitHub pages.  
* The project's template was generated from [Code Institute's Gitpod Template](https://GitHub.com/Code-Institute-Org/gitpod-full-template).
* The project uses [Boostrap](https://getbootstrap.com/) 5.0.0-Beta 1, a 'Mobile First' HTML/CSS Framework for simple and intuitive responsive web design.
* The project uses [Popper.js](https://popper.js.org/) v2.5.4 (bundled with Bootstrap), a Tooltip and Popover Positioning Engine, for Tooltips.
* The project uses [jQuery](https://jquery.com/) v3.5.1, a JavaScript library, for DOM Traversal, HTML Maniuplation, and Event Handling.
* The project uses [jQuery Mousewheel](https://github.com/jquery/jquery-mousewheel), a cross-browser mouse-wheel support library, which the Map Feature utilises.
* The project uses [jsDelivr](https://www.jsdelivr.com/), [Cloudflare](https://www.cloudflare.com/en-gb/), [PageCDN](https://pagecdn.com/) as various Content Delivery Networks for packages and libraries.
* The project uses [FontAwesome](https://fontawesome.com/) v5.15.1, a free icon-set/toolkit for web development.
* The project uses [Chart.js](https://www.chartjs.org/) for the time-series Line Chart implementation.
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

This project has a dev (Development) and master (Live Code) branch. All development was completed on the dev branch, and merged with the Master Branch when new functionality had been implemented and tested. 
The live site is deployed from the master branch.

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
    * The data used for the Global Compare Dataset (Compare and Map Features) is from the [Worldometers](https://www.worldometers.info/coronavirus/) dataset.
    * The data used for the Global Visual Dataset (Visualise Feature) is from the [John Hopkins](https://coronavirus.jhu.edu/) dataset.

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
* JavaScript: Inspiration was taken from [StackOverflow](https://stackoverflow.com/questions/57445562/chart-js-timeseries-chart-formatting-and-missing-data-values) when creating a function to dynamically structure time series data. 
* JavaScript: Guidance on converting JSON date strings to Date() objects was obtained from [David Sekar](https://davidsekar.com/javascript/converting-json-date-string-date-to-date-object).
* JavaScript: Inspiration was taken from the example Chart.js graphs demonstrated on [Tobia Sahlin's blog](https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/).
* JavaScript: Solutions were explored from these two StackOverflow posts ([one](https://stackoverflow.com/questions/24815851/how-to-clear-a-chart-from-a-canvas-so-that-hover-events-cannot-be-triggered), 
[two](https://stackoverflow.com/questions/40056555/destroy-chart-js-bar-graph-to-redraw-other-graph-in-same-canvas)) as to how to resolve Graphs stacking on re-draw. 
* JavaScript: Inspiration was taken [Mastering JS](https://masteringjs.io/tutorials/fundamentals/foreach) as to how to best utilise the ForEach function for iterating through an array.
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/1484506/random-color-generator) for dynamically generation hex colours for when initially testing the Visualise Feature.  
* JavaScript: Code snippet taken from [GitHub Gist](https://gist.github.com/maephisto/9228207) for a Country Name to ISO Code dictionary, and amended to reflect required explicit country names (as per datasets).
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/11258077/how-to-find-index-of-an-object-by-key-and-value-in-an-javascript-array) for finding the index of an object in a key value pair.
* JavaScript: Inspiration taken from [StackOverflow](https://stackoverflow.com/questions/6792663/javascript-style-for-optional-callbacks) for implementing functions with optional callbacks. 
    * **Note**: This was originally implemented in the Fetch API Data function, but subsequently removed when refactoring the code to remove this aspect of the functionality. 
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/6792663/javascript-style-for-optional-callbacks) for targetting multiple elements for a single event in JQuery.
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript) and modified to appropriately convert numbers to their relative locale strings.
* JavaScript: Code snippet taken from [StackOverflow](https://stackoverflow.com/questions/8043026/how-to-format-numbers-by-prepending-0-to-single-digit-numbers) to achieve a two digit representation of single digit minutes using splicing (i.e 10:1am -> 10:01am).
* CSS/HTML/JavaScript: Multiple code snippets taken from [StackOverflow](https://stackoverflow.com/questions/38874529/chart-js-adjust-height-in-mobile-view) and modified to allow for dynamic resizing of Chart.js graphs.

---

# Acknowledgements

* The concept for this project was devised from my love for all things data related; the ultimate goal was to produce an application that I would want to use myself.
* Thank you to my wife, for her relentless patience and support.
* Thank you to my mentor, Dick Vlaanderen, for his encouragement and guidance.   
* Thank you to Jim Morel, the current Slack Channel Lead for the User Centric Frontend Development, and Bim Williams, a CI Alumni, for the time they've taken throughout the development process to discuss and brainstorm with me.
* Thank you to Daisy McGirr for the time she took to discuss the practical application of unit testing with me.
* Thank you to the active Slack users who take part in the regular group calls. 

---

# Disclaimer

This website is for educational purposes only.

---