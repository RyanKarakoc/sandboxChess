import { createContext, useContext, useState } from "react";

// Create a context to hold your global state
const GlobalStateContext = createContext();

// Create a provider component to wrap your application
export const GlobalStateProvider = ({ children }) => {
  const [alternateMove, setAlternateMove] = useState(1);
  const [moves, setMoves] = useState([]);
  const [movesPriorToDeviation, setMovesPriorToDeviation] = useState([]);
  const [analysisMoves, setAnalysisMoves] = useState([]);
  const [analysisMoveNumber, setAnalysisMoveNumber] = useState(0);

  return (
    <GlobalStateContext.Provider
      value={{
        alternateMove,
        setAlternateMove,
        moves,
        setMoves,
        movesPriorToDeviation,
        setMovesPriorToDeviation,
        analysisMoves,
        setAnalysisMoves,
        analysisMoveNumber,
        setAnalysisMoveNumber,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access the global state and dispatch function
export const useGlobalState = () => useContext(GlobalStateContext);
