 const myForm = document.getElementById("formTest");
 var formInfo = new FormData(myForm);
 
    myForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        var data = await fetch("/test");
        data.text().then(value =>{
            document.getElementById("formTestRes").innerHTML = value;
        })
        // fetch('/form', {
        //     method: 'POST',
        //     body: formInfo.json(),
        // })
        // .then(response => response.json()) 
        // .then(data => {
        //     console.log("Response from server:", data); 
            
        })

const promptForm = document.getElementById("promptForm");
promptForm.addEventListener("submit", async(event) =>{
    event.preventDefault();
    var promptText = document.getElementById("prompt").value;
    console.log(prompt);
    const response = await fetch("/prompt", {
        headers: {"Content-Type" : "application/json"},
        method: "POST",
        body: JSON.stringify({prompt: promptText}),
    });
    response.text().then(value =>{
        document.getElementById("formOutput").innerHTML = value;
    })
})
