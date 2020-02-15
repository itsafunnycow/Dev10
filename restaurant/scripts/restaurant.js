function checkForm() {
  if (document.getElementById("name").value != "" &&
      document.getElementById("email").value != "" &&
      document.getElementById("phone").value != "" &&
      document.getElementById("M").checked ||
      document.getElementById("T").checked ||
      document.getElementById("W").checked ||
      document.getElementById("Th").checked ||
      document.getElementById("F").checked) {
        alert("Form entries are valid.")
      } else {
        alert("Please fill in all fields.")
      }
}
