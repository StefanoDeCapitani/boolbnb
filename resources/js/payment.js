
const basic = document.getElementById('basic');
const advanced = document.getElementById('advanced');
const elite = document.getElementById('elite');

const inputHiddenPlan = document.getElementById('plan') 
basic.addEventListener('click', addPlanToForm);
advanced.addEventListener('click', addPlanToForm);
elite.addEventListener('click', addPlanToForm);


function addPlanToForm(event) {
  const namePlan = event.target.attributes.id.nodeValue
  // console.log(event.target.attributes.id.nodeValue)
  inputHiddenPlan.value= namePlan
}

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
