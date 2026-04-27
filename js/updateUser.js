const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    if(data.user_name == "" || data.user_id == ""){
        $.toaster({priority: 'danger', title : 'Error Message', message: 'All values need inputted'})
    }
    else{
       console.log("Submitting:", JSON.stringify({
          user_id: parseInt(data.user_id),
          name: data.user_name,
        }));
       fetch('https://application-backend-downing.onrender.com/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: parseInt(data.user_id),
          name: data.user_name,
        })
       }).then(res => res.json())
       .then(data => console.log(data))
       .then(error => console.log())
       $.toaster({priority: 'success', title : 'Success Message', message: 'Values have been submitted'})
    }
    showNotification();
})