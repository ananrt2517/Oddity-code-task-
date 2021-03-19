export const GET_FACTS_REQUEST = 'GET_FACTS_REQUEST'
export const GET_FACTS_SUCCESS = 'GET_FACTS_SUCCESS'
export const GET_FACTS_FAIL = 'GET_FACTS_FAIL'

export const GET_SINGLE_FACTS_REQUEST = 'GET_SINGLE_FACTS_REQUEST'
export const GET_SINGLE_FACTS_SUCCESS = 'GET_SINGLE_FACTS_SUCCESS'
export const GET_SINGLE_FACTS_FAIL = 'GET_SINGLE_FACTS_FAIL'

export const getFactsRequest = (query) => ({ type: GET_FACTS_REQUEST, query })
export const getFactsSuccess = (payload) => ({
  type: GET_FACTS_SUCCESS,
  payload,
})
export const getFactsFail = () => ({ type: GET_FACTS_FAIL })

export const getSingleFactsRequest = (query) => ({
  type: GET_SINGLE_FACTS_REQUEST,
  query,
})
export const getSingleFactsSuccess = (payload) => ({
  type: GET_SINGLE_FACTS_SUCCESS,
  payload,
})
export const getSingleFactsFail = () => ({ type: GET_SINGLE_FACTS_FAIL })
