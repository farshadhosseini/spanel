export interface IPost {
    userId: number,
    id?: number,
    title: string,
    body: string,
    updateList?: (action: string, id: number, post?: IPost) => void
}