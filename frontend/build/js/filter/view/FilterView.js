export default class FilterView {
    filterByKeywords;
    filterHTML;
    constructor(filterByKeywords) {
        this.filterByKeywords = filterByKeywords;
        this.filterHTML = document.querySelector(".filter");
    }
    init = () => {
        console.log("FilterView initialized");
        this.handleFilter();
    };
    handleFilter = () => {
        const input = this.filterHTML.querySelector(".input input");
        const radioButtons = this.filterHTML.querySelectorAll("input[type='radio']");
        input.addEventListener("input", this.filterData);
        radioButtons.forEach((radio) => {
            radio.addEventListener("change", this.filterData);
        });
    };
    filterData = async () => {
        const input = this.filterHTML.querySelector(".input input");
        const keywords = input.value.split(",").map((keyword) => keyword.trim()).filter((keyword) => keyword !== "");
        const selectedRadio = this.filterHTML.querySelector("input[type='radio']:checked");
        const category = selectedRadio ? selectedRadio.parentElement?.textContent?.trim() : null;
        const allKeywords = [...keywords, category].filter((keyword) => typeof keyword === "string" && keyword.trim() !== ""); // Eliminar cualquier valor vacío
        if (allKeywords === null || allKeywords === undefined || allKeywords.length === 0)
            return;
        await this.filterByKeywords(allKeywords);
    };
    getFilterHTML = () => {
        return this.filterHTML;
    };
}
