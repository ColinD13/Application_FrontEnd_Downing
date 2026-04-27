const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  if (data.player_id == "") {
    $.toaster({
      priority: "danger",
      title: "Error Message",
      message: "All values need inputted",
    });
  } else {
    console.log("Submitting:", data);
    fetch("https://application-backend-downing.onrender.com/api/players", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        player_id: data.player_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((error) => console.log());
    $.toaster({
      priority: "success",
      title: "Success Message",
      message: "Values have been submitted",
    });

    showNotification();
  }
});
