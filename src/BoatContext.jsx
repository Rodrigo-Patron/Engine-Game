import { createContext, useReducer } from "react";

export const BoatContext = createContext(null);

export const BoatContextProvider = ({ children }) => {
  const initialState = { start: "off", gear: 0, speed: 0 };

  const reducer = (previousState, action) => {
    console.log("previousState", previousState);
    console.log("action", action);

    if (action.type === "start" && Math.round(Math.random() * 1) === 1) {
      return {
        start: "on",
        gear: 0,
        speed: 0,
      };
    } else if (action.type === "start" && previousState.start === "on") {
      return previousState;
    } else if (action.type === "stop") {
      return {
        start: "off",
        gear: 0,
        speed: previousState.speed,
      };
    } else if (
      action.type === "gearUp" &&
      previousState.start === "on" &&
      previousState.gear <= 4
    ) {
      return {
        start: "on",
        gear: previousState.gear + 1,
        speed: previousState.speed,
      };
    } else if (
      action.type === "gearDown" &&
      previousState.start === "on" &&
      previousState.gear >= -1
    ) {
      return {
        start: "on",
        gear: previousState.gear - 1,
        speed: previousState.speed,
      };
    } else if (
      action.type === "speedUp" &&
      previousState.start === "on" &&
      previousState.gear !== 0 &&
      previousState.gear <= 4 &&
      previousState.gear >= -1
    ) {
      return {
        start: "on",
        gear: previousState.gear,
        speed: previousState.speed + 1,
      };
    } else if (
      action.type === "speedUp" &&
      previousState.start === "on" &&
      previousState.gear === 5
    ) {
      return {
        start: "on",
        gear: previousState.gear,
        speed: previousState.speed + 3,
      };
    } else if (
      action.type === "speedUp" &&
      previousState.start === "on" &&
      previousState.gear === -2
    ) {
      return {
        start: "on",
        gear: previousState.gear,
        speed: previousState.speed + 3,
      };
    } else if (
      action.type === "speedDown" &&
      previousState.start === "on" &&
      previousState.speed >= 1
    ) {
      return {
        start: "on",
        gear: previousState.gear,
        speed: previousState.speed - 1,
      };
    } else {
      return previousState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BoatContext.Provider value={{ state, dispatch }}>
      {children}
    </BoatContext.Provider>
  );
};
