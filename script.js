// National Emergency Call button functionality
document.getElementById('emergency-call-btn-1').addEventListener('click', function() {
    alert('Calling 999 for  Emergency Services...');
    updateCoinCount();

});

//Police Helpline call btn
document.getElementById('police-call-btn').addEventListener('click', function() {
    alert('Calling 999 for Police Helpline...');
    updateCoinCount();
});

//Fire Helpline call btn
document.getElementById('fire-call-btn').addEventListener('click', function() {
    alert('Calling 999 for Fire Helpline...');
    updateCoinCount();
});

//Ambulance Helpline call btn
document.getElementById('ambulance-call-btn').addEventListener('click', function() {
    alert('Calling 1994-999999 for Ambulance Helpline...');
    updateCoinCount();
});

//Women Helpline call btn
document.getElementById('women-call-btn').addEventListener('click', function() {
    alert('Calling 109 for Women Helpline...');
    updateCoinCount();
});

//Anti corroption Helpline call btn
document.getElementById('corroption-call-btn').addEventListener('click', function() {
    alert('Calling 106 for Anti Corroption Helpline...');
    updateCoinCount();
});

//Electricity Helpline call btn
document.getElementById('electricity-call-btn').addEventListener('click', function() {
    alert('Calling 16216 for Electricity Helpline...');
    updateCoinCount();
});

//Brac helpline call btn
document.getElementById('brac-call-btn').addEventListener('click', function() {
    alert('Calling 16445 for Brac Helpline...');
    updateCoinCount();
});

//Bangladesh Railway helpline call btn
document.getElementById('railway-call-btn').addEventListener('click', function() {
    alert('Calling 163 for Bangladesh Railway Helpline...');
    updateCoinCount();
});









//heart button functionality
document.getElementById('heart-btn-id').addEventListener('click', function() {
    updateHeartCount();
});

function updateCoinCount(){
  let coinCount = parseInt(document.getElementById('coin-count-id').innerText);
  if(coinCount >= 20){
      coinCount -= 20;
      document.getElementById('coin-count-id').innerText = coinCount;
  }
}

function updateHeartCount() {
    let heartCount = parseInt(document.getElementById('heart-count-id').innerText);
    if(heartCount > 0) {
        heartCount += 1;
        document.getElementById('heart-count-id').innerText = heartCount;
    }   
    
};