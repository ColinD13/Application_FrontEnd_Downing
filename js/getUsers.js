// the { } here says take in a settings object for the grid to use

new gridjs.Grid ({
    search: true,
    sort:true,
    pagination: true, 
    fixedHeader: true,
    height: "90%",

    // list of columns [], each column is an object {}
    columns: [
        { name: "user_id", width: "100px"},
        { name: "name", width: "100px"},
    ],
    
    server: {
        url: "https://application-backend-downing.onrender.com/api/users",
        then: (data) => {
            data.sort((a, b) =>b.user_id - a.user_id);
            // maps each player from the data into a row
            // map says go through each value in the data array and do something to it
            // nfl_players is each item that it is going through, passing it into the function
            // because of the [] we know it returns an array for each row from the data
            return data.map((trades) => [
                trades.user_id,
                trades.name,
            ]);

            console.log(data)
        }
    }
}).render(document.getElementById("table"));