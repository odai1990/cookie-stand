'use strict';


let apeddObject = [];
let primaryTable = document.createElement('table');
let formSubmition = document.querySelector('#formNew');




let addEventToForm = function () {
  formSubmition.addEventListener('submit', function (event) {
    event.preventDefault();
    let formMin = document.querySelector('#Min_Customer').value;
    let formMax = document.querySelector('#Max_Customer').value;
    let formAvarage = document.querySelector('#Avrage').value;
    let formName = document.querySelector('#name').value;

    function checkAdult(data) {
      console.log(data.name === formName);
      return data.name.toLowerCase() === formName.toLowerCase();
    }
    let flag = apeddObject.find(checkAdult);


    if (formMin === '' || formMax === '' || formAvarage === 0 || formName === '') {

      alert('Please Fill All Fileds!');

    } else if (flag !== undefined) {
      alert('This location is ralrady stored');
    } else {

      document.querySelector('#fordelete').remove();
      apeddObject.push(new MainObject(formName, formMin, formMax, formAvarage));
      readLocationAndDispalyForDynamic(apeddObject.length - 1);
      formSubmition.reset();

    }
  });
};

let addEventToInputToClucolateVarge = function () {
  formSubmition.addEventListener('input', function (event) {
    event.preventDefault();

    let formMin = document.querySelector('#Min_Customer').value === '' ? 0 : document.querySelector('#Min_Customer').value;
    let formMax = document.querySelector('#Max_Customer').value === '' ? 0 : document.querySelector('#Max_Customer').value;
    let formAvrage = document.querySelector('#Avrage');
    let tempAvrage = (formMax - formMin) / 2;

    if (tempAvrage >= 0) {
      formAvrage.value = tempAvrage;
    } else {
      formAvrage.value = 0;
    }
  });
};



let MainObject = function (name, minC, maxC, avg) {
  this.name = name;
  this.minC = minC;
  this.maxC = maxC;
  this.avg = avg;
  this.cookieHoureArry = [];
  this.hoursVailability = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.totalCookie = 0;
  this.rootSource = document.getElementById('root');
  // apeddObject.push(this);
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

  primaryTable.setAttribute('id', 'idToDelete');
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
  footerTable.setAttribute('id', 'fordelete')
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

let assginObject = function () {


  apeddObject.push(new MainObject('Seattle', 23, 65, 6.3));
  apeddObject.push(new MainObject('Tokyo', 3, 24, 1.2));
  apeddObject.push(new MainObject('Dubai', 11, 38, 3.7));
  apeddObject.push(new MainObject('Paris', 20, 38, 2.3));
  apeddObject.push(new MainObject('Lima', 2, 16, 4.6));

};
let readLocationAndDispaly = function () {


  for (let i = 0; i < apeddObject.length; i++) {
    if (i === 0) {
      apeddObject[i].renderHeader();
      apeddObject[i].cookiesAverage();
      apeddObject[i].renderBody();
    } else if (i === apeddObject.length - 1) {
      apeddObject[i].cookiesAverage();
      apeddObject[i].renderBody();
      apeddObject[i].renderTotal();
    }
    else {
      apeddObject[i].cookiesAverage();
      apeddObject[i].renderBody();
    }


  }
};
let readLocationAndDispalyForDynamic = function (index) {

  apeddObject[index].cookiesAverage();
  apeddObject[index].renderBody();
  apeddObject[index].renderTotal();

};




addEventToForm();
assginObject();
readLocationAndDispaly();
addEventToInputToClucolateVarge();
