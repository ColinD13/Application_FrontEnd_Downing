function showNotification(){
    console.log("showNotification hit");

    if(!("Notification" in window)){
        alert("This browser does not support desktop notifications");
        return;
    }

    if(Notification.permission === "granted"){
        new Notification("Information Updated!");
    } else if(Notification.permission !== "denied"){
        Notification.requestPermission().then(permission => {
            if(permission === "granted"){
                new Notification("Information Updated!");
            }
        });
    }
}