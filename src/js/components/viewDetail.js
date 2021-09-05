import getMovieDetail from "../functions/movieDetailData";

const viewDetail = async () => {
    let detailData = await getMovieDetail();
    document.querySelector("header").style.height = `100px`;

    const detailS = document.createElement("section");

    detailS.className = `movie-detail`;
    document.querySelector("main").append(detailS);

    let detailTemplete = `
        <div class="detail__container">
            <div class="detail__backdrop-img" style="background-image:url(https://image.tmdb.org/t/p/original${detailData.backdrop_path}")>
            </div>
            <div class="detail__movie-content">
                <div class="detail__movie-cover" style="background-image:url(https://image.tmdb.org/t/p/original${detailData.poster_path}">
                </div>
                <div class="detail__movie-information">
                    <h3 class="detail__movie-title"> ${detailData.title} </h3>
                    <div class="detail__movie-generes">
                        <span class="openDt">
                            ${detailData.release_date && detailData.release_date.substring(0, 4)}년
                        </span>
                        <span class="running-time">
                            ${detailData.runtime}분
                        </span>
                        <span class="geners">
                            ${detailData.genres &&
                                detailData.genres.map((genre, index) =>
                                    index === detailData.genres.length - 1 ? genre.name : `${genre.name} ` 
                            )} 
                        </span>
                    </div>
                    <p class="detail__movie-description">
                        ${detailData.overview}
                    </p>
                </div>
            </div>
        </div>
    `;
    
    document.querySelector(".movie-detail").innerHTML = detailTemplete;
}

export default viewDetail;