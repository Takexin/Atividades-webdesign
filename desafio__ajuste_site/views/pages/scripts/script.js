//  const myForm = document.getElementById("form");
//  var formInfo = new FormData(myForm);
 
//     myForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         var formElement = myForm.querySelectorAll("[name = 'q1'][checked]")
//         formInfo.append("q1", formElement.value);

//         fetch('/form', {
//             method: 'POST',
//             body: formInfo.json(),
//         })
//         .then(response => response.json()) 
//         .then(data => {
//             console.log("Response from server:", data); 
            
//         })})