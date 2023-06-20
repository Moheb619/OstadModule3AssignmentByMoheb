function sendData() {
  var url = "https://api.example.com/submit";
  var data = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then(function (responseData) {
      console.log(responseData);
    })
    .catch(function (error) {
      console.log(error);
    });
}
