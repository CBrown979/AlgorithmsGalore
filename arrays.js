//Array v Objects -- done in node
> var array = [3, 5, 7];
undefined
> console.log(array);
[ 3, 5, 7 ]
undefined
> var tofu = ["soy", "chick-pea"];
undefined
> tofu
[ 'soy', 'chick-pea' ]
> var alphab = ["a", "b", "c", "d", "e"];
undefined
> alphab.push("f");
6
> alphab
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
> alphab[3]
'd'
> var car = ["Mercedes", "G5", "Jet Black", "2018"]
undefined
> var mercedes = {
... node
... 
> var mercedes = {model: "G5", color: "Jet Black", year: 2018"};
var mercedes = {model: "G5", color: "Jet Black", year: 2018"};
                                                           ^^^
SyntaxError: Invalid or unexpected token

> var mercedes = {model: "G5", color: "Jet Black", year: 2018};
undefined
> mercedes
{ model: 'G5', color: 'Jet Black', year: 2018 }
> car
[ 'Mercedes', 'G5', 'Jet Black', '2018' ]
> mercedes.year
2018
> mercedes.year = "2016"
'2016'
> mercedes
{ model: 'G5', color: 'Jet Black', year: '2016' }
> car.length
4
> var hotel = {name: 'Quay', rooms: 40, booked: 25, gym: true, roomTypes:['twin', 'double', 'suite']
... hotel
hotel
^^^^^

SyntaxError: Unexpected identifier

> var hotel = {
... name: 'Quay', 
... rooms: 40,
... booked: 25,
... gym: true
... ,
... roomTypes: ['twin', 'double', 'suite']}
undefined
> var bookedRooms = 5;
undefined
> var availableRoom = hotel.rooms - hotel.booked
undefined
> availableRoom
15
> hotel
{ name: 'Quay',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: [ 'twin', 'double', 'suite' ] }
> hotel.push(roomservice:"true");
... 
> hotel.roomService = "True";
'True'
> hotel
{ name: 'Quay',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: [ 'twin', 'double', 'suite' ],
  roomService: 'True' }
> hotel.checkAvailability = function(){
... return this.rooms - this.booked;
... }
[Function]
> hotel
{ name: 'Quay',
  rooms: 40,
  booked: 25,
  gym: true,
  roomTypes: [ 'twin', 'double', 'suite' ],
  roomService: 'True',
  checkAvailability: [Function] }
> hotel.checkAvailability
[Function]
> hotel.checkAvailability();
15
> var enterpriseRental = {
... carTypes: ['coupe', 'sedan', 'sports-car', 'SUV'],
... carColor: ['black', 'red', 'blue', 'silver'],
... totalCars: 50,
... weekendAvail: 'True',
... rented: 32,
... checkAvailability: function(){
..... return this.totalCars - this.rented;
..... }
... };
undefined
18
> enterpriseRental.carColor.length
4