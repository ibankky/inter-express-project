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
    const res = await $api.get('/api/operation/product/v1/products/639c9b15436564adec408473')
    console.log('fetch product')
    console.log(res)
    return res
  }
  const addProduct = async (payload) => {
    console.log(payload.formData)
    const  data = payload.formData
    console.log(data)
    const res = await $api.put('/api/operation/product/v1/products' , data )
    //console.log('fetch product')
    //console.log(res)
    return res
  }

  return {
    fetchProducts,
    fetchProduct,
    addProduct
  }
}