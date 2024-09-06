import { useState } from "react";
import "./App.css";
import FormikForm from "./components/FormikForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormikForm />
    </>
  );
}

export default App;
