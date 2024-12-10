function myFunction() {
  console.log("hello");

  const displayArea = document.getElementById("display-area");
  const form = document.getElementById("myForm");

  const firstInputValue = form.elements[0].value;
  displayArea.innerText = `Value of first input: ${firstInputValue}`;

  let allValues = "All form values:\n";
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type === "text") {
      allValues += `${form.elements[i].name}: ${form.elements[i].value}\n`;
    }
  }

  displayArea.innerText += `\n\n${allValues}`;
}
