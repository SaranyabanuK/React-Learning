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
import UseState from './examples/Hooks/State/UseState';
import ClassState from './examples/Hooks/State/ClassState';
import MultipleState from './examples/Hooks/State/MultipleState';
import ObjectState from './examples/Hooks/State/ObjectState';
import UpdateObjectState from './examples/Hooks/State/UpdateObject';
import UpdateObjectClass from './examples/Hooks/State/ObjectClass';
import ArrayState from './examples/Hooks/State/ArrayState';
import UseEffectBasic from './examples/Hooks/useEffect/useEffectB';
import UseEffectDependency from './examples/Hooks/useEffect/useEffectDependency';
import UseEffectCleanup from './examples/Hooks/useEffect/useEffectCleanup';
import SimpleForm from './examples/Forms/SimpleForm';
import MultipleInputsForm from './examples/Forms/MultipleInputForms';
import SimplifiedHandlerForm from './examples/Forms/SimplifiedHandlerForm';
import InitialValuesForm from './examples/Forms/InitialValuesForm';
import TextAreaForm from './examples/Forms/TextAreaForm';
import UseRef from './examples/Hooks/UseRef/UseRef';
import CustomHook from './examples/Hooks/CustomHooks/Customhook';
import DogImages from './examples/APIFetch/APIfetching';
import RouterE from './examples/Routing/Route';
import Map from './examples/Mapping/Map';

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
      <UseEffectBasic/>
      <UseEffectDependency/>
      <UseEffectCleanup/>
      <SimpleForm/>
      <MultipleInputsForm/>
      <SimplifiedHandlerForm/>
      <InitialValuesForm/>
      <TextAreaForm/>
      <UseRef/>
      <CustomHook/>
      <DogImages/>
      <RouterE/>
      <Map/>
  </React.StrictMode>
);

export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
