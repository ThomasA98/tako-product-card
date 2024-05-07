export interface Product {
    id: string
    title: string
    image?: string
}

export interface ProductContextExhibitor {
    product: Product
    counter: number
    maxCount: number
    increaseBy: (value: number) => () => void
}

export interface onChangeArgs {
    product: Product
    counter: number
}

export interface ProductInCart extends Product {
    counter: number
}

export interface ProductCardInitialValues {
    count?: number
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number
    isMaxCountReached: boolean
    maxCount?: number
    product: Product
    increaseBy: (value: number) => () => void
    reset: () => void
}