const formEl = document.querySelector(".form");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  if (data.name == "") {
    $.toaster({
      priority: "danger",
      title: "Error Message",
      message: "All values need inputted",
    });
  } else {
    const tradeRes = await fetch(
      "https://application-backend-downing.onrender.com/api/trades",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trade_date: data.trade_date,
          user_id_1: data.user_id_1,
          user_id_2: data.user_id_2,
        }),
      },
    );

    const trade = await tradeRes.json();
    const trade_id = trade.trade_id;

    console.log({
      trade_id,
      player_id_1: data.player_id_1,
      player_id_2: data.player_id_2,
      user_id_1: data.user_id_1,
      user_id_2: data.user_id_2
    });

    ///first trade player
    await fetch(
      "https://application-backend-downing.onrender.com/api/trades_info",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trade_id,
          player_id: data.player_id_1,
          direction_sent_to: "user_1",
        }),
      },
    );

    ///second trade player
    await fetch(
      "https://application-backend-downing.onrender.com/api/trades_info",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trade_id,
          player_id: data.player_id_2,
          direction_sent_to: "user_2",
        }),
      },
    );

    $.toaster({
      priority: "success",
      title: "Success Message",
      message: "Trade submitted successfully",
    });

    showNotification();
  }
});
