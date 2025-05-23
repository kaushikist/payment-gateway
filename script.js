// Razorpay Integration
document.getElementById('rzp-button').onclick = function(e) {
    e.preventDefault();
    var options = {
        "key": "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
        "amount": "50000", // Amount in paisa (500.00 INR)
        "currency": "INR",
        "name": "Hope Haven Charity",
        "description": "Donation",
        "image": "favicon.jpg",
        "handler": function (response){
            alert("Thank you for your donation! Payment ID: " + response.razorpay_payment_id);
        },
        "prefill": {
            "name": "",
            "email": "",
            "contact": ""
        },
        "theme": {
            "color": "#005f73"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
};
