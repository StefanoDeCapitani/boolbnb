const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: 'wgq3fkn7kxw8jsg2',
  publicKey: '3t5tfrjb7fnmg23f',
  privateKey: '3fc86609b0efb48871b11a14b8defbe4'
});

gateway.clientToken.generate({
    customerId: aCustomerId
  }, (err, response) => {
    // pass clientToken to your front-end
    const clientToken = response.clientToken
  });