export enum Status{
    Loading="loading",
    Success="success",
    Failed="failed"
}

 export interface IPayment{
    paymentMethod:string,
    paymentAmount:number
}

  export interface IPaymentInitialState{
    payment:IPayment[],
    status:Status.Loading
 }