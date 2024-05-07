import { useEffect, useRef, useState } from 'react'
import { onChangeArgs, Product, ProductCardInitialValues } from '../interfaces/interfaces'

interface UseProductOptions {
    value?: number
    minValue?: number
    product: Product
    onChange?: (args: onChangeArgs) => void
    initialValues?: ProductCardInitialValues
}

export const useProduct = ({ value = 0, minValue = 0, product, onChange, initialValues }: UseProductOptions) => {

    const maxCount = initialValues?.maxCount ?? Number.MAX_VALUE

    const [ counter, setCounter ] = useState(initialValues?.count ?? value)
    const isMounted = useRef(false)

    const increaseBy = (value: number) => () => {

        const newValue = Math.min(
            Math.max(counter + value, minValue),
            maxCount
        )
        setCounter(newValue)

        onChange && onChange({ product, counter: newValue })
    }

    const reset = () => {
        setCounter(initialValues?.count ?? value)
    }

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(initialValues?.count ?? value)
    }, [ value, initialValues?.count ])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        counter,
        maxCount,
        isMaxCountReached: !(counter < maxCount),

        increaseBy,
        reset,
    }

}