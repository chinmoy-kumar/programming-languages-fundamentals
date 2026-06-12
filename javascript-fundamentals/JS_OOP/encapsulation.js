class BankAccount
{
    // # symbol before a variable name indicates that it is a 'Private identifier'.
    #balance = 0; // cann't access this outside of this class because of #

    deposite(amount)
    {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance()
    {
        return `$${this.#balance}`;
    }
}

let user1 = new BankAccount();
user1.deposite(200);
let userBanlance = user1.getBalance();
console.log(userBanlance);




