// OOP
class Coffee {
    constructor(obj = {}) {
        this.bean = obj.bean,
        this.method = obj.method,
        this.category = obj.category
    }
}

const newCoffee = new Coffee({
    bean : 'Gayo red honey',
    method : 'Manual Brewing',
    category : 'Arabica'
})


// class extends 
class Cafe extends Coffee{
    constructor(obj = {}) {
        super(obj);
        this.name = obj.name
    }
}

const detailCafe = new Cafe({
    bean : ['Gayo red honey', 'Sidikalang', {robusta : 'Kapal Tanker', sachet : 'Kapal Tanker'}],
    method : 'Manual Brewing',
    category : 'Arabica',
    name : 'Sevendays'
})
console.log(detailCafe);