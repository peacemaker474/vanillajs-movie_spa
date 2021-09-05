import viewHeader from "./js/components/viewHeader";
import modalSearchForm from "./js/functions/headerModal";
import viewMain from "./js/components/viewMain";
import viewUpcoming from "./js/components/viewUpcoming";
import viewDetail from './js/components/viewDetail';

const navigateTo = (url, id) => {
    history.pushState(null, null, url);
    router(id);
}

const router = (id) => {
    const routes = [
        {
            path: "/",
            view: () => {
                viewHeader();
                modalSearchForm();
                viewMain();
                viewUpcoming();
            }
        },
        {
            path: "/main",
            view: () => {
                viewHeader();
                modalSearchForm();
                viewMain();
            }
        },
        {
            path: `/detail/${id}`,
            view: () => {
                viewHeader();
                viewMain();
                viewDetail();
            }
        }
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }
    match.route.view();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", evt => {
        if(evt.target.matches("[data-link]")) {
            evt.preventDefault();
            navigateTo(evt.target.href, evt.target.id);
        }
    })
    router();
})

export default router;