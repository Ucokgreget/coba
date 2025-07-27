let timeoutID;

function startTime(){
    timeoutID = setTimeout(() => window.alert("Hello"), 3000)
    console.log("mulai")
}

function clearTime(){
    clearTimeout(timeoutID)
    console.log("berhenti")
}