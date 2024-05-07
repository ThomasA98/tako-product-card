import React from 'react'
import renderer from 'react-test-renderer'

import { ProductTitle, ProductCard } from '../../src/components'

import { product1 } from '../data/productos'

describe('ProductTitle', () => {

    test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' className='custom-class' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

    test('Debe de mostrar el componente con el nombre del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {() => (
                    <ProductTitle className='custom-class' />
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

})