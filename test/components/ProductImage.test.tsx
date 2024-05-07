import React from 'react'
import renderer from 'react-test-renderer'

import { ProductImage, ProductCard } from '../../src/components'

import { product1 } from '../data/productos'

describe('ProductTitle', () => {

    test('Debe de mostrar la imagen', () => {

        const wrapper = renderer.create(
            <ProductImage image={ product1.image } />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

    test('Debe de mostrar la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {() => (
                    <ProductImage />
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

})