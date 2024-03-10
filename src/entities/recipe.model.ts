export class Recipe {
    id?: number
    name?: string
    categoryId?:number
    preparationTime?:number
    difficultyLevel?:number
    dateAdded?:Date
    ingredients?:string[]
    instructions?:string[]
    userId?:number
    routingImage?: string
}
