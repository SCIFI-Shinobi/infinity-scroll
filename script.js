const imageContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');

let ready=false;
let imagesLoaded=0;
let totalImages;
 
let photoArray=[];
let isIntialLoad=true;
// unsplash API
const apiKey='g4OH7Y946zvpwB8On93oGkzriUeLe2YYxnUm35wa_Gg';
const intialCount=5;
let apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${intialCount}`;

// check if all image is loaded
function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready=true;
       }
   }
// funtion to update apiUrl
function updateAPIURLWithNewCount(picCount){
    apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${picCount}`;
}
// helper function to set attributes
function setAttributes(element,attributes){
    for(const key in attributes)
        element.setAttribute(key,attributes[key]);
}

function displayPhoto(){
   imagesLoaded=0;
   totalImages=photoArray.length;
   photoArray.forEach(photo=>{
//    create <a> to link to unsplash
   const item = document.createElement('a');
   setAttributes(item,{
    href:photo.links.html,
    target:'_blank'
   });
//    create <img> for photo
    const img=document.createElement('img');
        setAttributes(img,{
        src:photo.urls.regular,
        alt:photo.alt_description,
        title:photo.alt_description
    }); 
    // event listner , check when each is finished loading
    img.addEventListener('load',imageLoaded);
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
        if(isIntialLoad){
            updateAPIURLWithNewCount(30);
            isIntialLoad=false;
        }
    }catch(error){
        // catch error 
    }finally{
        loader.hidden=true;
    
    }
}  

// check to see if the scroll bar near bottom , load more photos
  window.addEventListener('scroll',()=>{
   if((window.innerHeight+scrollY >= document.body.offsetHeight-1000 ) && ready){
    ready = false;
    getPhotos();
   }
  });

getPhotos();