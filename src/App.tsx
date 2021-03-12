import "./App.css";
import { ImagePixelatedDemo } from "./features/ImagePixelatedDemo";
import { ElementPixelatedDemo } from "./features/ElementPixelateDemo";

export default function App() {
  return (
    <div className="App">
      <h1>React Pixelated Demo</h1>
      <ImagePixelatedDemo />
      <ElementPixelatedDemo />
    </div>
  );
}
