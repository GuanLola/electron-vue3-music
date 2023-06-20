import { axiosInstance } from "../../utils/request";

export const getBanner = () => {
  return axiosInstance.get('/banner')
}

export const getRecommendList = () => {
  return axiosInstance.get('/personalized')
}
