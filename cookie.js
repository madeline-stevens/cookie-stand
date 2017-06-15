
'use stict';

//global variables
//global variable store hours
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm','3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
//the master array. This is a global variable for an empty array that holds all five store objects
var samStore = [];
// declaring a variable called shopTable and rendering to the DOM using the id of shops and we'll be using this later which is why it needs to be global
var shopTable = document.getElementById('shops');

//sam added this
//var theForm...

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
  this.getCookiesSold ();
  this.render ();
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
};

//****************************************
//functions to create (or render) the table
//create the ???
Store.prototype.render = function() {
  var trEl = document.createElement ('tr');
  var tdEl = document.createElement ('td'); //these are the locations
  tdEl.textContent = this.location; //these are the locations
  trEl.appendChild (tdEl); //appending the data to the table row
  for (var i = 0; i < hours.length; i++) { //adding +1 so that it adds my last array in the last colomn
    var tdEl = document.createElement ('td');
    //give it content
    tdEl.textContent = this.hourlySales[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement ('td');
  tdEl.textContent = this.totalSales;
  console.log (this.totalSales);
  trEl.appendChild(tdEl);
  shopTable.appendChild(trEl);
};

//create header row
function createHeaderRow () {
  var headrow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Stores';
  headrow.appendChild(tableHeader);
  for (var i = 0; i < hours.length; i++) {
    var tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    headrow.appendChild(tableHeader);
  }
  var totalsColumn = document.createElement('th');
  totalsColumn.textContent = 'Totals';
  headrow.appendChild(totalsColumn);
  shopTable.appendChild(headrow);
}

//    ...need to add parseInt after equals
function handleSubmission(event) {
  event.preventDefault();
  var localInput = event.target.loca.value;
  var minInput = event.target.minCust.value;
  var maxInput = event.target.maxCust.value;
  var avgCookies = event.target.avgC.value;

//changed this to var newStore= new CookieStand (loc, min, max, avg)
  new Store (localInput, minInput, maxInput, avgCookies);

  event.target.loca.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgC.value = null;
}

createHeaderRow ();
//these are going to create the instances. I moved this down, past the
new Store('Pike Place Market', 23, 65, 6.5);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 3, 24, 1.2);

newLocations.addEventListener('submit', handleSubmission);
//***********************

//SAM'S ROUGH DRAFT
creating the totals footer row and footer column....
function random (min, max) {

}

function handleForm(event){ //sam used e instead of event
  event.preventDefault();



}

function makeHeaderRow () {

}

function makeFooterRow () {

}

function render???


var totalOfTotals = 0; //bottom right hand corner cell
var hourlyTotal = 0;

for (var i = 0; i < hours.length; i++) { //
  hourlyTotal = 0;
  for (var j = 0; j < CookieStand.all.length; j++) {
    hourlyTotal += CookieSTand.all[j].cookiesEAchHour[i];
  }

//function renderAll (){}
//render headerrow (){}
//render  table rows (){}
//render footer totals () {} //the totals on the far right should be a header

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
