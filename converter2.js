console.log("hello world");

document.addEventListener('DOMContentLoaded', function() {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  console.log(fahrenheitInput);

  // Convert Celsius to Fahrenheit
  celsiusInput.addEventListener('input', function() {
      const celsius = parseFloat(celsiusInput.value);
      if (celsius) {
          const fahrenheit = (celsius * 9/5) + 32;
          fahrenheitInput.value = fahrenheit.toFixed(2);
      } else {
          fahrenheitInput.value = '';
      }
  });

  // Convert Fahrenheit to Celsius
  fahrenheitInput.addEventListener('input', function() {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      if (fahrenheit) {
          const celsius = (fahrenheit - 32) * 5/9;
          celsiusInput.value = celsius.toFixed(2);
      } else {
          celsiusInput.value = '';
      }
  });
}); //what the fuck
