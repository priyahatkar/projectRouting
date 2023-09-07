


export interface Imobile {
    moId : number;
    moName: string;
    prize: number;
    ram: string;
    imgUrl : string;
    moInfo : string;
    rating : number;
    status : ImoStatus
}

export type ImoStatus = 'Available' | 'OutOfStock'



export interface Icomputer{
    cId: number;
    cName: string;
    imgUrl: string;
    ram: string;
    price: number;
    rating: number;
    details: string;
    status : IcompStatus
}

export type IcompStatus = 'Available' | 'OutOfStock'

export interface Ilaptop{
    lapId: number;
    lName: string;
    rating: string;
    price: string;
    details: string;
    imgUrl: string;
    status : IlapStatus
}
export type IlapStatus = 'Available' | 'OutOfStock'

export interface Itab{
    tabId: number;
    tabName: string;
    imgUrl: string;
    rating: string;
    price: string;
    details: string;
    status :ItabStatus;
}

export type ItabStatus = 'Available' | 'OutOfStock'