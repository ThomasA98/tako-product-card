# TAKO-Product-card

Este es un paquete de pruebas de despliege en NPM

## Thomas A_K

```tsx

import { ProductCard } from "tako-product-card"

<ProductCard
    product={ product }
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
      <>
        <ProductCard.Image />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </>
    )}
</ProductCard>
```