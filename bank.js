window.addEventListener('load', () => {
    document.getElementById("deposit-btn").addEventListener("click", () => {
        depositWithdraw("deposit");
    });

    document.getElementById("withdraw-btn").addEventListener("click", () => {
        depositWithdraw("withdraw");
    });
});

function depositWithdraw(word) {
    const input = document.getElementById(`${word}-input`);
    const total = document.getElementById(`${word}-total`);
    const balance = document.getElementById("balance");

    if (parseFloat(input.value) > 0) {
        document.getElementById(`invalid-${word}`).style.display = "none";
        total.innerText = parseFloat(total.innerText) + parseFloat(input.value);

        if (word == "deposit") {
            balance.innerText = parseFloat(balance.innerText) + parseFloat(input.value);
        } else if (word == "withdraw") {
            balance.innerText = parseFloat(balance.innerText) - parseFloat(input.value);
        }
        input.value = "";
    } else {
        input.value = "";
        document.getElementById(`invalid-${word}`).style.display = "block";
    }
}