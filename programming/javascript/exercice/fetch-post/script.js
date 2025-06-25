const form = document.querySelector("form");
const btn = document.querySelector(".buttonSubmit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const lastName = document.querySelector(".lastName");
  const firstName = document.querySelector(".firstName");
  const age = document.querySelector(".age");
  let lastValue = lastName.value;
  let firstValue = firstName.value;
  let ageValue = age.value;
  fetch("https://685a754b9f6ef96111567b88.mockapi.io/nameList", {
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
    .then((reponse) => reponse.json())
    .then((data) => {
      alert(
        `Bienvenue ${data.lastName} ${data.firstName} !`
      );
    });
});
