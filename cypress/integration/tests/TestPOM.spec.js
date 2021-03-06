import RegistrationPage from '../pageObjects/RegistrationPage'

describe('POM Suite',function() {
    let regPage = new RegistrationPage();
    before(function () {
        cy.fixture('demoData').then(function(testData){
            this.testData = testData;
        })
        cy.visit('http://demo.automationtesting.in/Register.html')
    })

    it('Registration', function(){
        regPage.fillRegistrationForm(this.testData.firstName,this.testData.lastName);
        regPage.firstNameInput.type('updating')
        cy.reload();
        cy.wait(3000)
        cy.contains('WebTable').click();
        cy.go(-1)
        cy.go(1)
        cy.go('back')
        cy.go('forward')
        

    })

    it.only('a',()=>{
        cy.visit('http://the-internet.herokuapp.com/tables');
        
        let a = cy.get('table[id="table1"]>tbody>tr>td:nth-child(2)').then(el=>{
            let b = el.text()
            cy.log(b);
        })   
       
        cy.log(a);
    })
})