import Book from "../types/Book.js";

export default class BooksTemplate {
  constructor(private readonly books: Book[]) {}
  readonly render = async (): Promise<string> => {
    const booksTemplate = Promise.all(
      this.books.map(async (book: Book) => {
        return `
            <article class="card">
                <div class="card-aside">
                    <img src="${await this.getImage(
                      book._pt
                    )}" alt='this is an ${book._pt}'>
                </div>
                <div class="content">
                    <h1>${book._title}</h1>
                    <p>${book._author}</p>
                    <p>${book._journal}</p>
                    <p>${book._abstract}</p>
                    <h4>Keywords</h4>
                    <ul>
                    ${(await this.getKeywords(book._keywords))
                      .map(keyword => `<li>${keyword}</li>`)
                      .join("")}
                    </ul>
                    <footer class="card-footer">
                        <button class="card-button">${await this.formatPt(book._pt)}</button>
                        <section class="card-refs">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-building-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                            </svg>
                            <p>${book._publisher}</p>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                class="bi bi-clock" viewBox="0 0 16 16">
                                <path
                                d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>
                            <p>${book._year}</p>
                        </div>
                        </section>

                    </footer>
                </div>
            </article>
            
            `;
      })
    );
    return (await booksTemplate).join("");
  };
  private readonly getImage = async (image: string): Promise<string> => {
    const path = `./img/`;
    const imagePath = `${path}${await this.formatPt(image)}.png`;
    const response = await fetch(imagePath);
    if (response.ok) {
      return imagePath;
    }
    return `${path}not-icon.png`;
  };
  private readonly formatPt = async (pt: string): Promise<string> => {
    const regex = /@/g;
    return pt.replace(regex, "");
  }

  private readonly getKeywords = async (keywords: string): Promise<string[]> => {
    const regex = /\s*,\s*/
    if(keywords === null || keywords === undefined) return ['Not found']
    return keywords.split(regex)
  };
  
  readonly renderPagination = (pages: number[]): string => {
    let html = '<div class="pagination">';
    html += `<div class="pagination-button" id="prev-button"> < </div>`;
    for (let i = 0; i < pages.length; i++) {
      html += `<div class="pagination-button" id="${i}">${pages[i]}</div>`;
    }
    html += `<div class="pagination-button" id="next-button"> > </div>`;
    html += '</div>';
    return html;
  };
}
