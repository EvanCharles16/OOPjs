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


// class extends #1
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

// class extends #2
class Location extends Cafe {
    constructor(obj = {}) {
        super(obj);
        this.long = obj.long,
        this.lat = obj.lat
    }
}

const locationMap = new Location ({
    bean : ['Gayo red honey', 'Sidikalang', {robusta : 'Kapal Tanker', sachet : 'Kapal Tanker'}],
    method : 'Manual Brewing',
    category : 'Arabica',
    name : 'Sevendays',
    long : '-314324314',
    lat : '111342454'
})

console.log(locationMap);