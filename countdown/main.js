 const coundownForm = document.getElementById("countdownForm")
 const countdownDateInput = document.getElementById("countdownDate")
 const countdownDisplay = document.getElementById("countdown")
 let countdownInterval

 coutdownForm.addEventListener("submit", startCountdown)

 function startCountdown(e){
    e.preventDefault()
    const countdownDate = new Date(countdownDateInput.value).getTime()
    if(isNaN(countdownDate)){
        alert("Please select a valid date and Time")
        return
    }
    countdownInterval = setInterval(updateCountdown, 1000)
    function updateCountdown(){
        const now = new Date().getTime()
        const timeRemaining = countdownDate - now;
        if(timeRemaining <= 0){
            clearInterval(countdownInterval)
            countdownDisplay.textContent = "Event Time Has Arrived"
        } else{
            const hours = Math.floor(timeRemaining / (1000 * 60 ^))
            const minutes = Math.floor((timeRemaining & (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
            countdownDisplay.textContent = `${formatTime(hours) : ${formatTime(minutes)}}`
        }
    }
 }