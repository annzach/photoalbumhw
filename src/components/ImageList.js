import React , {Component} from 'react'
import ImageActions from '../actions/ImageActions'
import moment from 'moment'
import { browserHistory } from 'react-router'


export default class ImageList extends Component {
  constructor(){
    super();
    this.deleteImage=this.deleteImage.bind(this);

  }

  deleteImage(e){
   console.log('deleteme:', e.target.id);
   ImageActions.deleteImage(e.target.id)
  }



render(){
  console.log("Inside Image List");
  let {_id,name,url,createdAt,Key}=this.props;
 

      return (
      <tr key={_id}>
        <td>{name}</td>
        <td><img src={url} width="250 px" alt = "No Image"/></td>
        <td>{moment(createdAt).format('lll')}</td>
        <td><button id = {Key} onClick={this.deleteImage} className ="btn btn-danger">Delete</button></td>
      </tr>
      )
  
}



}