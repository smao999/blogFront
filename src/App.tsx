import {Suspense, useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "@/router";
import store from "@/store";
import {changeTheme} from "@/utils/changeTheme";
import SuspenseLoading from "@/components/SuspenseLoading";

function App() {
    const Route = createBrowserRouter(routes);
    const themeType = store(state => state.themeType);

    useEffect(() => {
        changeTheme(themeType);
    }, [themeType]);

  return (
    <Suspense fallback={<SuspenseLoading/>}>
        <RouterProvider router={Route}/>
    </Suspense>
  )
}

export default App
