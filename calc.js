let numberOne = "";
let f = 0;

function chiffre(e, v) {
  f = f + v;
  numberOne = `${numberOne}  ${e}`;
  choixOperator();
  if (f > 4) {
    numberOne = `${numberOne}`;
    document.getElementById("display").innerText = numberOne;
    // console.log(`${numberOne}`);
    choixOperator();
  }
  document.getElementById("display").innerText = numberOne;
}
// ****************

let operation = 0;

const operator = document.querySelectorAll(".operation");
let premierNb = "";
const choixOperator = () => {
  ("operator-box");

  operator.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target.id);
      let premierNb = numberOne;
      numberOne = 0;
      console.log("premierNb = " + premierNb);
      document.getElementById("display").innerText = "";
      switch (e.target.id) {
        case "opera1":
          operation = "/";

          break;
        case "opera2":
          operation = "*";

          break;
        case "opera3":
          operation = "-";

          break;
        case "opera4":
          operation = "+";

          break;
        default:
          null;
      }
    });
  });
};
const chiffre2 = (chiffre(), premierNb)({});
// const resultat = () => {
//   return chiffrePremier + operation + chiffreSecond;
// };
