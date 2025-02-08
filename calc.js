let calculation = localStorage.getItem('calculation') || '';
  let var1 = '';
  let var2 = '';

  function updateDisplay(value){

    calculation = calculation + value;
    //display the calculation
    document.querySelector('.js-calculator-display').innerHTML = calculation;

    localStorage.setItem('calculation', calculation);

  }

  function clearDisplay() {
    document.querySelector('.js-calculator-display').innerHTML = '';
    calculation = ''
    localStorage.setItem('calculation', calculation);
  };

  function calc() {
    var1 = document.querySelector('.js-calculator-display').innerHTML
    console.log(var1);
    clearDisplay();
    return var1;
  } 

  function equals(){
    var2 = document.querySelector('.js-calculator-display').innerHTML
    console.log(var2);
    result = Number(var1) + Number(var2);
    console.log(result);
    document.querySelector('.js-calculator-display').innerHTML = result;
  }

  function del(){
      const display = document.querySelector('.js-calculator-display');
      display.innerHTML = display.innerHTML.slice(0, -1);
      calculation = display.innerHTML
      localStorage.setItem('calculation', calculation);
    }
    