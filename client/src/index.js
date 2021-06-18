import React from 'react';
import ReactDOM from 'react-dom';
import { ProductsProvider } from './context/products-context';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:1337/";

ReactDOM.render(
	<React.StrictMode>
		<ProductsProvider>
			<App />
		</ProductsProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();