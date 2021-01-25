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
2. `“As an engaged user, I want to be given a choice of data visualisations, so that I can choose how the statistics are presented to me.”`
3. `“As an engaged user, I want to be able to interact with the visualisations, so that I get to control the data that I’m engaging with.”`
4. `“As a mobile user, I want to be able to utilise all aspects of the site, so that I can interact with the website on the go”.`

### Project Strategy Summary

**Ideal User**: Any individual interested in COVID-19 Statistics.

**Project Goal**: Provide a platform on which users are able to not only obtain up to date COVID-19 statistics, but to do so dynamically, 
presenting the information in a user friendly and understandable manner, whilst providing users control over how the data is presented.

**User Needs**: 
* To be able to navigate the site with ease.
* To be able to choose how the data is presented.
* To be able to control the data visualisations.
* To be able to understand the statistics.

**Project Objectives**: 
* To create an “all in one” solution to providing statistics surrounding the COVID-19 Pandemic. 
* Give users a reason to use this site, over multiple other individual sites. 
* Engage the user.
* Allow the user to navigate and control the application with ease. 


## Scope

## Structure

## Skeleton

## Surface

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

---

# Testing

Testing documentation, processes, and outcomes can be found under [TESTING.md](TESTING.md).

---

# Deployment

---

# Credits

## Content

## Media

## Code

---

# Acknowledgements

* The concept for this project was devised from my love for all things data related; the ultimate goal was to produce an application that I would want to use myself.
* Thank you to my wife, for her relentless patience and support.
* Thank you to my mentor, Dick Vlaanderen, for his encouragement and guidance.   
* Thank you to Jim Morel, the current Slack Channel Lead for the User Centric Frontend Development, and Bim Williams, a CI Alumni, for the time they've taken throughout the development process to discuss and brainstorm with me.
* Thank you to Daisy McGirr for the time she took to discuss the practical application of unit testing.
* Thank you to the active Slack users who take part in the regular group calls. 

---

# Disclaimer

This website is for educational purposes only.

---