/*var posNeg = function(x, y){
  if(x >= 0 && y < 0  || x < 0 && y >=0){
    console.log("true");
  }
    else {
      console.log("false");
    }
  }
  posNeg(-1, -2);
*/

  var posNeg = function(x, y, z){

    if(x >= 0 && y >= 0 && z === false ||
      x >= 0 && y >=0 && z ===true){
      console.log("false");
    }

   else if (x >= 0 && y < 0 && z === false ||
      x < 0 && y < 0 && z === true ||
      x >= 0 && y < 0 && z === true ||
      x < 0 && y >= 0 && z === true ) {
        console.log("true");

      }

      else {
        console.log("false");
      }

  };

    posNeg(1, 2, false);
    posNeg(1, -2, false);
    posNeg(-1, 2, true);
    posNeg(1, -2, true);
    posNeg(-1, -2, false);
    posNeg(-1, -2, true);
