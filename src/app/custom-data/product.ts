import { Size } from "./size"

export interface Product {
    id: number,
    brand: string,
    title: string,
    description: string,
    currentPrice: number,
    mrp: number,
    discount: string,
    color: string,
    reviews: string,
    recommended: boolean,
    isNew: boolean,
    rating: number,
    images: string[],
    fitType: string
    timesOrdered: number
    sizes: Size[]
}