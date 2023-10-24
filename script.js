let movies =
    [
        {
            name: "Lagaan",
            poster: "https://m.media-amazon.com/images/I/7123Hl1qhsL._AC_UF1000,1000_QL80_.jpg",
            rating: 9.1,
            trailer: "https://www.youtube.com/embed/rxWhke_3fbQ?autoplay=1&rel=0&controls=0&mute=1",
            starcast: "Amir khan"
        },
        {
            name: "Ra.one",
            poster: "https://i.pinimg.com/originals/2e/17/77/2e1777df1d77833465e06bfbe04301ec.jpg",
            rating: 7.8,
            trailer: "https://www.youtube.com/embed/MjE1CK5PGrk?autoplay=1&rel=0&controls=0&mute=1",
            starcast: "Shahrukh khan,Kareena kapoor"
        },
        {
            name: "Jawaan",
            poster: "https://pbs.twimg.com/media/FUY92MSaAAE-HTz?format=jpg&name=4096x4096",
            rating: 8.5,
            trailer: "https://www.youtube.com/embed/COv52Qyctws?autoplay=1&rel=0&controls=0&mute=1",
            starcast: "Shahrukh khan,Sanjay dutt,Sunil grover"
        },
        {
            name: "Sanju",
            poster: "https://m.media-amazon.com/images/M/MV5BMjI3NTM1NzMyNF5BMl5BanBnXkFtZTgwOTE4NTgzNTM@._V1_.jpg",
            rating: 9.2,
            trailer: "https://www.youtube.com/embed/1J76wN0TPI4?autoplay=1&rel=0&controls=0&mute=1",
            starcast: "Ranveer kapoor,Sonam kapoor,Anushka sharma"
        },
        {
            name: "Rockstar",
            poster: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0543e414960770.560379c5290a8.jpg",
            rating: 9.1,
            trailer: "https://www.youtube.com/embed/bD5FShPZdpw?autoplay=1&rel=0&controls=0&mute=1",
            starcast: "Ranveer kapoor"
        },
        {
            name: "Guzarish",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMzMzIzOTQwOF5BMl5BanBnXkFtZTcwMTI2MTYxNA@@._V1_.jpg",
            rating: 10,
            trailer: "https://www.youtube.com/embed/k4ntf6XWFKE?autoplay=1&rel=0&controls=0&mute=1",
            starcast: "Hrithik roshan,Aishwariya ray"
        },
        {
            name: "Chhichhore",
            poster: "https://m.media-amazon.com/images/M/MV5BNmQ1ZWVkYzctYzlmNy00MTMxLWEwZmItM2I4ZTRhNjY5ODBjXkEyXkFqcGdeQXVyMTA1MzU4Mjk5._V1_.jpg",
            rating: 9.1,
            trailer: "https://www.youtube.com/embed/tsxemFX0a7k?autoplay=1&rel=0&controls=0&mute=1",
            starcast: "Sushant singh rajput,Shraddha kapoor"
        },
        {
            name: "Zindagi Na Milegi Dobara",
            poster: "https://m.media-amazon.com/images/I/818gvtO-taL._AC_UF1000,1000_QL80_.jpg",
            rating: 8.7,
            trailer: "https://www.youtube.com/embed/FJrpcDgC3zU?autoplay=1&rel=0&controls=0&mute=1",
            starcast: "Hrithik roshan,Farhan khan,katrina kaif"
        }
    ];

function searchMovie() {
    let movieName = document.getElementById('search').value;

    if (movieName !== "") {
        let result = movies.filter(function (movie) {
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })

        displayMovies(result);
    }
    else {
        displayMovies(movies);
    }

};

function displayMovies(data) {

    document.getElementById("movies").innerHTML = "";

    let htmlString = ``;

    for (let i = 0; i < data.length; i++) {
        htmlString = htmlString + `
        <div class="movie">
        <div class="overlay">
            <div class="video">
            <iframe src="${data[i].trailer}" width="100%" height="100%" title="A YouTube video" frameborder="0" ></iframe>

            </div>


            <div class="details">
                <h1>${data[i].name}</h1>
                <h2>IMDB:${data[i].rating}</h2>
                <p>${data[i].starcast}</p>
            </div>
        </div>
        <img src="${data[i].poster}"
            class="poster">
    </div>
`
    }
    console.log(htmlString);

    document.getElementById("movies").innerHTML = htmlString;
}

displayMovies(movies);







// {
//     let movie=document.createElement("div");
//     movie.classList.add("movie");

//     let overlay=document.createElement("div");
//     overlay.classList.add("overlay");

//     movie.appendChild(overlay);
// }



{/* <div class="one"></div> */ }
// let movie = document.createElement("div")
// movie.classList.add('one')
