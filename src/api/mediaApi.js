import axios  from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXEL_KEY = import.meta.env.VITE_PEXELS_KEY


 export  async function fetchPhotos(query , page=1, per_page=20){
    const res =await axios.get('https://api.unsplash.com/search/photos',{
        params:{query , page ,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    console.log(res);
    
}


export async function fetchVideo(query , page, per_page){
   const res = await axios.get('https://api.pexels.com/videos/search',{
        params:{query , page,per_page},
        headers:{Authorization:PEXEL_KEY}
    })
    console.log(res);
    

}