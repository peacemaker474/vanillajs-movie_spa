import { getAPI } from "../api/api";

const getUpcomingAPI = async () => {
    let state = {
        loading: true,
        upcoming: [],
    }
    try{
        if(state.loading) {
            const {
                data: {results: upcoming}
            } = await getAPI.upcoming();
            state.upcoming = [...upcoming];
        } else {
            throw Error("페이지를 새로고침 해주세요");
        }
    } catch (e) {
        console.log(e);
    } finally {
        state.loading = false;
    }

    return state.upcoming;
}

export default getUpcomingAPI;