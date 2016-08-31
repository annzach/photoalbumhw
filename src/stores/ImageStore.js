import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _image = [],_status;

class ImageStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {

        case 'RECEIVE_IMAGES':
         _image = action.images;
          this.emit('CHANGE');
          break;

        case 'CREATE_IMAGE':
          var { image } = action;
         _image.push(image);
          console.log('image:',image)
          this.emit('CHANGE');
          break;

        case 'DELETE_IMAGE':this.emit('CHANGE');
                            break;

   
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    console.log("inside get all");
    console.log(_image);
    return _image;
  }

  getStatus(){
    return _status;
  }


}

export default new ImageStore();