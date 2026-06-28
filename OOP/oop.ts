class BankAccount {
    // Private properties
    private name: string;
    private amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    // short 
    //   constructor(
    //     private name: string,
    //     private amount: number
    //   ) {}



    // Deposit money
    deposit(newAmount: number): string | void {
        if (newAmount <= 0) {
            return "Amount should be greater than 0";
        }

        this.amount += newAmount;
    }

    // Withdraw money
    withdraw(amount: number): string | void {
        if (amount > this.amount) {
            return "Insufficient balance";
        }

        this.amount -= amount;
    }

    // Get current balance
    currentAmount(): number {
        return this.amount;
    }
}

const accountHolder = new BankAccount("Faiz", 1000);

console.log(accountHolder.currentAmount()); // 1000

accountHolder.deposit(500);

console.log(accountHolder); // BankAccount { name: 'Faiz', amount: 1500 }

console.log(accountHolder.currentAmount()); // 1500



