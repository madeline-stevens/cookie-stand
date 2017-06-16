
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
  this.getCookiesSold();
  samStore.push(this); //pushing everthing into the samStore array
  this.render();//added this to prove that if we render up top my table data shows up
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
  // console.log (this.totalSales); Don't need???
  trEl.appendChild(tdEl);
  shopTable.appendChild(trEl);
};

//create header row method
function createHeaderRow() {
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
// start of render all function
function renderAll(){
  console.log('stores......', samStore);
  for(var x = 0; x < samStore.length; x++){
    console.log('HELLO');
    samStore[x].render();
  }
}
//start of creating footer row function with total of totals cell
function makeFooterRow() {
  var footrow = document.createElement('tr');
  var tableFooter = document.createElement('th');
  tableFooter.textContent = 'totals per hour';
  footrow.appendChild(tableFooter);

  grandTotal = [];
  // }
  for (var i = 0; i < hours.length; i++) {
    var totalEachHour = 0;
    for (var j = 0; j < samStore.length; j++) {
      totalEachHour += samStore[j].hourlySales[i];
    }
    tableFooter = document.createElement('th');//getting data but this does something with it
    tableFooter.textContent = totalEachHour;
    footrow.appendChild(tableFooter);
    grandTotal.push(totalEachHour);
  }
  tableFooter = document.createElement ('th');
  tableFooter.textContent = grandTotal.reduce(function(total,sum){
    return total + sum;
  });//running an IIFE (immediately invoked function expression) which is an immediately called, nameless function within a
  footrow.appendChild (tableFooter);
  shopTable.appendChild(footrow);
}
//end of footer row function

//    ...need to add parseInt after equals
function handleSubmission(event){
  event.preventDefault();
  var localInput = event.target.loca.value;
  var minInput = parseInt(event.target.minCust.value);
  var maxInput = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgC.value);

//changed this to var newStore= new CookieStand (loc, min, max, avg)
  new Store (localInput, minInput, maxInput, avgCookies);
//this will clear the text field boxes
  event.target.loca.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgC.value = null;
  shopTable.innerHTML = '';
  createHeaderRow();
  renderAll();
  makeFooterRow();
}
//this is for after user submits in form and this will refresh
createHeaderRow();
renderAll();
makeFooterRow();

//these are going to create the instances for each store.
new Store('Pike Place Market', 23, 65, 6.5);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 3, 24, 1.2);

newLocations.addEventListener('submit', handleSubmission);
