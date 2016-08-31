import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import ViewImages from './components/ViewImages'
import Main from './components/Main'
import ImageList from './components/ImageList'
import FileUploader from './components/FileUploader'




render(
  <Router history ={browserHistory}>
  <Route path='/' component = {Main}>
    <Route path ='ViewImages' component ={ViewImages}/>
    <Route path = 'ImageList' component ={ImageList}></Route>
    <Route path ='FileUploader' component={FileUploader}></Route>
  </Route>
  </Router>,
  document.getElementById('root')
);
