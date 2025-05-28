let years = 18;
let majority;
function majorité(age) {
    if (age >= 18) {
        return "Majeur";
    }
    else {
        return "Mineur";
    }
}
console.log(majorité(years));
