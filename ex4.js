'use strict';

const input = require('readline-sync');

var 
  kindsList = ['Bistro', 'Fish', 'Pizza'],
 
  RakBasar = {RestName: 'Rak Basar' ,IsKosher: false, IsKosherLemehadrin: false, kind: "Bistro"},
  ElGaucho = {RestName: 'El Gaucho' ,IsKosher: true, IsKosherLemehadrin: false, kind: "Bistro"},
  MeatBar = {RestName: 'Meat Bar' ,IsKosher: true, IsKosherLemehadrin: true, kind: "Bistro"},
  Moon = {RestName: 'Moon' ,IsKosher: false, IsKosherLemehadrin: false, kind: "Fish"},
  Tokopaya = {RestName: 'Tokopaya' ,IsKosher: true, IsKosherLemehadrin: false, kind: "Fish"},
  Deca = {RestName: 'Deca' ,IsKosher: true, IsKosherLemehadrin: true, kind: "Fish"},
  AralePizza   = {RestName: 'Arale Pizza' ,IsKosher: false, IsKosherLemehadrin: false, kind: "Pizza"},
  NapoliPizza = {RestName: 'Napoli Pizza' ,IsKosher: true, IsKosherLemehadrin: false, kind: "Pizza"},
  AgvaniaPizza = {RestName: 'Agvania Pizza' ,IsKosher: true, IsKosherLemehadrin: true, kind: "Pizza"},
  
  restList = [RakBasar, ElGaucho, MeatBar, Moon, Tokopaya, Deca, AralePizza, NapoliPizza, AgvaniaPizza];  

try { 
  //how many ppl:
  var numOfPpl = Number(input.question("How many people will you be? "));

  if(Number.isInteger(numOfPpl) === false || numOfPpl < 1)  throw "not a valid number of people.";
  console.log('you will be ' + numOfPpl + ' people.');
  
  //IsKosher?
  var Kashrut = "non-kosher",
      kosherLemehadrin = false;
  
  var kosher = input.keyInYN("Should it be Kosher? ");
  if(kosher === '') throw "not y or n.";
  
  //IsKosher lemehadrin?
  if(kosher === true) {
      var kosherLemehadrin = input.keyInYN("Should it be Kosher Lemehadrin? ");
      
      if(kosherLemehadrin === '') throw "not y or n.";
      
      if(kosherLemehadrin === true) {
        console.log('you chose a kosher lemehadrin restaurant for ' + numOfPpl + ' people.');    
        Kashrut = 'kosher lemehadrin';
      } else {
        Kashrut = 'kosher';
        console.log('you chose a kosher restaurant for ' + numOfPpl + ' people.');
      };
  } else console.log('you chose a non-kosher restaurant for ' + numOfPpl + ' people.');


  // What kind of food?
  var kindIndex = input.keyInSelect(kindsList, 'What kind of restaurant do you want?');
  if(kindIndex === -1) throw "cancel. see you next time!.";

  console.log('you chose a ' + Kashrut + ' ' + kindsList[kindIndex] + ' restaurant for ' + numOfPpl +' people.');
    
  var chosenRest = {IsKosher: kosher, IsKosherLemehadrin: kosherLemehadrin, kind: kindsList[kindIndex]};
  
  for (let i=0, n=restList.length; i<n; i++ ) {
        if (restList[i].IsKosher === chosenRest.IsKosher 
          && restList[i].IsKosherLemehadrin === chosenRest.IsKosherLemehadrin 
          && restList[i].kind === chosenRest.kind) 
        {
          console.log(restList[i].RestName + ' is a great choise for you!');
          break;
        };
  };
}

//error handler
catch(err) {
  console.log("Input is " + err + " the program is closing.");
  process.exit();
};
