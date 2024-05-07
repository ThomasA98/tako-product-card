import { ProductCard as ProductCardHOC } from './ProductCard'

import { ProductTitle } from './ProductTitle'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'

export interface ProductCardHOCProps {
    Title   : typeof ProductTitle
    Image   : typeof ProductImage
    Buttons : typeof ProductButtons
}

export const ProductCard = Object.assign<typeof ProductCardHOC, ProductCardHOCProps>(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})

export { ProductTitle } from './ProductTitle'
export { ProductImage } from './ProductImage'
export { ProductButtons } from './ProductButtons'

export default ProductCard