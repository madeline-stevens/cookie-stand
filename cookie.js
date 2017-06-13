'use stict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm'];
//function totalCookies (total, num) {
//  return total + num;
//}
var pikePlaceMkt = {
  location: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random cx at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      //console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement ('li');
      liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales;
  }

};
pikePlaceMkt.calcCustomersPerHour();
pikePlaceMkt.calcCookiesPerHour();
pikePlaceMkt.render();

//end of Pike Place

//#2 start of seaTac

var seaTac = {
  location: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random cx at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      //console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName2');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement ('li');
      liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales;
  }

};
seaTac.calcCustomersPerHour();
seaTac.calcCookiesPerHour();
seaTac.render();

//end of seaTac

//#3 start of Seattle Center

var seaCenter = {
  location: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random cx at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      //console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName3');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement ('li');
      liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales;
  }

};
seaCenter.calcCustomersPerHour();
seaCenter.calcCookiesPerHour();
seaCenter.render();

//end of Seattle Center

//#4 start of Capitol Hill

var capHill = {
  location: 'Capitol Hill',
  minCustomersPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random cx at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      //console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName4');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement ('li');
      liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales;
  }

};
capHill.calcCustomersPerHour();
capHill.calcCookiesPerHour();
capHill.render();
//end of capHill

//#5 start of Alki
var alki = {
  location: 'Alki',
  minCustomersPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  totalDailySales: 0,
  randomCustomersPerHour: [],//to store random cx at each hour
  totalCookiesPerHour: [],
  calcCustomersPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
      //console.log(this.randomCustomersPerHour[i]);
    }
  },
  calcCookiesPerHour: function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil (this.randomCustomersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.totalCookiesPerHour[i];
      console.log(this.totalDailySales);
    }
  },
  render: function (){
    var ulEl = document.getElementById('locationName5');
    ulEl.textContent = this.location;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement ('li');
      liEl.textContent = hours[i] + ' : ' + ' ' + this.totalCookiesPerHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalDailySales;
  }

};
alki.calcCustomersPerHour();
alki.calcCookiesPerHour();
alki.render();
//end of Alki
