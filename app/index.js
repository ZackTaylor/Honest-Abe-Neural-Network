import React from 'react';
import ReactDOM from 'react-dom';
import TwitterService from './api/services';

const title = "hi baby abe";

// TwitterService.getTweetsByHashtag("democrat");

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
