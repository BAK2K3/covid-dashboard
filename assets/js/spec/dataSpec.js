// Set timer to allow for page to load.

beforeAll(function (done) {
    setTimeout(done, 3000);
});

// Unit Testing for HTML Generation
describe("HTML Generation", function () {

    // Compare Feature
    describe("Compare Feature", function () {

        describe("Both Compare Selectors should contain all countries in 'Global Compare Dataset'", function () {

            it("First entry should be 'Select a Country'", function () {
                expect($("#firstCountrySelect")[0][0].innerHTML).toEqual("Select a Country");
                expect($("#secondCountrySelect")[0][0].innerHTML).toEqual("Select a Country");
            });

            it("All countries in the 'Global Compare Dataset' are present in both Selectors", function () {
                globalCompareDataset.forEach(function (objectItem, index) {
                    expect($("#firstCountrySelect")[0][index + 1].innerHTML).toEqual(objectItem.country);
                    expect($("#secondCountrySelect")[0][index + 1].innerHTML).toEqual(objectItem.country);
                });
            });
        });
    });

    // Visualise Feature
    describe("Visualise Feature", function () {

        describe("Visualise Selector should contain all countries in the 'condensedCountryList' object", function () {

            it("First entry should be 'Select a Country'", function () {
                expect($("#countrySelectVisualise")[0][0].innerHTML).toEqual("Select a Country");
            });

            it("All countries in the 'condensedCountryList' are present in the Selector", function () {

                condensedCountryList.forEach(function (objectItem, index) {
                    expect($("#countrySelectVisualise")[0][index + 1].innerHTML).toEqual(objectItem);
                });
            });
        });
    });

    // Map Feature
    describe("Map Feature", function () {

        describe("Map Selector should contain all relevant statistics in the 'Global Compare Dataset'", function () {

            it("First entry should be Select a Statistic", function () {
                expect($("#statisticSelectMap")[0][0].innerHTML).toEqual("Select a Statistic");
            });

            it("All relevant statistics are present in the Selector", function () {
                let index = 1;
                Object.keys(globalCompareDataset[0]).forEach(function (objectItem) {
                    if (statisticDictionary[objectItem] !== null && statisticDictionary[objectItem] !== "Time of Update" && statisticDictionary[objectItem] !== "Name of Country") {
                        expect($("#statisticSelectMap")[0][index].innerHTML).toEqual(statisticDictionary[objectItem]);
                        index += 1;
                    }
                });
            });
        });
    });
});