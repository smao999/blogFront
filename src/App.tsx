import {Suspense, useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "@/router";
import store from "@/store";
import {changeTheme} from "@/utils/changeTheme";

function App() {
    const Route = createBrowserRouter(routes);
    const themeType = store(state => state.themeType);

    useEffect(() => {
        changeTheme(themeType);
    }, [themeType]);

  return (
    <Suspense fallback={'加载中'}>
        <RouterProvider router={Route}/>
    </Suspense>
  )
}

export default App
