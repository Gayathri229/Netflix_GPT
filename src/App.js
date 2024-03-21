import { Provider, useDispatch } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import Browse from "../src/components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
