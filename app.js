// ** replace w/ the rectangle.js file **
// const rect = {
//   perimeter: (x, y) => 2 * (x + y),
//   area: (x, y) => x * y,
// };

const rect = require("./rectangle");

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("ERROR:", err.message);
    } else {
      console.log(
        `Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`
      );
      console.log(
        `Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`
      );
    }
  });
  console.log("This statement is logged after the call to rect()");
}

// ** the error handling was moved to the rectangle module **
//   if (l <= 0 || w <= 0) {
//     console.log(
//       `Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`
//     );
//
// ** the calculation logic was moved int the the rect callback fn**
//   } else {
//     console.log(`Area of rectangle: ${rect.area(l, w)}`);
//     console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
//   }
// }

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
