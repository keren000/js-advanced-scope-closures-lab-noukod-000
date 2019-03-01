function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock){
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let difference = Math.abs(end-start);
    let range = blockRange - difference;

    if (range > 0){
      return `within range by ${range}`
    }
    else{
       return `${difference - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(calcul) {
  return producetip => {
    return producetip * calcul;
  };
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
    this.name = name;
    this.id = driverId++;
  }
  }
}
