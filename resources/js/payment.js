

const form = document.getElementById('payment-form');
let clientToken = document.getElementById('token').dataset.clienttoken

console.log(clientToken)


braintree.dropin.create({
  authorization: clientToken,
  container: '#dropin-container'
}, (error, dropinInstance) => {
  if (error) console.error(error);

  
  console.log(form)

  form.addEventListener('submit', event => {
    event.preventDefault();
    

    dropinInstance.requestPaymentMethod((error, payload) => {
      if (error) console.error(error);

      
      document.getElementById('nonce').value = payload.nonce;
      form.submit();
      
    });
  });

});




