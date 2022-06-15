//  let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let calculate = document.getElementById('cal');
let c= calculate;

c.addEventListener('click', () => {
    // let s= seconds.value
    let m= minutes.value
    
    // let O = document.getElementById('output').value;
    answer = eval((m * 60));
        document.getElementById('output').innerHTML = answer ;
        document.getElementById('output1').innerHTML = 'seconds' ;
})
