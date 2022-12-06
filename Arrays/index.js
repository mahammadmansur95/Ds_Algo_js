let test_1 = new Array();
let test_2 = new Array(7); //array of length 7
let test_3 = new Array('sunday', 'manday','tuesday');
let test_4 = []; //simple

//febno sequence
let febno = [];
febno[0] = 0;
febno[1] = 1;

for(let i = 2; i <= 20; i++) {
    febno[i] = febno[i-1] + febno[i-2];
}
console.log(febno.toString());