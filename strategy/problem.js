/* 
    We have a class that processes a lot of methods
    They, each representively, have some logic implemented inside
    
    This implementation leaves us with the large class file.
    If we want to expand the existing logic, we need to create a new method.
    It leads to a lot of merge conflicts, and it's hard to modify something specific.
    Furthermore, it results in difficult code-reading and problems with further development
*/

class AccountingDepartment {
    calculateKirillsPaycheck(withTaxes = false) {
        const someImportantVariable = 12;
        const reallyImportantstuffToo = 'sandwiches <3'
        console.log('calculating some paycheck', reallyImportantstuffToo);
        
        const paycheck = 10e2 * 12 / 0.14 + (withTaxes ? someImportantVariable : 0);

        return paycheck;
    }

    calculateAlexsPaycheck(withTaxes = false) {
        const anyNameReally = 'What should I do here?';
        const paycheck = 10e5 * 14 / 0.14 + (withTaxes ? 12 : 0);
        console.log('calculating some paycheck');

        return paycheck;
    }

    calculateWitosPaycheck(withTaxes = false) {
        const whatIsThis = " I don't know";
        const whyAreYouDoingThis = "The key is to demonstrate a lot of methods that do some logic";

        const paycheck = 5;

        return paycheck;
    }

    makePayment(name, withTaxes) {
        if (!name) {
            throw new Error('You didn\'t specify the payment recipient');
        }

        const methodName = `calculate${name}sPaycheck`;

        this[methodName](withTaxes);
    }
}

const accountingDep = new AccountingDepartment();
accountingDep.makePayment('Wito');
accountingDep.makePayment('Alex');


