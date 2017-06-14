
'use stict';

//global variables
//global variable store hours
var hours = ['am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm'];
//the master array. This is a global variable for an empty array that holds all five store objects
var samStore = [];
// declaring a variable called shopTable and rendering to the DOM using the id of shops and we'll be using this later which is why it needs to be global
var shopTable = document.getElementById ('shops');

//CONSTRUCTOR FUNCTION (that is technically an object) aka the maker of the stores (with properties)
function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  //properties that will become instances on the store objects to come
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  //arrays to hold our individual stores' data
  this.hourlyCust = [];
  this.hourlySales = [];
  this.totalSales = 0; //total daily sales per hour starts at 0 then counts up
  samStore.push(this); //pushing everthing into the samStore array
};

//methods
//method #1 getting an random number of people per hour. Defining the behaviors of our instances. The prototype is a property of the constructor. The objects that the constructor is making won't inherit these methods.
Store.prototype.calcCustomersPerHour = function() {
  for(var i = 0; i < hours.length; i++){
    var cust = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
    this.hourlyCust.push(cust);
  }

};

//method #2 calculating cookie sales per hour now that we've generated the random number of Cx per hour
Store.prototype.getCookiesSold = function () {
  this.calcCustomersPerHour(); //calling the method that calcs the random Cx/hour and now that we know it...we can work on this current method that uses it to calculate cookie sales
  for (var i = 0; i < hours.length; i++) {
    var cookies = Math.ceil(this.hourlyCust[i] * this.avgCookiesPerSale);
    this.hourlySales.push(cookies);
    this.totalSales += cookies; //+-hourlysales becuase we're adding the hourly sales to the total sales which starts at 0.
  }
  return this.hourlySales;
};

//the stores with variables? these are the instances.
var pike = new Store('Pike Place Market', 23, 65, 6.5);
var seaTac = new Store('SeaTac Aiport', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 3, 24, 1.2);

pike.getCookiesSold ();
seaTac.getCookiesSold ();
seaCenter.getCookiesSold ();
capHill.getCookiesSold ();
alki.getCookiesSold ();

//functions to create (or render) the table
Store.prototype.createHeaderRow = function () {
  var tableRow = document.createElement ('tr');
  var tableData = document.createElement ('td');
  var tableHeader = document.createElement ('th');
  tableHeader.textContent = this.location;
  tableRow.appendChild (tableHeader);
};
//or below is an option...?
//function createHeaderRow () {


}
Store.prototype.render = function () {
  var tableRow = document.createElement ('tr');
  var tableData = document.createElement ('td');
  tableData.textContent = ' !!!!! ';
  tableRow.appendChild (tableData);
  shopTable.appendChild (tableRow);
};

tdel.tetxcontent = this.ocation //this is waht's putting teh names of hte stores in teh header column

//rendering the data to teh dom in each cell
for (var i =0; i < this.cookiePErhour....)
tdel = document.createeleent ('td'
tdEl.textContent = this.cookie)
...

//appending to teh table
thetAble.appendChild (trEl)

//totals column

//function headerrow (){}
//function  table rows (){}
//function totals () {} //the totals on the far right should be a header

//function render table...
//make the header row ();
//make table rows
//make footer


//
// //START OF DAY 6
// var pikePlaceMkt = {
//   location: 'Pike Place Market',
//   minCustomersPerHour: 23,
//   maxCustomerPerHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random cx at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       //console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement ('li');
//       liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalDailySales;
//   }
//
// };
// pikePlaceMkt.calcCustomersPerHour();
// pikePlaceMkt.calcCookiesPerHour();
// pikePlaceMkt.render();
// //end of Pike Place
//
// //#2 start of seaTac
// var seaTac = {
//   location: 'SeaTac Airport',
//   minCustomersPerHour: 3,
//   maxCustomerPerHour: 24,
//   avgCookiesPerCustomer: 1.2,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random cx at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       //console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName2');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement ('li');
//       liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalDailySales;
//   }
//
// };
// seaTac.calcCustomersPerHour();
// seaTac.calcCookiesPerHour();
// seaTac.render();
// //end of seaTac
//
// //#3 start of Seattle Center
// var seaCenter = {
//   location: 'Seattle Center',
//   minCustomersPerHour: 11,
//   maxCustomerPerHour: 38,
//   avgCookiesPerCustomer: 3.7,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random cx at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       //console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName3');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement ('li');
//       liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalDailySales;
//   }
//
// };
// seaCenter.calcCustomersPerHour();
// seaCenter.calcCookiesPerHour();
// seaCenter.render();
// //end of Seattle Center
//
// //#4 start of Capitol Hill
// var capHill = {
//   location: 'Capitol Hill',
//   minCustomersPerHour:20,
//   maxCustomerPerHour: 38,
//   avgCookiesPerCustomer: 2.3,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random cx at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       //console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName4');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement ('li');
//       liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalDailySales;
//   }
//
// };
// capHill.calcCustomersPerHour();
// capHill.calcCookiesPerHour();
// capHill.render();
// //end of capHill
//
// //#5 start of Alki
// var alki = {
//   location: 'Alki',
//   minCustomersPerHour: 2,
//   maxCustomerPerHour: 16,
//   avgCookiesPerCustomer: 4.6,
//   totalDailySales: 0,
//   randomCustomersPerHour: [],//to store random cx at each hour
//   totalCookiesPerHour: [],
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hours.length; i++){
//       this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//       //console.log(this.randomCustomersPerHour[i]);
//     }
//   },
//   calcCookiesPerHour: function() {
//     this.calcCustomersPerHour();
//     for (var i = 0; i < hours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailySales += this.totalCookiesPerHour[i];
//       console.log(this.totalDailySales);
//     }
//   },
//   render: function (){
//     var ulEl = document.getElementById('locationName5');
//     ulEl.textContent = this.location;
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement ('li');
//       liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalDailySales;
//   }
//
// };
// alki.calcCustomersPerHour();
// alki.calcCookiesPerHour();
// alki.render();
// //end of Alki
