let favoriteCityId = 'rome'
console.log(favoriteCityId)
favoriteCityId='paris'
console.log(favoriteCityId)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]

console.log(citiesId)

//citiesId = []  //TypeError: Assignment to constant variable.

citiesId.push("tokyo")

console.log(citiesId)
function getWeather(cityId){
	let city = cityId.toUpperCase();
	let temperature = 20
	return {city,temperature}
}
const weather = getWeather
console.log(weather(favoriteCityId))

 const {city, temperature} = weather(favoriteCityId);

console.log(city)
console.log(temperature)

const [parisId,nycId, ...othersCitiesId] = citiesId;
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

/* ------------------------------------- Classe -------------------------- */
class Trip{

	constructor(id,name,imageUrl){
		this.id = id;
		this.name = name
		this.imageUrl = imageUrl
	}
	toString(){
		return [this.id,this.name,this.imageUrl,this._price]
	}

	get price(){
		return this._price;
	}
	set price(newPrice){
		this._price = newPrice;
	}
	getDefaultTrip(){
		return new Trip('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg')
	}
}

let parisTrip = new Trip('paris','Paris','img/paris.jpg')
console.log(parisTrip)
console.log(parisTrip.name)

console.log(parisTrip.toString())

parisTrip.price = 100

console.log(parisTrip.toString())

let defaultTrip = new Trip().getDefaultTrip();

console.log(defaultTrip.toString());

class FreeTrip extends Trip{
	constructor(id,name,imageUrl){
		super(id,name,imageUrl)
		this._price = 0
	}
	toString(){
		return "FreeTrip "+super.toString();
	}
}
const freeTrip = new FreeTrip('nantes','Nantes','img/nanges.jpg');
console.log(freeTrip.toString())

class TripService{
	constructor(){
		this.trips = new Set()
		this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
		this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'))
		this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
	}
	findByName(tripName){
		return new Promise((resolve,reject) => {
			if(tripName){
				return trips
			}else{
				reject("Erreur name")
			}
		})
	}
}
class PriceService {
	constructor() {
	// TODO Map of 2 trips
	// 'paris' --> price = 100
	// 'rio-de-janeiro' --> price = 800)
	// no price for 'nantes'
	}
	findPriceByTripId(tripId) {
	// TODO return promise
	}
}