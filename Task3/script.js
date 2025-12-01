function convertTemp() {
    let input = document.getElementById("tempInput").value;
    let unit = document.getElementById("unitSelect").value;
    let resultBox = document.getElementById("result");

    // Validate input
    if (isNaN(input) || input === "") {
        resultBox.innerHTML = "❌ Please enter a valid number.";
        return;
    }

    let temp = parseFloat(input);
    let converted = "";
    let convertedUnit = "";

    // Conversion logic
    if (unit === "C") {
        converted = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F <br>
                     Kelvin: ${(temp + 273.15).toFixed(2)} K`;
    }
    else if (unit === "F") {
        converted = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C <br>
                     Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
    }
    else if (unit === "K") {
        converted = `Celsius: ${(temp - 273.15).toFixed(2)} °C <br>
                     Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }

    resultBox.innerHTML = "✔ Converted Values:<br>" + converted;
}
