
export default class BooksTemplate {

    readonly render = (): string => {
        return ``;
    }

    readonly renderPagination = (totalPages: number): string => {
        return `1 / ${totalPages}`;
    }
}