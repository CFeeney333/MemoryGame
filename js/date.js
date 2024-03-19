const dateElem = document.getElementById("date-content");

const currentDate = new Date();
dateElem.textContent = currentDate.toLocaleDateString("en-IE");