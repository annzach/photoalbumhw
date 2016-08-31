import API from '../API';

const ImageActions = {
 getAllImages:API.getAllImages,

_submitFile(file){
    console.log('file:',file);
    API._submitFile(file);
 },

 deleteImage(id){
  console.log('API delete id:',id)
  API.deleteImage(id);
 }

}
export default ImageActions;



