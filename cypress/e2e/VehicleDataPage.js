class VehicleDataPage {
    visit() {
        cy.visit('https://sampleapp.tricentis.com/101/app.php');
    }

    selectMake(make) {
        cy.get("#make").select(make);
    }

    selectModel(model) {
        cy.get("#model").select(model);
    }

    fillEngineDetails(cylinderCapacity, enginePerformance) {
        cy.get("#cylindercapacity").type(cylinderCapacity);
        cy.get("#engineperformance").type(enginePerformance);
    }

    selectManufactureDate() {
        // Open the calendar and select the first Saturday of the previous month
        cy.get("#opendateofmanufacturecalender").click();
        cy.get("a[title='Prev']").click();
        cy.get('tbody tr:nth-child(1) td:nth-child(6) a:nth-child(1)').click();
    }

    selectNumberOfSeats(numberOfSeats) {
        // Select the number of car seats
        cy.get("#numberofseats").select(numberOfSeats);
        // Select number of motorcycle seats (if available)
        cy.get("#numberofseatsmotorcycle").select(numberOfSeats);
    }

    chooseRightHandDrive(option) {
        cy.get(`input[name="Right Hand Drive"][value="${option}"]`).check({ force: true });
    }

    selectFuelType(fuelType) {
        cy.get("#fuel").select(fuelType);
    }

    fillPayloadDetails(payload, totalWeight) {
        cy.get("#payload").type(payload);
        cy.get("#totalweight").type(totalWeight);
    }

    fillPriceAndMileage(listPrice, annualMileage) {
        cy.get("#listprice").type(listPrice);
        cy.get("#annualmileage").type(annualMileage);
    }

    fillLicensePlate(licensePlate) {
        cy.get("#licenseplatenumber").type(licensePlate);
    }

    goToNextSection() {
        cy.get("#nextenterinsurantdata").click();
    }
}

export default VehicleDataPage;
