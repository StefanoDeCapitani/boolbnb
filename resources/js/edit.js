const inpFile = document.getElementById('inp');
const imageCont = document.getElementById('imagePreview')
const immagine = document.getElementById('immagine')
const iBox = document.getElementById('i-box')

const inpMultiple = document.getElementById('file-input')
const numOfFiles = document.getElementById('num-of-files')
const imageContainer = document.getElementById('images')
const valueInput = JSON.parse(inpFile.dataset.valueinp);
const ipActual = location.host;
console.log(iBox)

const multipleValue = JSON.parse(inpMultiple.dataset.multipleimg)
console.log(multipleValue);

(function multipleImg(){
   multipleValue.forEach(path => {
   
    const pathImg = path.path
    console.log(pathImg)
    numOfFiles.textContent = `${multipleValue.length} File Selezionati `
    let figure = document.createElement('figure');
    let figCap = document.createElement('figcaption');
    let img = document.createElement('img');
    figure.appendChild(img,figCap);
    figure.setAttribute('class','col-12 col-lg-4')
    img.setAttribute('src',`http://${ipActual}/${pathImg}`);
    imageContainer.appendChild(figure);
  });

  



})();

inpMultiple.addEventListener('change',function(){
   imageContainer.innerHTML= ""
    numOfFiles.textContent = `${this.files.length} File Selezionati `

    for (i of this.files){
        let readerMultiple = new FileReader();
        let figure = document.createElement('figure');
        let figCap = document.createElement('figcaption');
      
        figure.appendChild(figCap);
        readerMultiple.addEventListener('load',function(){
            let img = document.createElement('img');
            figure.setAttribute('class','col-12 col-lg-4')
            img.setAttribute('src',readerMultiple.result);
            figure.insertBefore(img,figCap);
        })
        imageContainer.appendChild(figure);
        readerMultiple.readAsDataURL(i)
    }

});


(function imagePreview(){  
  immagine.setAttribute('src', `http://${ipActual}/${valueInput}`)
  immagine.setAttribute('class','d-block')
  iBox.addEventListener('click', function(){
      immagine.setAttribute('src','')
      immagine.setAttribute('class','d-none')
    })
})();



inpFile.addEventListener('change',function(){
 let file = this.files[0]

 if (file) {
     const reader = new FileReader();
     console.log(reader)



     reader.addEventListener('load',function(){
         
         immagine.setAttribute('src',this.result)
         immagine.setAttribute('class','d-block')
     })

     iBox.addEventListener('click', function(){
        console.log(file)
        file = null
        immagine.setAttribute('src','')
        immagine.setAttribute('class','d-none')
        
      })

 
     reader.readAsDataURL(file)
 }
   

})