import SelectablePage from "../pageObjects/Selectable.page";

describe("DemoQA spec", () => {
  context("Selectable scenario", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it.only("testcase", () =>{
      SelectablePage.gridButton.click();
      SelectablePage.numberTwoButton.click();
      SelectablePage.numberFourButton.click();
      SelectablePage.numberSixButton.click();
      SelectablePage.numberEightButton.click();
      SelectablePage.numberTwoButton.should("have.class", "active");
      SelectablePage.numberFourButton.should("have.class", "active");
      SelectablePage.numberSixButton.should("have.class", "active");
      SelectablePage.numberEightButton.should("have.class", "active");
      SelectablePage.numberOneButton.should("not.have.class", "active");
      SelectablePage.numberThreeButton.should("not.have.class", "active");
      SelectablePage.numberFiveButton.should("not.have.class", "active");
      SelectablePage.numberSevenButton.should("not.have.class", "active");
      SelectablePage.numberNineButton.should("not.have.class", "active");
    });

  });
});