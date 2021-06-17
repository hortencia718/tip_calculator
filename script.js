
// create variable to calculate the value for totalbill, the tip percentage and the split
let calculate =document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalbill = document.querySelector('#totalbill').value;
    let TipPercent = document.querySelector('#TipPercent').value;
    let split = document.querySelector('#split').value;

// evaluate the total bill 
// configure the or compare the totalbill, or tippercentage and the split 
if(totalbill === '' || TipPercent == 0 || split == 0){
    alert('please enter values');
    return;
}

// calculate
//  create a variable for the total for totalbill mulitple that with tip divide among X number ppl maybe 2
let total =(totalbill * TipPercent) / split;
// based on the two values totalbill and tip percentage and split it 
total = total.toFixed(2);

document.getElementById('tip').innerHTML = total;
console.log(total)

})
