// Desafio 1
function compareTrue(a,b) { 
  return (a > 0) && (b >0); 
}

// // Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

//Desafio 3
function splitSentence(a) { 
  return (a.split(" ",3));
}

// Desafio 4
function concatName(a) {
  return a[a.length-1] + ',' +' '+ a[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount (a) {
    
  let d = a;
  let b = -100;
  let m = 0; 
  for ( i = 0; i <  a.length; i++) {
      for ( x = 0; x <=  a.length; x++){
          if (a[i] >= d[x] && a[i] >= b)  {
              b = a[i];
          }
  
          
          if (d[x] >= a[i] && d[x] >=b ) {
              b = d[x]; 
          }
      }

if ( a[i] == b ) { 
  m++;
  }
if ( d[x] == b ) { 
  m++;
  }    
}
return m;
}


// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
// ref  git@github.com:C4BRALL/Portfolio.git Contribui com função Math.abs e entendimento do enunciado do problem.   
  let x = Math.abs(mouse - cat1) ;
  let y = Math.abs(mouse - cat2) ;
   
  if ( x > y){ return "cat2";
  } 
  if ( x < y) {  return "cat1";  
  }   
  if ((x - y == 0)) { return "os gatos trombam e o rato foge"; 
  } 
} 
// Desafio 8
// ref  git@github.com:C4BRALL/Portfolio.git Contribui com entendimento do enunciado do problem e utlilização do else if.
function fizzBuzz(a) {
  let b = []; 
  for ( i=0; i <=a.length-1; i++){

    let x = a[i] % 3;
    let y = a[i] % 5;
    if ( x===0 && y===0) { 
       b.push("fizzBuzz");
    } 
    else if (y === 0 ) {
       b.push("buzz");

    } 
    else if (x === 0 ) { 
       b.push("fizz");
    }
    else   { 
       b.push("bug!");
    }
  }
return b;
}


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};