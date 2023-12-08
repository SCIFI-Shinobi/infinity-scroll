const imageContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');

let photoArray=[];
// unsplash API
const apiKey='g4OH7Y946zvpwB8On93oGkzriUeLe2YYxnUm35wa_Gg';
const count=10;
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhoto(){
   photoArray.forEach(photo=>{
//    create <a> to link to unsplash
   const item = document.createElement('a');
   item.setAttribute('src',photo.links.html);
   item.setAttribute('target','_blank');
//    create <img> for photo
    const img=document.createElement('img');
    img.setAttribute('href',photo.urls.regular);
    img.setAttribute('alt',photo.alt_description);
    img.setAttribute('title',photo.alt_description);
// put <img> inside <a>,then both inside the image container
   item.appendChild(img);
   imageContainer.appendChild(item);
   
   });
}

// get photos from unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhoto();
    }catch(error){
        // catch error 
    }
} 

getPhotos();