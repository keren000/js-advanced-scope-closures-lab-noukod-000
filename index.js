function produceDrivingRange(blockRange){

  return function(startingBlock, endingBlock){
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distance = Math.abs(end - start);
    let difference = blockRange - distance;
    
    if (difference > 0) {
      return `within range by ${difference}`
    } 
    
    else {  
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(totalbill){
    return percentage * totalbill;
  }
}

function createDriver(){
  let driverId = 0;
  return class Driver {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
