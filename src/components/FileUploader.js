import React, { Component } from 'react';
import ImageActions from '../actions/ImageActions'


export default class FileUploader extends Component {

constructor(){
  super();

  this.state = {
    file:'',
    imagePreviewUrl:''
  }

  this._onInputChange=this._onInputChange.bind(this);
  this._onSubmit=this._onSubmit.bind(this);
}

_onSubmit(e){
  e.preventDefault();
  console.log('this.state.file:', this.state.file)
  ImageActions._submitFile(this.state.file);

   
}

_onInputChange(e){
  let reader = new FileReader(); 
  console.log('e.target:', e.target)
  let file = e.target.files[0];
  reader.onloadend = () =>{
   this.setState({
    file,
    imagePreviewUrl:reader.result
   });
  };
  reader.readAsDataURL(file);
}

render() {
     let {imagePreviewUrl} = this.state;
     let imagePreview = imagePreviewUrl && <img src={imagePreviewUrl} width="200 px"/>
     return (
      <div>
        <form onSubmit={this._onSubmit}>
            <input type="file" name=""  onChange={this._onInputChange}/>
            <button>Upload</button>
        </form>

        {imagePreview}
      </div>
    )
  }
}
