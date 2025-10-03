// National Emergency Call button functionality
document.getElementById('emergency-call-btn-1').addEventListener('click', function() {
    alert('Calling 999 for  Emergency Services...');
    updateCoinCount();
   
    addToCallHistory('Emergency Services', '999');
});

//Police Helpline call btn
document.getElementById('police-call-btn').addEventListener('click', function() {
    alert('Calling 999 for Police Helpline...');
    updateCoinCount();
    
    addToCallHistory('Police Helpline', '999');
});

//Fire Helpline call btn
document.getElementById('fire-call-btn').addEventListener('click', function() {
    alert('Calling 999 for Fire Helpline...');
    updateCoinCount();
    
    addToCallHistory('Fire Helpline', '999');
});

//Ambulance Helpline call btn
document.getElementById('ambulance-call-btn').addEventListener('click', function() {
    alert('Calling 1994-999999 for Ambulance Helpline...');
    updateCoinCount();
    
    addToCallHistory('Ambulance Helpline', '1994-999999');
});

//Women Helpline call btn
document.getElementById('women-call-btn').addEventListener('click', function() {
    alert('Calling 109 for Women Helpline...');
    updateCoinCount();
    
    addToCallHistory('Women Helpline', '109');
});

//Anti corroption Helpline call btn
document.getElementById('corroption-call-btn').addEventListener('click', function() {
    alert('Calling 106 for Anti Corroption Helpline...');
    updateCoinCount();
    
    addToCallHistory('Anti Corroption Helpline', '106');
});

//Electricity Helpline call btn
document.getElementById('electricity-call-btn').addEventListener('click', function() {
    alert('Calling 16216 for Electricity Helpline...');
    updateCoinCount();
    
    addToCallHistory('Electricity Helpline', '16216');
});

//Brac helpline call btn
document.getElementById('brac-call-btn').addEventListener('click', function() {
    alert('Calling 16445 for Brac Helpline...');
    updateCoinCount();
    
    addToCallHistory('Brac Helpline', '16445');
});

//Bangladesh Railway helpline call btn
document.getElementById('railway-call-btn').addEventListener('click', function() {
    alert('Calling 163 for Bangladesh Railway Helpline...');
    updateCoinCount();
    
    addToCallHistory('Bangladesh Railway Helpline', '163');
});

// append  card functionality

// function appendCard() {
//     let cardContainer = document.getElementById('card-container-id');
//     let newCard = document.createElement('div');
//     newCard.innerHTML = `
//     <div class="card flex justify-between items-center mb-4 p-2 border-b">
//                         <div class="left">
//                             <h1>Fire Service Number</h1>
//                         <p>999</p>
//                         </div>
//                         <div class="right">
//                             <p>📞 1 min ago</p>
//                         </div>
//                     </div>
//     `;
//     cardContainer.appendChild(newCard); 
// }





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

function addToCallHistory(serviceName, phoneNumber) {
    // Get the call history container
    const historyContainer = document.querySelector('.card-container-id');
    
    // Create the call history item HTML
    const callHistoryItem = `
        <div class="call-history-item bg-gray-50 p-3 rounded-lg mb-3 border">
            <div class="flex flex-col md:flex-row justify-between items-start mb-1">
                <span class="font-medium text-gray-800">${serviceName}</span>
                <span class="text-xs text-gray-500">${getCurrentTime()}</span>
            </div>
            <div class="text-sm text-gray-600">${phoneNumber}</div>
            <div class="text-xs text-green-600 mt-1">✓ Call completed</div>
        </div>
    `;
    
    // Append to history (newest at top)
    historyContainer.insertAdjacentHTML('afterbegin', callHistoryItem);
    
    //add clear history functionality
    
    
}
//clear call history functionality
function clearCallHistory() {
    console.log('Clear button clicked!'); // Debug line
    const historyContainer = document.querySelector('.card-container-id');
    console.log('Container found:', historyContainer); // Debug line
    
    if (historyContainer) {
        historyContainer.innerHTML = '<p class="text-gray-400 text-center py-4">No call history</p>';
        console.log('History cleared!'); // Debug line
    } else {
        console.error('History container not found!');
    }
}

//click event on clear button
document.querySelector('.clear').addEventListener('click', clearCallHistory);

// Helper function to get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}


//copy btn functionality 

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const serviceName = this.getAttribute('data-service');
        const phoneNumber = this.getAttribute('data-phone');
        copyToClipboard(serviceName, phoneNumber);
    });
});

function copyToClipboard(serviceName, phoneNumber) {
    const textToCopy = `Service: ${serviceName}, Phone: ${phoneNumber}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard: ' + textToCopy);
        updateCopyCount(); // Update copy count
    }).catch(err => {
        console.error('Error copying text: ', err);
        // Fallback for older browsers
        fallbackCopyToClipboard(textToCopy);
    });
}

// Fallback copy function for older browsers
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        alert('Copied to clipboard: ' + text);
        updateCopyCount();
    } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
    }
    document.body.removeChild(textArea);
}

// Update copy count function
function updateCopyCount() {
    const copyCountSpan = document.querySelector('.copy-count span');
    let currentCount = parseInt(copyCountSpan.textContent);
    currentCount += 1;
    copyCountSpan.textContent = currentCount;
}