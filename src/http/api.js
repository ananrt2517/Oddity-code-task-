import http from './http'

export const getFactsApi = async (query) => {
  try {
    const { data } = await http.get(`/search?query=${query}`)
    return data.result
  } catch (error) {
    return error.message
  }
}

export const getSingleFactApi = async (id) => {
  try {
    const { data } = await http.get(`/${id}`)
    return data
  } catch (e) {
    console.log(e.message)
  }
}

export const getRandomFactApi = async () => {
  try {
    const { data } = await http.get(`/random`)
    return [{ ...data }]
  } catch (error) {
    return error.message
  }
}
