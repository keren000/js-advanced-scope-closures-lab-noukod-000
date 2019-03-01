function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock){
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
      let range = Math.abs(startBlock.slice(0,2) - endBlock.slice(0,2))
      let distance = Math.abs(blockRange - range)

    if (range > 0){
      return `within range by ${range}`
    }else{
      return `${Math.abs(range)} blocks out of range`
    }
  }
}


function produceTipCalculator(tip) {
  return function(tripCost) {
    return (tripCost * tip);
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
