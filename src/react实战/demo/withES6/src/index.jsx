import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';
import ColorPoint from './components/extends.jsx';

var colorPoint=new ColorPoint(1,2,'red');
console.log(colorPoint);
ReactDOM.render(
    <HelloMessage name='hi' />,
    document.getElementById('app')
);