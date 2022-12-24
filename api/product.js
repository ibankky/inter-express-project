import { useContext } from '@nuxtjs/composition-api'

export const productApi = () => {
  const { $api } = useContext()

  const fetchProducts = async () => {
    const res = await $api.post('/api/operation/product/v1/products/find' , {} ,)
    console.log('fetch product')
    console.log(res)
    return res
  }

  const fetchProduct = async () => {
    const res = await $api.get('operation/product/v1/products/639c9b15436564adec408473')
    console.log('fetch product')
    console.log(res)
    return res
  }
  const addProduct = async () => {
    const res = await $api.get('operation/product/v1/products')
    console.log('fetch product')
    console.log(res)
    return res
  }

  return {
    fetchProducts,
    fetchProduct
  }
}