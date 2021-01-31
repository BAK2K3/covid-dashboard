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


# Browser Testing


# Code Validation


# Significant Bugs


# Other Technical Difficulties

---

[Click here](README.md) to return to the main README.md.