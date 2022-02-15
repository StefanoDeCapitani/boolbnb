import tt from '@tomtom-international/web-sdk-services';
let form = document.getElementById('create-form-try')
let services = document.getElementById('services')
let lat = document.getElementById('lat')
let lng = document.getElementById('lng')




form.addEventListener("submit", function(event){
    console.log('ciaoo')
    event.preventDefault();
    const formData = new FormData(event.target)
    //  services.value =  formData.getAll('service')
    const address = formData.get('address')
    tt.services.geocode({
        key: 'xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR',
        limit:1,
        query: address
      }).then(result =>{   
         const latData = result.results[0].position.lat;
         const lngData = result.results[0].position.lng;
         lat.value = latData;
         lng.value = lngData;
         console.log('ciaooo')
         form.submit()
        


    });
})


 
