import React, { Component } from 'react'
import ImageStore from '../stores/ImageStore'
import ImageActions from '../actions/ImageActions'
import ImageList from './ImageList'


export default class ViewImages extends Component{

  constructor(){
    super();
    this.state = {
      images:ImageStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }

 componentDidMount(){
    ImageActions.getAllImages();
    ImageStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    ImageStore.stopListening(this._onChange);
  }


  _onChange() {
    this.setState({
      images: ImageStore.getAll()
    });
  }


  render(){
   const imageLists = this.state.images.map((image,index) =>{
      return (
        <ImageList key = {index} {...image}/>
        )
    })
    return(
    <table className="table">
      <thead>
        <tr>
          <th><h5><b>Title</b></h5></th>
          <th><h5><b>Image</b></h5></th>
          <th><h5><b>Time</b></h5></th>
          <th><h5><b>Action</b></h5></th>
        </tr>
      </thead>
      <tbody>
       {imageLists}
      </tbody>
      </table>
    )
  }
}