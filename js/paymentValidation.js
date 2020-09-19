function formValidation() {
    var uname = document.getElementById('username').value
    var cnum = document.getElementById('cardNumber').value
    var cvv = document.getElementById('cvv').value
    var onlyNum = /^[0-9]+$/;
    var letters = /^[A-Za-z]+$/;  
    var cardno = /^(?:3[47][0-9]{13})$/;
    // var emailre = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    // var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    // var dayre=/^[1-9]|[12]\d|3[01]$/;
    // var yearre=/^\d{4}$/;
    var isValid = true;
    if (!(uname.match(letters))) {
        isValid = false
        alert('Name contains only characters')
        document.getElementById('username').focus()
        return isValid;
    }
    if (!(cnum.match(onlyNum) && cnum.length==16)) {
        
        isValid = false
        alert('Only 10 digit numbers')
        document.getElementById('cardNumber').focus()
        return isValid;
    }

    if (!(cvv.match(onlyNum) && cvv.length==3)) {
        isValid = false
        alert('only 3 digit number')
        document.getElementById('cvv').focus()
        return isValid;
    }

    
   alert("Successfully you registered for the event. You will be redirected to the home page")
    return isValid
}