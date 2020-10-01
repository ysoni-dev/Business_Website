import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Contact';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";



function showAge()
            {
                var newAge = document.forms[0].Age.value;
                alert("AGE: " + newAge);
            }