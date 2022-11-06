describe("this is task1", ()=>{

   
it("typing values to form",()=>{
    cy.visit("https://fs2.formsite.com/meherpavan/form2/index.html?1537702596407")
    cy.get("#RESULT_TextField-1").type('Krishna')
    cy.get("#RESULT_TextField-2").type('deo')
    cy.get("#RESULT_TextField-3").type('6785647386')
    cy.get("#RESULT_TextField-4").type('India')
    cy.get("#RESULT_TextField-5").type('Prayagraj')
    cy.get("#RESULT_TextField-6").type('abc@gmail.com')
    //cy.get('input[ type="radio"]').check('Radio-0', {force:true}) //in get pass input type and in check pass the value
   
    //cy.get('label[for="RESULT_RadioButton-7_0"]').click()
   cy.get('input[type = "radio"]').check({force:true})

   // assertion for checking
   cy.get('input[type = "checkbox"]').check({force: true}).parent().should('have.class', 'highlight')

   // assertion for unchecking
    cy.get('[type = "checkbox"]').uncheck({force: true}).parent()
    .should('not.be.checked') // here we'll not use (not.have.class) for assertion, 

   //cy.get('input[type = "checkbox"]').check('CheckBox-2',{force: true})
   cy.get('select.drop_down').select('Afternoon')
   cy.get('#RESULT_FileUpload-10').selectFile('cypress/fixtures/reena yadav age proof.pdf')
   
   cy.SUBMIT()// Called a custom command

   
   cy.url().should('include','/res/submit')

   cy.title().should('eq','Error')


   cy
   .get('div#content')
   .should('contain','The result storage capacity has been reached for this form. Your result was not created. Please contact the form owner.')
    //have.text me exact text hona chahiye
})

})


//     cy.get("button#addTeamMember.cbrex-primary-btn.cbrex-btn-large.ripple-effect").click()
//     cy.get("input#personName").type("Rumila Mishra")
//     cy.get("input#businessEmail").type("rumi@cbrextest.com")
//     cy.get("input#mobileNumber").type("2375649376")
//     cy.get('.modal-footer')
//    .contains('Add Member')
//    .click()
//     //cy.get("button.ripple-effect.btn").contains("Add Member").click()
    //cy.get('[onclick="searchMember(24562,'dheeraj@cbr.exchange');"]').click()
    //cy.reload()