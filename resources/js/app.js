require("./bootstrap");
 const inpFile = document.getElementById('inp');
const imageCont = document.getElementById('imagePreview')
const immagine = document.getElementById('immagine')

inpFile.addEventListener('change',function(){
 const file = this.files[0]
 console.log(file)
 if (file) {
     const reader = new FileReader();
     console.log(reader)

     reader.addEventListener('load',function(){
         
         immagine.setAttribute('src',this.result)
         immagine.setAttribute('class','d-block')
     })

     reader.readAsDataURL(file)
 }

})
