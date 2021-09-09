/* 
    The solution is to create so-called 'Strategies'.
    Each strategy represents some inner logic that will be called within the
    main class. Main class is now called 'Context', because all it does is
    calls the wanted 'Strategy' passing the context object (which is 'withTaxes' in this example).

    Strategies can be located in different files, which makes it easier to read and modify.
*/

// Strategy
class KirillsPaycheckCalculator {
    calculate(withTaxes = false) {
        const someImportantVariable = 12;
        const reallyImportantstuffToo = 'sandwiches <3'
        console.log('calculating some paycheck', reallyImportantstuffToo);
        
        const paycheck = 10e2 * 12 / 0.14 + (withTaxes ? someImportantVariable : 0);

        return paycheck;
    }
}

// Strategy
class AlexsPaycheckCalculator {
    calculate(withTaxes = false) {
        const anyNameReally = 'What should I do here?';
        const paycheck = 10e5 * 14 / 0.14 + (withTaxes ? 12 : 0);
        console.log('calculating some paycheck');

        return paycheck;
    }
}

// Strategy
class WitosPaycheckCalculator {
    calculate(withTaxes = false) {
        const whatIsThis = " I don't know";
        const whyAreYouDoingThis = "The key is to demonstrate a lot of methods that do some logic";

        const paycheck = 5;

        return paycheck;
    }
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

        this._calculator.calculate(withTaxes);
    }
}

const accountingDep = new AccountingDepartment();
accountingDep.setCalculator(new AlexsPaycheckCalculator());
accountingDep.makePayment(true);
accountingDep.setCalculator(new WitosPaycheckCalculator());
accountingDep.makePayment(true);
