const inpFile = document.getElementById('inp');
const imageCont = document.getElementById('imagePreview')
const immagine = document.getElementById('immagine')
const iBox = document.getElementById('i-box')
const multipleDelete = iBox.cloneNode(true)
console.log(multipleDelete)

const inpMultiple = document.getElementById('file-input')
const numOfFiles = document.getElementById('num-of-files')
const imageContainer = document.getElementById('images')
const deletedImg = document.getElementById("deletedImg")
const valueInput = JSON.parse(inpFile.dataset.valueinp);
const ipActual = location.host;




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
    figure.appendChild(img);
    figure.appendChild(multipleDelete);
    figure.setAttribute('class','col-12 col-lg-4')
    img.setAttribute('src',`http://${ipActual}/${pathImg}`);
    imageContainer.appendChild(figure);
  });
})();



let imagesData = [];
inpMultiple.addEventListener('change',function(){

    numOfFiles.textContent = `${this.files.length + multipleValue.length} File Selezionati `
    console.log(inpMultiple.value)

    

    for (let file of this.files){
        imagesData.push(file)
       let currentFileIndex = imagesData.length - 1
    
        let readerMultiple = new FileReader();
        let figure = document.createElement('figure');
        let figCap = document.createElement('figcaption');
        let multipleDlt = multipleDelete.cloneNode(true)
        multipleDlt.addEventListener('click', function(){
            imagesData.splice(currentFileIndex,1)
            console.log(imagesData)
            console.log(currentFileIndex)

        })
        figure.appendChild(figCap);
        readerMultiple.addEventListener('load',function(){
            let img = document.createElement('img');
            figure.setAttribute('class','col-12 col-lg-4')
            img.setAttribute('src',readerMultiple.result);
            
            figure.insertBefore(img,figCap);
            figure.append(multipleDlt)

            
        })
        imageContainer.appendChild(figure);
        readerMultiple.readAsDataURL(file)
    }
inpMultiple.value = imagesData;
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