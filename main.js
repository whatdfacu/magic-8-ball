//escribir constante

let orden = 0;

function click() {
        if (orden < 5 ){
        orden = orden + 1;
        console.log(orden)
    }
    else (orden = 0);
}

let p = document.getElementById("tap");
console.log(p)
p.onclick = click;

switch (orden) {
    case 1:
      console.log("caso 1")
      break;
    case 2:
        console.log("caso 2")
      break;
      case 3:
        console.log("caso 3")
      break;
      case 4:
        console.log("caso 4")
      break;
    default:
      console.log("caso 5")
      break;
  }
