const form = document.querySelector("form");
const btn = document.querySelector(".buttonSubmit");
let lastValue;
let firstValue;
let ageValue;

const url = "https://685a754b9f6ef96111567b88.mockapi.io/nameList";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const lastName = document.querySelector(".lastName");
  const firstName = document.querySelector(".firstName");
  const age = document.querySelector(".age");
  lastValue = lastName.value;
  firstValue = firstName.value;
  ageValue = age.value;
  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lastName: lastValue,
      firstName: firstValue,
      age: ageValue,
    }),
  })
    .then((reponse) => 
      {return reponse.json()})
    .then((data) => {
      alert(
        `Bienvenue ${data.lastName} ${data.firstName} !`
      );
    });  
});
