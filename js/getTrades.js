// the { } here says take in a settings object for the grid to use

new gridjs.Grid ({
    search: true,
    sort:true,
    pagination: true, 
    fixedHeader: true,
    height: "90%",

    // list of columns [], each column is an object {}
    columns: [
        { name: "trade_id", width: "100px"},
        { name: "user_id_1", width: "100px"},
        { name: "user_id_2", width: "100px"},
        { name: "trade_date", width: "100px"}
    ],
    
    server: {
        url: "https://application-backend-downing.onrender.com/api/trades",
        then: (data) => {
            data.sort((a, b) =>b.trade_id - a.trade_id);
            // maps each player from the data into a row
            // map says go through each value in the data array and do something to it
            // nfl_players is each item that it is going through, passing it into the function
            // because of the [] we know it returns an array for each row from the data
            return data.map((trades) => [
                trades.trade_id,
                trades.user_id_1,
                trades.user_id_2,
                trades.trade_date
            ]);

            console.log(data)
        }
    }
}).render(document.getElementById("table"));