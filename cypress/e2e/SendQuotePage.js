class SendQuotePage {
    fillQuoteDetails(email, phone, username, password, comments) {
        cy.get("#email").type(email);
        cy.get("#phone").type(phone);
        cy.get("#username").type(username);
        cy.get("#password").type(password);
        cy.get("#confirmpassword").type(password);
        cy.get("#Comments").type(comments);
    }

    sendQuote() {
            cy.on('uncaught:exception', (err, runnable) => {
              expect(err.message).to.include('e is not defined')
              return false
            })
          
            cy.get("#sendemail").click().wait(10000)
            cy.get('button.confirm').should('be.visible').click();
    } 

    // Confirms the success of sending the email
    confirmEmailSuccess() {
        cy.wait(5000); // Delay added in order to wait for modal to appear
        
        cy.get('div.sweet-alert').should('be.visible'); 
        cy.get('button.confirm').should('be.visible').click({ force: true });
    }
}

export default SendQuotePage;
