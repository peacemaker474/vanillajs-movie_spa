import viewHeader from "./components/viewHeader";
import viewMain from "./components/viewMain";

const navigateTo = (url) => {
    history.pushState(null, null, url);
    console.log(url);
    router();
}

const router = () => {
    const routes = [
        {
            path: "/",
            view: () => {
                viewHeader();
            }
        },
        {
            path: "/main",
            view: () => {
                viewHeader();
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
    console.log(match);
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