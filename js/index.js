//search most popular movies
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    //image url
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
//searched movie
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const movieBox=document.querySelector("#movie-box");

const getMovies=async(api)=>{
    const response= await fetch(api);
    const data= await response.json();
   // console.log(data);
   showMovies(data.results);
}

const showMovies=(data)=>{
    //reset the box and then search
    movieBox.innerHTML="";
    //console.log(data);
    data.forEach((item)=>{
        const box=document.createElement("div");
        box.classList.add("box");
        box.innerHTML=`<div class="box">
        <img src="${IMGPATH+item.poster_path}" alt="hey">
        <div class="overlay">
            <div class="title">
                <h2>${item.original_title}</h2>
                <span>${item.vote_average}</span>
            </div>
            <h2>overview</h2>
            <p>${item.overview}</p>
        </div>
    </div>`;
    movieBox.appendChild(box);
    })
}

document.querySelector("#search").addEventListener(
    "keyup", function(event){
       if(event.target.value!=""){
            getMovies(SEARCHAPI+event.target.value);
       }else{
            getMovies(APIURL)
       }
    }
)


//init call
getMovies(APIURL);