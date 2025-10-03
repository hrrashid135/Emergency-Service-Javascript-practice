

//heart button functionality
document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click', function() {
        updateHeartCount();
    });
});
function updateHeartCount() {
    let heartCount = parseInt(document.getElementById('heart-count-id').innerText);
    if(heartCount > 0) {
        heartCount += 1;
        document.getElementById('heart-count-id').innerText = heartCount;
    }   
    
};




function updateCoinCount(){
  let coinCount = parseInt(document.getElementById('coin-count-id').innerText);
  if(coinCount >= 20){
      coinCount -= 20;
      document.getElementById('coin-count-id').innerText = coinCount;
  }
}




function addToCallHistory(serviceName, phoneNumber) {
    // Get the call history container
    const historyContainer = document.querySelector('.card-container-id');
    
    // Create the call history item HTML
    const callHistoryCard = `
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
    historyContainer.insertAdjacentHTML('afterbegin', callHistoryCard);
    
    //add clear history functionality
    
    
}
//clear call history functionality
function clearCallHistory() {
    
    const historyContainer = document.querySelector('.card-container-id');
    
    
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



//copy button functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const emergencyCard = this.closest('.emergency-card');
        const serviceName = emergencyCard.querySelector('h1').innerText;
        const phoneNumber = emergencyCard.querySelectorAll('h1')[1].innerText;
        copyToClipboard(serviceName, phoneNumber);
    });
});

function copyToClipboard(serviceName, phoneNumber) {
    const textToCopy = `Service: ${serviceName}, Phone: ${phoneNumber}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard: ' + textToCopy);
        updateCopyCount();
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}





// Update copy count function
function updateCopyCount() {
    const copyCountSpan = document.querySelector('.copy-count span');
    let currentCount = parseInt(copyCountSpan.textContent);
    currentCount += 1;
    copyCountSpan.textContent = currentCount;
}


//call button functionality 

document.querySelectorAll('.call-common').forEach(button => {
    button.addEventListener('click', function() {
        const emergencyCard = this.closest('.emergency-card');
        const serviceName = emergencyCard.querySelector('h1').innerText;
        const phoneNumber = emergencyCard.querySelectorAll('h1')[1].innerText;
        makeCall(serviceName, phoneNumber);
    });
});

function makeCall(serviceName, phoneNumber) {
    // Simulate making a call
    console.log('Calling:', phoneNumber);
    alert('Calling: ' + phoneNumber + " for " + serviceName);
    updateCoinCount();
    addToCallHistory(serviceName, phoneNumber);
}
