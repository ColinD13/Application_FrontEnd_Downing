const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    if(data.trade_id == ""){
        $.toaster({priority: 'danger', title : 'Error Message', message: 'All values need inputted'})
    }
    else{
       console.log("Submitting:", JSON.stringify({
          trade_id: data.trade_id,
          trade_date: data.trade_date,
        }));
       fetch('https://application-backend-downing.onrender.com/api/trades', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          trade_id: data.trade_id,
          trade_date: data.trade_date,
        })
       }).then(res => res.json())
       .then(data => console.log(data))
       .then(error => console.log())
       $.toaster({priority: 'success', title : 'Success Message', message: 'Values have been submitted'})
    }
})