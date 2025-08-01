export enum Status {
    Loading = "loading",
    Success = "success",
    Failed = "failed"
}

export interface ICategory {
    _id: string,
    name: string,
    description: string,
    createdAt: string
}
export interface ICategoryInitialState {
    categories: ICategory[],
    status: Status.Loading

}