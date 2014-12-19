//No.1
/*var numbers=[1,2,3,4,5,6,7,8,9,10]
var removeEven=function(number){
  return number %2 !==0
}

console.log(numbers.filter(removeEven));

*/

//No.2
/*var mergeString=function(array){
var message=""; //create a empty string, it has to be outside of the for loop in order to print out everything, Otherwise if this is
//inside of the for loop. it will just run and replacing then only print out last element in the array.

  for(i=0; i< array.length; i++){

    message += ("hey there ," + array[i] + ".");

  }
  return message; //if return message is inside of "for loop" then it will only return the first thing I did.
  //so in order to return everything, return message needs to be outside of for loop.
  }

var stooges=["Larry","Curly","Moe"];
var stoogesString=mergeString(stooges);
console.log(stoogesString);
*/

//No.3
/*var mergeArray=function(array1,array2){
  var newarray=[];
  for(var i=0; i<array1.length  && array2.length;i++){
    newarray.push(array1[i]);
    newarray.push(array2[i]);

  }
  return newarray;
}

var fun = ["pretzels", "cheez-its", "m&ms"];
var work = ["raisins", "dried apricots", "nuts"];
var trailMix=mergeArray(fun,work);
console.log(trailMix);
*/

//No.4 founction mergeHashes-
/*
var mergeHashes=function(hash1,hash2){
  var allkey1=Object.keys(hash1);//create var and decleared take all the keys from object(hash1)
  var allkey2=Object.keys(hash2);//create var and decleared take all the keys from object(hash2)
  var newhash={};// this is when you want two hashes to merged as one hash.

  for (i=0; i<allkey1.length && allkey2.length ; i++){
    newhash[allkey1[i]] = hash1[allkey1[i]] ; //
    newhash[allkey2[i]] = hash2[allkey2[i]] ;
  }
  return newhash;
}

var blue = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}
var ciudad = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}
var happyFamily = mergeHashes(blue, ciudad);
console.log(happyFamily);
*/

//No.5 constructor sheep-
/*
var sheep=function(){
  this.name= "sheep";
  this.species="O.aries";
  this.genus="Ovis";
  this.phylum="Chordata";
  this.kingdom="Animalia";
};

var sheeps = new sheep();
console.log(sheeps);
*/

//No.6 constructor BaseballPlayer
/*
var BaseballPlayer=function(name,team){
  this.name=name;
  this.team=team;
};

var player = new BaseballPlayer("David Aardsma","Yankees");
console.log(player);
*/


// No.7 constructor Car-
/*
var car= function (brand, model, color){
  this.brand=brand;
  this.model=model;
  this.color=color;
  this.gear="parked";
  this.stopped=true;


  this.drive= function(){
    if(this.gear==="parked" && this.stopped)
  this.gear="drive";
  this.stopped=false;
  console.log("Ford focus is in drive.")
};

this.accelerate=function(){
  if(this.gear="parked"){
    console.log("pleae switch to drive first.");
  }
  else {
    console.log("Ford focus is accelerating.");
  }
};

this.stop=function(){
  console.log("Ford focus has stopped.");
  this.stopped=true;
};
this.park=function(){
  if(this.stopped=false){
    console.log("plese stop the car now");
  }
  else{
    console.log("Ford focus is parked");
    this.gear="parked";
  }

}
};

var newcar= new car("Ford", "Camry", "sliver")
newcar.park();
newcar.stop();
*/


//count down New Year-
var number=10;
var countdown= function(){
if (number>0){
  //console.log(number);
  process.stdout.write(number + "..." + " ");//use "process.stdout.write" will come with formatted output
  number--;
}
  else{
    console.log("Happy New Year!");
    clearInterval(timer);
  }
}

var timer = setInterval(countdown,1000);


/*<style>*/
/*button{
color:blue;
width:60px;
height: 40px;
border-radius:5px;
background-color:yellow;
}
</style>*/
