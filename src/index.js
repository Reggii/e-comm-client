import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store"
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"Loading.."} persistor={persistor}>
          <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>
);