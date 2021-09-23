// Problem: We have an interface that operates only with specific type values
// But our application uses another type value.

// In this example, bank operates only with US Dollars
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

// The IT company counts it's employess salary in BYN
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

    const currencyRate = this.bank.getCurrentRate("BYN");

    this.employees.forEach((employee) => {
      // In any place where you use the interface with different type value,
      // you have to convert it before sending
      const usdSalary = employee.salary * currencyRate;
      this.bank.paySalary(employee.account, usdSalary);
    });
  }
}

const bank = new Bank();
const itCompany = new ITCompany();

itCompany.setBank(bank);
itCompany.paySalaries();
