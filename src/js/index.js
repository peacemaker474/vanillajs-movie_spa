import viewHeader from "./components/viewHeader";
import modalSearchForm from "./functions/headerModal";
import viewMain from "./components/viewMain";
import '../css/main.css';

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}

const router = () => {
    const routes = [
        {
            path: "/",
            view: () => {
                viewHeader();
                modalSearchForm();
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
            navigateTo(evt.target.href);
        }
    })
    router();
})