const imageContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');

let photoArray=[];
// unsplash API
const apiKey='g4OH7Y946zvpwB8On93oGkzriUeLe2YYxnUm35wa_Gg';
const count=10;
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to set attributes
function setAttributes(element,attributes){
    for(const key in attributes)
        element.setAttribute(key,attributes[key]);
}

function displayPhoto(){
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