import BasePage from "./Base.page";

class SelectablePage extends BasePage{

    static get url(){
        return "/selectable";
    }

    static get gridButton(){
        return cy.get("#demo-tab-grid");
    }

    static get numberButtons(){
        return cy.get(".list-group-item");
    }

    static get numberTwoButton(){
        return this.numberButtons.contains("Two");
    }

    static get numberFourButton(){
        return this.numberButtons.contains("Four");
    }

    static get numberSixButton(){
        return this.numberButtons.contains("Six");
    }

    static get numberEightButton(){
        return this.numberButtons.contains("Eight");
    }

    static get numberOneButton(){
        return this.numberButtons.contains("One");
    }

    static get numberThreeButton(){
        return this.numberButtons.contains("Three");
    }

    static get numberFiveButton(){
        return this.numberButtons.contains("Five");
    }

    static get numberSevenButton(){
        return this.numberButtons.contains("Seven");
    }

    static get numberNineButton(){
        return this.numberButtons.contains("Nine");
    }
}

export default SelectablePage;