function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function verifySubButton() {
    let testEmail = document.querySelector(".entryEmail").value;
    const isValid = isValidEmail(testEmail);
    if (isValid) {
        const mainCard = document.querySelector(".cardContainer");
        const successMsg = document.querySelector(".successMsgContainer");
        mainCard.style.display = "none";
        successMsg.style.display = "flex";
    } else {
        const erroEmailMsg = document.querySelector(".errorMsg");
        const emailInput = document.querySelector(".entryEmail");
        erroEmailMsg.style.display = "flex";
        emailInput.style.borderColor = "hsl(4, 100 %, 67 %)";
        emailInput.style.color = "hsl(4, 100 %, 67 %)";
        emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.3)";
    }
}

