let celsiusInput = document.getElementById("celcius");
let fahrenheitInput = document.getElementById("fahrenheit");

celsiusInput.addEventListener("input", function () {
    let celsiusValue = this.value;

    if (celsiusValue != "") {
        let fahrenheitValue = (celsiusValue * 9) / 5 + 32;

        if (!Number.isInteger(fahrenheitValue)) {
            fahrenheitValue = fahrenheitValue.toFixed(4);
        }

        fahrenheitInput.value = fahrenheitValue;
    } else {
        fahrenheitInput.value = "";
    }
});

fahrenheitInput.addEventListener("input", function () {
    let fahrenheitValue = this.value;

    if (fahrenheitValue != "") {
        let celsiusValue = (5 / 9) * (fahrenheitValue - 32);

        if (!Number.isInteger(celsiusValue)) {
            celsiusValue = celsiusValue.toFixed(4);
        }

        celsiusInput.value = celsiusValue;
    } else {
        celsiusInput.value = "";
    }
});
