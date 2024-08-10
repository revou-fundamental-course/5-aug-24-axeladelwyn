function calculateBMI() {  
    const weight = parseFloat(document.getElementById('weight').value);  
    const heightInCm = parseFloat(document.getElementById('height').value);  
    const resultElement = document.getElementById('result');  

    if (weight > 0 && heightInCm > 0) {  
        const heightInM = heightInCm / 100; // Convert height from cm to m  
        const bmi = weight / (heightInM * heightInM);  
        let category = '';  

        if (bmi < 18.5) {  
            category = 'Severely Underweight';  
        } else if (bmi < 24.9) {  
            category = 'Normal';  
        } else if (bmi < 29.9) {  
            category = 'Overweight';  
        } else {  
            category = 'Obese';  
        }  

        resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)} - ${category}`;  
    } else {  
        resultElement.innerHTML = 'Please enter valid weight and height.';  
    }  
}  


