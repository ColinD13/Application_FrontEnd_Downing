const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    console.log("Hit start of post");
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    if(data.id == "" || data.position == "" || data.name == "" || data.nfl_team == ""){
        $.toaster({priority: 'danger', title : 'Error Message', message: 'All values need inputted'})
    }
    else{
       console.log("Hit else of post");
       fetch('https://application-backend-downing.onrender.com/api/players', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
       }).then(res => res.json())
       .then(data => console.log(data))
       .then(error => console.log())
       $.toaster({priority: 'success', title : 'Success Message', message: 'Values have been submitted'})
    }
    console.log("Hit end of post");
})