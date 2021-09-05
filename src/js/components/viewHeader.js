const viewHeader = () => {
    const headerTemplate = `
        <header>
            <nav class="main_nav">
                <ul class="main-nav__lists">
                    <li class="main-nav__main-logo">
                        <a href="/" data-link class="main-logo__container">1405</a>
                    </li>
                    <li class="main-nav__list main-nav__movie">
                        <a href="/main" data-link> 영화 </a>
                    </li>
                    <li class="main-nav__list main-nav__tvShow">
                        <a href="/main" data-link> TV 프로그램 </a>
                    </li>
                    <li class="main-nav__list main-nav__develope">
                        <a href="/main" data-link> 개발중 </a>
                    </li>
                    <li class="main-nav__list main-nav__search">
                        <form class="search-form modal-search">
                            <input type="text" placeholder="영화 제목을 입력하세요" class="search-form__input" />
                            <label class="seacrh-form__label modal-label"></label>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    `;
    
    document.getElementById("root").innerHTML = headerTemplate;
}

export default viewHeader;
