import AppDispatcher from '../AppDispatcher'

const ImageServerActions = {
  receiveImages(images){
    console.log("Inside ImageServerActions" ,images)
    AppDispatcher.dispatch({
      type:'RECEIVE_IMAGES',
      images
    })
  },

  createImage(image){
    console.log("Inside Image Server action")
    AppDispatcher.dispatch({
      type:'CREATE_IMAGE',
      image
    })
  },

  
   deleteImage(data){
  AppDispatcher.dispatch({
    type:'DELETE_IMAGE',
    data
  })
 },

}
export default ImageServerActions;