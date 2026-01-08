function calculateBMI(weight, height) {
  // Formula: BMI = weight / (height²)
  let bmi = weight / (height * height);
  
  // Determine the category
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

// Example usage:
console.log(calculateBMI(50, 1.6));  // 50kg, 1.6m → "ideal"
console.log(calculateBMI(80, 1.6));  // 80kg, 1.6m → "very overweight"
console.log(calculateBMI(120, 1.6)); // 120kg, 1.6m → "obesity"
