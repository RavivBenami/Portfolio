function sendEmail(){

    if(document.getElementById('from_name').value == '' || document.getElementById('email').value == '' || document.getElementById('contact_message').value == ''){
        alert('please fill all the fields');
    }
   else{
    let temp = {
        from_name: document.getElementById('from_name').value ,
        email: document.getElementById('email').value,
        message: document.getElementById('contact_message').value
    }
     emailjs.send('service_tq20b7r','template_merfi08',temp)
    .then(function(res){
        console.log('success',res.status);
    })
   } 
   
}
