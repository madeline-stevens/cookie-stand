
'use stict';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm'];

var samStore = [];

var shopTable = document.getElementById ('shops');

//object constructor aka the maker of the stores (with properties)
function Store(location, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlyCust = [];
  this.hourlySales = [];
  this.totalSales = 0;
  samStore.push(this);
};

//methods
//method #1 getting an random number of people per hour
Store.prototype.calcCustomersPerHour = function() {
  for(var i = 0; i < hours.length; i++){
    var cust = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
    this.hourlyCust.push(cust);
    //ref.push(randCustomer(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
  // return this.cookiesSoldEachHour;
};

//method #2 calculating cookie sales per hour
Store.prototype.getCookiesSold = function () {
  this.calcCustomersPerHour();
  for (var i = 0; i < hours.length; i++) {
    var cookies = Math.ceil(this.hourlyCust[i] * this.avgCookiesPerSale);
    this.hourlySales.push(cookies);
    this.totalSales += this.hourlySales[i]; //+-hourlysales becuase we're adding the hourly sales to the total sales which starts at 0.
  }
  return this.hourlySales;
};

//the stores without variables ...
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

//render to a table

Store.prototype.render = function () {
  var tableRow = document.createElement ('tr');
  var tableData = document.createElement ('td');
  tableData.textContent = ' !!!!! ';
  tableRow.appendChild (tableData);
  shopTable.appendChild (tableRow);
};

//rendering the header row
Store.prototype.createHeaderRow = function () {
  var tableRow = document.createElement ('tr');
  var tableData = document.createElement ('td');
  var tableHeader = document.createElement ('th');
  tableHeader.textContent = this.location;
  tableRow.appendChild (tableHeader);
};

//
// //arrays
//
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
