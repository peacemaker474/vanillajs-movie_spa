const modalSearchForm = () => {
    const searchForm = document.querySelector(".modal-search");
    const searchLabel = document.querySelector(".modal-label");

    searchLabel.addEventListener("click", () => {
        searchForm.classList.toggle("modal-search");
    });
}

export default modalSearchForm;