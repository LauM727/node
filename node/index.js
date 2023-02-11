// const mathModule = require("./math.js");
// console.log(mathModule);
// console.log(add(2,3));

// const moduleOs = require("os");
// const a=moduleOs.platform();
// console.log(moduleOs);

// const fs = require("fs");
// fs.writeFile("new.txt", "hola, soy el contenido", (err) => {
//   if (err) {
//     console.log("hubo un error");
//   } else {
//     console.log("se creó con éxito");
//   }
// });

fs.readFile("./new.txt", (err, data) => {
    if (err) {
    } else {
      console.log(data);
      console.log(data.toString());
    }
  });

  console.log('////////////////////////////');

  const _ = require('lodash');
  console.log(_);
  console.log(_.capitalize('pedro'));
  console.log(_.camelCase('pedro is a good person'));
  console.log(_.snakeCase('pedro is a good person'));
  console.log(_.kebabCase('pedro is a good person'));

  console.log('////////////////////////////');

