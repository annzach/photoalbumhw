import axios from 'axios'
import ImageServerActions from './actions/ImageServerActions'
import ImageActions from './actions/ImageActions'


const API ={
  
  _submitFile(file){
    console.log("inside API _submit File")
    console.log('file:',file);
    let data = new FormData();
    data.append('image',file);
    axios.post('/api/images',data)
         .then(res=>{
          console.log('res:',res);
         })
         .then(ImageServerActions.createImage)
         .catch(console.error);
    },

    getAllImages(){
    console.log("Inside API get all IMages")
    axios.get('/api/images')
         .then(res=>res.data)
         .then(ImageServerActions.receiveImages)
         .catch(console.error);
},

  deleteImage(id){
    console.log('deleteimageinAPI:', id)
    axios.delete('/api/images/'+id)
         .then(res=>res.data)
         .then(ImageServerActions.deleteImage)
         .then(ImageActions.getAllImages)
         .catch(console.error);
  },


}

export default API;