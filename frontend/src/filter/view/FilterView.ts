export default class FilterView {
  private readonly filterHTML;

  constructor(readonly filterByKeywords: (keywords: string[]) => Promise<void>) {
    this.filterHTML = document.querySelector(".filter") as HTMLElement;
  }

  readonly init = () => {
    console.log("FilterView initialized");
    this.handleFilter();
  };

  readonly handleFilter = () => {
    const input = this.filterHTML.querySelector(".input input") as HTMLInputElement;
    const radioButtons = this.filterHTML.querySelectorAll("input[type='radio']") as NodeListOf<HTMLInputElement>;
    input.addEventListener("input", this.filterData);
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", this.filterData);
    });
  };

  readonly filterData = async () => {
    const input = this.filterHTML.querySelector(".input input") as HTMLInputElement;
    const keywords = input.value.split(",").map((keyword) => keyword.trim()).filter((keyword) => keyword !== "");

    const selectedRadio = this.filterHTML.querySelector("input[type='radio']:checked") as HTMLInputElement;
    const category = selectedRadio ? selectedRadio.parentElement?.textContent?.trim() : null;

    const allKeywords = [...keywords, category].filter((keyword): keyword is string => typeof keyword === "string" && keyword.trim() !== ""); // Eliminar cualquier valor vacío
    if(allKeywords === null || allKeywords === undefined || allKeywords.length === 0) return
    await this.filterByKeywords(allKeywords);
  };

  readonly getFilterHTML = (): HTMLElement => {
    return this.filterHTML;
  };
}
