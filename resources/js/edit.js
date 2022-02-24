const inpFile = document.getElementById('inp');
const imageCont = document.getElementById('imagePreview')
const immagine = document.getElementById('immagine')
const iBox = document.getElementById('i-box')

// const inpMultiple = document.getElementById('file-input')
// const numOfFiles = document.getElementById('num-of-files')
// const imageContainer = document.getElementById('images')
// console.log(iBox)

// inpMultiple.addEventListener('change',function(){
//    imageContainer.innerHTML= ""
//     numOfFiles.textContent = `${this.files.length} File Selezionati `

//     for (i of this.files){


//         let readerMultiple = new FileReader();
//         let figure = document.createElement('figure');
//         let figCap = document.createElement('figcaption');
//         figCap.innerText = i.name;
//         figure.appendChild(figCap);
        
//         readerMultiple.addEventListener('load',function(){
//             let img = document.createElement('img');
//             figure.setAttribute('class','col-12 col-lg-4')
//             img.setAttribute('src',readerMultiple.result);
//             figure.insertBefore(img,figCap);
//         })
//         imageContainer.appendChild(figure);
//         readerMultiple.readAsDataURL(i)

        
        
//     }

// })

const valueInput = JSON.parse(inpFile.dataset.valueinp);
const ipActual = location.host;
console.log(ipActual)

immagine.setAttribute('src', `http://${ipActual}/${valueInput}`)
immagine.setAttribute('class','d-block')


iBox.addEventListener('click', function(){
    immagine.setAttribute('src','')
    immagine.setAttribute('class','d-none')
    
  })

inpFile.addEventListener('change',function(){
 let file = this.files[0]
 console.log(inpFile.files)

 console.log(file)
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