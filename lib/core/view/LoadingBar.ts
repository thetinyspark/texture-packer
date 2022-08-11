import process = require("process");
import readline = require("readline");

export default class LoadingBar {
  constructor() {}

  start() {}

  public progress(num: number) {
    num = Math.round(num);
    const numFilled = Math.round(num / 5);
    const numEmpties = (100 / 5)-numFilled;
    const filled = (String)("=").repeat(numFilled);
    const empty = (String)("-").repeat(numEmpties);
    if( num === 100 ){
        process.stdout.write("["+ filled + empty +"] "+num+"%");
        process.stdout.write("\n");
    }
    else{
        process.stdout.write("["+ filled + empty +"] "+num+"% \r");
    }
  }

}
