'use strict';

//global variables
//store hours
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm','3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
//the master array. This is a global variable for an empty array that holds all five store objects
var samStore = [];
// declaring a variable called shopTable and rendering to the DOM using the id of shops and we'll be using this later which is why it needs to be global
var shopTable = document.getElementById('shops');

//CONSTRUCTOR FUNCTION
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
  this.calcCustomersPerHour();
  this.getCookiesSold();
  samStore.push(this);
  this.render();//added this to prove that if we render up top my table data shows up
};

//rendering to the DOM
Store.prototype.render = function() {
  console.log('inside render method');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild (tdEl); //appending the data to the table row
  for (var i = 0; i < hours.length; i++) { //should this be hourlySales??
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales[i];
    trEl.appendChild(tdEl);
  };
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalSales;
  trEl.appendChild(tdTotal);
  shopTable.appendChild(trEl);
};

//methods
//method #1 getting an random number of people per hour. Defining the behaviors of our instances.
Store.prototype.calcCustomersPerHour = function() {
  for(var i = 0; i < hours.length; i++){
    var cust = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
    this.hourlyCust.push(cust);
  }
};
//method #2 calculating cookie sales per hour now that we've generated the random number of Cx per hour
Store.prototype.getCookiesSold = function() {
  this.calcCustomersPerHour();
  for (var i = 0; i < hours.length; i++) {
    var cookies = Math.ceil(this.hourlyCust[i] * this.avgCookiesPerSale);
    this.hourlySales.push(cookies);
    this.totalSales += cookies;
  }
};

//this is where the render function WAS

//create header row method
function createHeaderRow() {
  console.log('inside createHeaderRow method');
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
  // totalsColumn.textContent = 'Totals';
  // headrow.appendChild(totalsColumn);
  shopTable.appendChild(headrow);
}
// start of render all function
function renderAll(){
  console.log('inside renderAll method');
  for(var i = 0; i < samStore.length; i++) {
    samStore[i].render();
  }
};
//start of creating footer row function (with total of totals cell)
function makeFooterRow() {
  console.log('inside makeFooterRow method');
  var footrow = document.createElement('tr');
  var tableFooter = document.createElement('th');
  tableFooter.textContent = 'totals per hour';
  footrow.appendChild(tableFooter);
  var grandTotal = []; //added var????
  for (var i = 0; i < hours.length; i++) {
    var totalEachHour = 0;
    for (var j = 0; j < samStore.length; j++) {
      totalEachHour += samStore[j].hourlySales[i];
    }
    tableFooter = document.createElement('th');//repeating what I've already written up top?
    tableFooter.textContent = totalEachHour;
    footrow.appendChild(tableFooter);//???
    grandTotal.push(totalEachHour);
  }
  tableFooter = document.createElement('th');
  tableFooter.textContent = grandTotal.reduce(function(total,sum){
    return total + sum;
  });
  footrow.appendChild(tableFooter);//??
  shopTable.appendChild(footrow);//THERE WAS A SPACE HERE
}
//end of footer row function

//these are going to create the instances for each store.
new Store('Pike Place Market', 23, 65, 6.5);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 3, 24, 1.2);

//event Handler
function handleSubmission(event){
  event.preventDefault();
  var localInput = event.target.loca.value;
  var minInput = parseInt(event.target.minCust.value);
  var maxInput = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgC.value);
  if (!event.target.loca.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgC.value) {
    return alert ('Fields cannot be empty.');
  }
// calling new Store with arguments?
  new Store (localInput, minInput, maxInput, avgCookies);
//this will clear the text field boxes
  event.target.loca.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgC.value = null;
  shopTable.innerHTML = '';

  // var storeExists = doesStoreExist(storeLocations, name);
  // var index;

  createHeaderRow();
  renderAll();
  makeFooterRow();
}
//this is for after user submits in form and this will refresh
createHeaderRow();
renderAll();
makeFooterRow();

//instances used to be here

newLocations.addEventListener('submit', handleSubmission);
