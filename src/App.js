import Library from "./components/Library";
import { LibraryProvider } from "./components/LibraryProvider";

function App() {
  return (
    <LibraryProvider>
      <Library />
    </LibraryProvider>
  );
}

export default App;
