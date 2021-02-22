'use strict';



'use strict';



let apeddObject = [];
let primaryTable = document.createElement('table');
let MainObject = function (name, minC, maxC, avg) {
  this.name = name;
  this.minC = minC;
  this.maxC = maxC;
  this.avg = avg;
  this.cookieHoureArry = [];
  this.hoursVailability = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.totalCookie = 0;
  this.rootSource = document.getElementById('root');
  apeddObject.push(this);
};

MainObject.prototype.cookiesPerHour = function () {
  return Math.floor(Math.floor(Math.random() * (this.maxC - this.minC + 1) + this.minC) * this.avg);
};

MainObject.prototype.cookiesAverage = function () {
  for (let index = 0; index < this.hoursVailability.length; index++) {
    let temp = this.cookiesPerHour();
    this.cookieHoureArry.push(temp);
    this.totalCookie += temp;

  }
};

MainObject.prototype.renderHeader = function () {

  let headerTable = document.createElement('tr');
  primaryTable.appendChild(headerTable);
  this.rootSource.appendChild(primaryTable);
  let cellHeader = document.createElement('th');
  headerTable.appendChild(cellHeader);
  for (let i = 0; i < this.hoursVailability.length; i++) {
    cellHeader = document.createElement('th');
    headerTable.appendChild(cellHeader);
    cellHeader.textContent = `${this.hoursVailability[i]}`;
  }

  cellHeader = document.createElement('th');
  cellHeader.textContent = 'Daily Location Total';
  headerTable.appendChild(cellHeader);

};

MainObject.prototype.renderBody = function () {
  let bodyTable = document.createElement('tr');
  this.rootSource.appendChild(primaryTable);
  primaryTable.appendChild(bodyTable);
  let cellBody = document.createElement('td');
  bodyTable.appendChild(cellBody);
  cellBody.textContent = (this.name);
  for (let index = 0; index < this.cookieHoureArry.length; index++) {
    cellBody = document.createElement('td');
    bodyTable.appendChild(cellBody);
    cellBody.textContent = (this.cookieHoureArry[index]);
  }
  cellBody = document.createElement('td');
  bodyTable.appendChild(cellBody);
  cellBody.textContent = (this.totalCookie);
};





MainObject.prototype.renderTotal = function () {
  let footerTable = document.createElement('tr');
  primaryTable.appendChild(footerTable);
  let cellFooter = document.createElement('th');
  footerTable.appendChild(cellFooter);
  cellFooter.textContent = 'Total';

  for (let i = 0; i <= this.hoursVailability.length; i++) {
    let tempHolder = 0;
    for (let x = 0; x < apeddObject.length; x++) {
      if (i !== this.hoursVailability.length) {
        tempHolder += apeddObject[x].cookieHoureArry[i];
      } else {

        tempHolder += apeddObject[x].totalCookie;
      }
    }

    cellFooter = document.createElement('th');
    footerTable.appendChild(cellFooter);
    cellFooter.textContent = tempHolder;
  }

};

let seattle = new MainObject('Seattle', 23, 65, 6.3);
let tokyo = new MainObject('Tokyo', 3, 24, 1.2);
let dubai = new MainObject('Dubai', 11, 38, 3.7);
let paris = new MainObject('Paris', 20, 38, 2.3);
let lima = new MainObject('Lima', 2, 16, 4.6);


seattle.renderHeader();
seattle.cookiesAverage();
seattle.renderBody();
tokyo.cookiesAverage();
tokyo.renderBody();
dubai.cookiesAverage();
dubai.renderBody();
paris.cookiesAverage();
paris.renderBody();
lima.cookiesAverage();
lima.renderBody();
lima.renderTotal();
