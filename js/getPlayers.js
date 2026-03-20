// the { } here says take in a settings object for the grid to use

new gridjs.Grid ({
    search: true,
    sort:true,
    pagination: true, 
    fixedHeader: true,
    height: "90%",

    // list of columns [], each column is an object {}
    columns: [
        { name: "player_id", width: "100px"},
        { name: "position", width: "100px"},
        { name: "name", width: "100px"},
        { name: "nfl_team", width: "100px"}
    ],
    
    server: {
        url: "https://application-backend-downing.onrender.com/api/players",
        then: (data) => {
            data.sort((a, b) =>b.player_id - a.player_id);
            // maps each player from the data into a row
            // map says go through each value in the data array and do something to it
            // nfl_players is each item that it is going through, passing it into the function
            // because of the [] we know it returns an array for each row from the data
            return data.map((nfl_players) => [
                nfl_players.player_id,
                nfl_players.position,
                nfl_players.name,
                nfl_players.nfl_team
            ]);
        }
    }
}).render(document.getElementById("table"));