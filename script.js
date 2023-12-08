// unsplash API
const apiKey='g4OH7Y946zvpwB8On93oGkzriUeLe2YYxnUm35wa_Gg';
const count=10;
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// get photos from unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data= await response.json();
        console.log(data);
    }catch(error){
        // catch error 
    }
} 

getPhotos();