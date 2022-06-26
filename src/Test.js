import { useContext } from "react";
import { AppContext } from "./Context/AppContextProvider";

export const Test = () => {
  const { token, auth, changeAuth } = useContext(AppContext);

  return (
    <div>
      <h1>Token is :{token}</h1>
      <h2>Auth is : {`${auth}`} </h2>
      <button onClick={changeAuth}>Auth</button>
    </div>
  );
};
