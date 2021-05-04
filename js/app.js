'use strict';


function getRandomAge(min, max) {
  min = 18;
  max = 30;
  return Math.floor(Math.random() * (max - min) + min);
}
// getRandomAge();

console.log(getRandomAge());

function Donation (donorName, amount){
  this.donorName = donorName;
  this.amount = amount;
  this.age = getRandomAge();
  this.total = 0;
  Donation.arrayOfObjects.push(this);
  console.log(this.donorName);
}

Donation.arrayOfObjects = [];



let formApplication = document.getElementById('form');
let donorNameField = document.getElementById('donorName');
let selectOption = document.getElementById('selectOption');
let submitButton = document.getElementById('submit');
let table = document.getElementById('tableOfData');


formApplication.addEventListener('submit', handleSubmitting);

// submitButton.addEventListener('submit', handleSubmitting);

function handleSubmitting (event) {
  event.preventDefault();
  donorNameField = event.target.donorName.value;
  selectOption = parseInt(event.target.selectOption.value);

  let newInstance = new Donation (donorNameField, selectOption);
  saveToLs();
  console.log(newInstance);
  newInstance.renderData();
}


Donation.prototype.renderData = function() {
  let rowOfData = document.createElement('tr');
  table.appendChild(rowOfData);
  let dataElements;
  let dataElements1;
  let dataElements2;
  dataElements = document.createElement('td');
  rowOfData.appendChild(dataElements);
  dataElements.textContent = this.donorName;
  dataElements1 = document.createElement('td');
  rowOfData.appendChild(dataElements1);
  dataElements1.textContent = this.age;
  dataElements2 = document.createElement('td');
  rowOfData.appendChild(dataElements2);
  dataElements2.textContent = this.amount;
  this.total += this.amount;
  console.log(this.total);
  let h2 = document.getElementById('h2');
  h2.textContent = this.total;

};

Donation.prototype.renderData();

function saveToLs() {
  localStorage.setItem('Donors', JSON.stringify(Donation.arrayOfObjects));
}

function getDataFromLs() {
  let newObject;
  let data = localStorage.getItem('Donors');
  let castingTheDataType = JSON.parse(data);
  if (castingTheDataType){
    Donation.arrayOfObjects = castingTheDataType;
    // for (let i=0; i<castingTheDataType.length; i++){
    //   newObject = new Donation (castingTheDataType[i].donorName,castingTheDataType[i].amount);
    // }
  }
}

getDataFromLs();
