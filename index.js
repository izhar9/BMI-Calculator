 
const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); /* jab bhi submit button par click karte hai to form get ya post method 
                    se server par submit ho jata hai,use prevent(rokne) ke liye e.preventDefault use karte hai */

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi < 18.6) {
        results.innerHTML = `under Weight : <span>${bmi}</span>`
    }
    else if (bmi > 18.6 && bmi < 24.9) {
        results.innerHTML = `Normal Weight : <span>${bmi}</span>`
    }else{
        results.innerHTML = `OverWeight : <span>${bmi}</span>`

    }
  }
});
