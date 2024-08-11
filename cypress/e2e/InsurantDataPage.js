class InsurantDataPage {
    // Filling personal info
    fillPersonalInfo(firstName, lastName, birthDate, gender) {
        cy.get("#firstname").type(firstName);
        cy.get("#lastname").type(lastName);
        cy.get("#birthdate").type(birthDate);
        cy.get(`input[name="Gender"][value="${gender}"]`).click({ force: true });
    }

    // Filling address
    fillAddress(streetAddress, country, zipcode, city) {
        cy.get("#streetaddress").type(streetAddress);
        cy.get("#country").select(country);
        cy.get("#zipcode").type(zipcode);
        cy.get("#city").type(city);
    }

    // Select Occupation
    selectOccupation(occupation) {
        cy.get("#occupation").select(occupation);
    }

    // Select hobbies
    selectHobbies(hobbies) {
        hobbies.forEach(hobby => {
            // Clique diretamente no label associado ao checkbox
            cy.get(`label:contains(${hobby})`).click({ force: true });
        });
    }

    // Filling website
    fillWebsite(website) {
        cy.get("#website").type(website);
    }

    // Upload an image file
    uploadPicture(filePath) {
        cy.get('input#picturecontainer').selectFile(filePath, { force: true });
    }

    // Next section
    goToNextSection() {
        cy.get("#nextenterproductdata").click();
    }
}

export default InsurantDataPage;
