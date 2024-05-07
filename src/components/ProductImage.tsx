import React, { useContext } from 'react'
import { ProductContext } from './ProductCard'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface ProductImageProps {
    image?: string
    className?: string
    style?: React.CSSProperties
}

export const ProductImage: React.FC<ProductImageProps> = ({ image, className = '', style }) => {

    const { product } = useContext(ProductContext)

    const imgToShow = image ?? product.image ?? noImage

    return(
        <img className={ `${styles.productImg} ${className}` } style={ style } src={ imgToShow } alt="Product Image" />
    )
}