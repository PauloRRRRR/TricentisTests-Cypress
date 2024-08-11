class PriceOptionPage {
    selectPriceOption(option) {
        cy.get(`input[type="radio"][value="${option}"]`).check({ force: true });
    }

    goToNextSection() {
        cy.get("#nextsendquote").click();
    }
}

export default PriceOptionPage;
