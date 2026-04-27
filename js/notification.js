document.getElementById("notify").addEventListener("click", (e) =>{
    e.preventDefault();

    if(!("Notification" in window)){
        alert("This browser does not support desktop notifications");
        return;
    }

    if(Notification.permission === "granted"){
         showNotification();
    }
    else if(Notification.permission !== "denied"){
        Notification.requestPermission().then(permission => {
            if (permission === "granted"){
                 showNotification();
            }
        });
    }
});

function showNotification(){
    console.log("showNotification hit");
    new Notification("TEST");
}