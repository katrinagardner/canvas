var hockey = function(goals,assists, points, shots){
  this.goals = goals;
  this.assists=assists;
  this.points=points;
  this.shots=shots;
};

var RickNash= new hockey(14, 7, 21, 73);

console.log(RickNash);

// var RickNash=new hockey(14,7,21,73); and console.log(RickNash); will print out { goals: 14, assists: 7, points: 21, shots: 73 }
