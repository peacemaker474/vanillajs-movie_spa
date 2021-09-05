import {getAPI} from '../api/api';

const getMovieDetail = async () => {
    const findIndex = location.pathname.lastIndexOf("/") + 1;
    let id = location.pathname.slice(findIndex);

    let state = {
        loading: true,
        detail: null,
    }
    
    try{
        if(state.loading) {
            const {
                data: detail
            } = await getAPI.movieDetail(id);
            state.detail = detail;
        } else {
            throw Error("페이지를 새로고침 해주세요.");
        }
    }catch (e) {
        console.log(e);
    }finally{
        state.loading = false;
    }

    return state.detail;
}


export default getMovieDetail;