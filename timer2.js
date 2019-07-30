const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  
  //Button alarm for b
  if (key === "b") {
    process.stdout.write('\x07');
  }

  //Timer for keys 1 through 9
  if (key >= 1 && key <= 9) {
    console.log(`Setting timer for ${key} seconds.`);
    if (Number(key) == undefined || Number(key) < 0 || isNaN(key)) {
      console.log("Enter valid time value(s)");
    } else {
      setTimeout(()=> {
      process.stdout.write('\x07');
    }, key * 1000)
  }
}

  //ctrl + c exit implementation
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }

});

console.log('after callback');