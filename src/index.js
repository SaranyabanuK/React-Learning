import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JSX from './examples/JSX/jsx';
import Components from './examples/Components/components';
import Props from './examples/Props/Props';
import ClassProps from './examples/Class-Components/ClassProps'
import Conditional from './examples/Conditional-Rendering/Conditional'
import List from './examples/List-Keys/List'
import InlineCSS from './examples/CSS/InlineCSS';
import Stylesheet from './examples/CSS/Stylesheet';
import UseState from './examples/State/UseState';
import ClassState from './examples/State/ClassState';
import MultipleState from './examples/State/MultipleState';
import ObjectState from './examples/State/ObjectState';
import UpdateObjectState from './examples/State/UpdateObject';
import UpdateObjectClass from './examples/State/ObjectClass';
import ArrayState from './examples/State/ArrayState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <JSX />
      <Components/>
      <Props/>
      <ClassProps/>
      <Conditional/>
      <List/>
      <InlineCSS/>
      <Stylesheet />
      <UseState />
      <ClassState/>
      <MultipleState/>
      <ObjectState/>
      <UpdateObjectState/>
      <UpdateObjectClass/>
      <ArrayState/>
  </React.StrictMode>
);

export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
