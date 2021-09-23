// Solution: Create an Adapter that will wrap problematic interface
// and provide the ability to pass your type values to the interface

class Bank {
  usd = 91293213;
  accounts = {
    0: { usd: 0 },
    1: { usd: 0 },
  };

  transferMoney(bankAccount, amount) {
    this.usd -= amount;
    this.accounts[bankAccount] += amount;
  }

  paySalary(to, amount) {
    this.transferMoney(to, amount);
  }

  getCurrentRate(currency) {
    if (currency === "BYN") return 2.5;
  }
}

// Adapter solves the different type values issue
class BankAdapter {
  constructor(bank) {
    this.bank = bank;
  }

  paySalary(to, amount) {
    const currencyRate = this.bank.getCurrentRate('BYN');
    this.bank.paySalary(to, currencyRate * amount)
  }
}

class ITCompany {
  employees = [
    { account: 0, position: "Software Engineer", salary: 400 },
    { account: 1, position: "Project Manager", salary: 300 },
  ];
  bank = null;

  setBank(bank) {
    this.bank = bank;
  }

  paySalaries() {
    if (!this.bank) throw new Error("IT company has no bank");

    this.employees.forEach((employee) => {
      // Client doesn't care about the different type value anymore
      this.bank.paySalary(employee.account, employee.salary);
    });
  }
}

const bank = new Bank();
const bankAdapter = new BankAdapter(bank);
const itCompany = new ITCompany();

itCompany.setBank(bankAdapter);
itCompany.paySalaries();
