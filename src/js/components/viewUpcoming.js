import getUpcomingAPI from "../functions/upcomingData";


const viewUpcoming = async () => {
    const upcomingLists = await getUpcomingAPI();

    const upcoming = document.createElement("section");

    upcoming.className = `upcoming`;
    document.querySelector("main").append(upcoming);
    
    let upcomingTemplate = `
        <h2 class="upcoming__title"> 곧 개봉할 영화 </h2>
        <div class="upcoming__lists">
            {{upcoming-list}}
        </div>
    `;

    const upcomingList = [];

    upcomingLists.forEach(element => {
        upcomingList.push(`
            <a href="/detail/${element.id}" data-link id="${element.id}" class="upcoming-list__content">
                <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="poster" />
                <div class="content_movie-information">
                    <h3 class="content__movie-title"> ${element.title} </h3>
                    <span class="content__movie-data"> ${element.release_date.slice(0, 4)} </span>
                    <span class="content__movie-ration"> 평점 ⭐️ ${element.vote_average} </span>
                </div>
            </a>
        `);
    })

    upcomingTemplate = upcomingTemplate.replace("{{upcoming-list}}", upcomingList.join(''));

    document.querySelector(".upcoming").innerHTML = upcomingTemplate;
}


export default viewUpcoming;