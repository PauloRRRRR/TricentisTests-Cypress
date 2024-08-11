class ProductDataPage {
    fillStartDate(startDate) {
        cy.get("#startdate").type(startDate);
    }

    selectInsuranceSum(sum) {
        cy.get("#insurancesum").select(sum);
    }

    selectMeritRating(rating) {
        cy.get("#meritrating").select(rating);
    }

    selectDamageInsurance(insuranceType) {
        cy.get("#damageinsurance").select(insuranceType);
    }

    selectOptionalProducts(products) {
        products.forEach(product => {
            cy.get(`#${product}`).check({ force: true });
        });
    }

    selectCourtesyCar(option) {
        cy.get("#courtesycar").select(option);
    }

    goToNextSection() {
        cy.get("#nextselectpriceoption").click();
    }
}

export default ProductDataPage;
