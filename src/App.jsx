import ClassComp from "./Components/classComp";
import "./App.css";
import ErroBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <>
      <ErroBoundary>
        <ClassComp />
      </ErroBoundary>
      <ClassComp />

      <ClassComp />
      <ClassComp />
    </>
  );
}

export default App;
