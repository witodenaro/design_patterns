/* 
    This design pattern IS BAD.
    It is all due to the ability to create anonymous functions (so-called 'Lambda's')

    With lambdas you don't need to create a lot of classes.
    You can just create a function that will be a strategy.
    But this design pattern only assumes that you use classes, so making 
    it lambda-functions is not a strategy pattern.
*/

// Strategy1.js
const calculateKirillsPaycheck = (withTaxes = false) => {
    const someImportantVariable = 12;
    const reallyImportantstuffToo = 'sandwiches <3'
    console.log('calculating some paycheck', reallyImportantstuffToo);
    
    const paycheck = 10e2 * 12 / 0.14 + (withTaxes ? someImportantVariable : 0);

    return paycheck;
}

// Strategy2.js
const calculateAlexsPaycheck = (withTaxes = false) => {
    const anyNameReally = 'What should I do here?';
    const paycheck = 10e5 * 14 / 0.14 + (withTaxes ? 12 : 0);
    console.log('calculating some paycheck');

    return paycheck;
}

// Strategy3.js
const calculateWitosPaycheck = (withTaxes = false) => {
    const whatIsThis = " I don't know";
    const whyAreYouDoingThis = "The key is to demonstrate a lot of methods that do some logic";

    const paycheck = 5;

    return paycheck;
}

// Context
class AccountingDepartment {
    constructor() {
        this._calculator = null;
    }

    setCalculator(calculator) {
        this._calculator = calculator;
    }

    makePayment(withTaxes) {
        if (!name) {
            throw new Error('You didn\'t specify the payment recipient');
        }

        if (!this._calculator) {
            throw new Error('You need to set the calculator first');
        }

        this._calculator(withTaxes);
    }
}

const accountingDep = new AccountingDepartment();
accountingDep.setCalculator(calculateWitosPaycheck);
accountingDep.makePayment(true);
accountingDep.setCalculator(calculateAlexsPaycheck);
accountingDep.makePayment(true);
