import React, { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'

import { onChangeArgs, Product, ProductCardHandlers, ProductCardInitialValues, ProductContextExhibitor } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'

export const ProductContext = createContext<ProductContextExhibitor>({} as ProductContextExhibitor)
const { Provider } = ProductContext

export interface ProductCardProps {
    product: Product
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string
    style?: React.CSSProperties
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: ProductCardInitialValues
}

export const ProductCard: React.FC<ProductCardProps> = ({ children, product, className = '', style, onChange, value, initialValues }) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{ product, counter, increaseBy, maxCount }}>
            <div className={`${styles.productCard} ${className}`} style={ style } >
                { children({
                    count: counter,
                    product,
                    maxCount,
                    isMaxCountReached,
                    increaseBy,
                    reset,
                }) }
            </div>
        </Provider>
    )
}