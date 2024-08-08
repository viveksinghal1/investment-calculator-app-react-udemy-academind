import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12,
  });

  const isDurationValid = userInput.duration > 0;
  const isInvestmentValid =
    userInput.annualInvestment >= 0 &&
    userInput.initialInvestment >= 0 &&
    (userInput.annualInvestment > 0 || userInput.initialInvestment > 0);
  const isReturnValid = Number.isInteger(userInput.expectedReturn);
  const isInputValid = isDurationValid && isInvestmentValid && isReturnValid;
  function handleChange(propIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [propIdentifier]: parseInt(newValue),
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isInputValid && <p className="center">Please enter valid data</p>}
      {isInputValid && <Results input={userInput} />}
    </>
  );
}

export default App;
