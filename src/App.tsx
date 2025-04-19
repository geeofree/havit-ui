import { RouterProvider } from "react-router";
import { router } from "./router";
import { Provider } from "./components/ui/provider";
import { ColorModeButton } from "./components/ui/color-mode";

function App() {
  return (
    <Provider>
      {import.meta.env.PROD ? null : (
        <ColorModeButton position="fixed" bottom="0" right="0" />
      )}
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
