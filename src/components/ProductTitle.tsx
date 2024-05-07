import React, { useContext } from 'react'
import { ProductContext } from './ProductCard'

import styles from '../styles/styles.module.css'

export interface ProductTitleProps {
    title?: string
    className?: string
    style?: React.CSSProperties
}

export const ProductTitle: React.FC<ProductTitleProps> = ({ title, className = '', style }) => {

    const { product } = useContext(ProductContext)

    const titleShow = title ?? product.title

    return (
        <span className={ `${styles.productDescription} ${className}` } style={ style } >{ titleShow }</span>
    )
}