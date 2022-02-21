const braintree = require("braintree");


const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: 'wgq3fkn7kxw8jsg2',
  publicKey: '3t5tfrjb7fnmg23f',
  privateKey: '3fc86609b0efb48871b11a14b8defbe4'
});

let authorization= null

gateway.clientToken.generate({
  /* customerId: aCustomerId */
}, (err, response) => {
  // pass clientToken to your front-end
  authorization = response.clientToken
});

console.log(authorization)

braintree.dropin.create({
  container: document.getElementById('dropin-container'),
  // ...plus remaining configuration
  
  /* authorization: this.authorization */
  
}, (error, dropinInstance) => {
  // Use `dropinInstance` here
  // Methods documented at https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html
});




