// Your Code Here

// Retrieving list of books from the server
async function main() {
  let response = await fetch("http://localhost:3001/listBooks");
  let result = await response.json();
  console.log(result);
  result.forEach(renderBook);
}


// Display a list of book titles to the admin
function renderBook(book) {
  let bookContainer = document.getElementById("root");
  let li = document.createElement("li");
  li.textContent = book.title;
  let quantityInput = document.createElement("input");
  quantityInput.setAttribute("type", "number");
  quantityInput.value = book.quatity;

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";

  // Still need to get the PATCH method to update quantity!!!!
  saveButton.addEventListener("click", async () => {
    // let buttonResponse = 
    await fetch("http://localhost:3001/updateBook", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: book.id,
        quatity: quantityInput.value,
      }),
    });
    // let buttonResult = await buttonResponse.json();
    // console.log(buttonResult);
  });

  li.append(quantityInput, saveButton);
  bookContainer.append(li);
}

main();
