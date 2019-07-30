const args = process.argv.slice(2);

const timer = function(arr) {

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Number(item) == undefined || Number(item) < 0 || isNaN(item)) {
      console.log("Enter valid time value(s)");
    } else {
      setTimeout(() => {
        process.stdout.write('test');
      }
      , item * 1000)
    }
  }
}

timer(args);