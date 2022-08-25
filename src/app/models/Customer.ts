export class Customer {
    name: string;
    address: string;
    creditCard: string;
    totalPrice: number;

    constructor() {
        this.name = '';
        this.address = 'Enter your address';
        this.creditCard = '';
        this.totalPrice = 0;
    }
}