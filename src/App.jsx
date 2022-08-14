import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCatFact,
  getFactStatus,
  getFactError,
  fetchCatFacts,
} from "./features/catFact/catFactSlice";

function App() {
  const dispatch = useDispatch();
  const catFact = useSelector(getCatFact);
  const status = useSelector(getFactStatus);
  const error = useSelector(getFactError);

  const willBePrinted = [!error, status, catFact].every(
    (item) => Boolean(item) === true
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCatFacts());
    }
  }, []);

  return (
    <div className="App">
      {willBePrinted ? <p>{catFact}</p> : ""}
      {!willBePrinted ? <p>{error}</p> : ""}
    </div>
  );
}

export default App;
