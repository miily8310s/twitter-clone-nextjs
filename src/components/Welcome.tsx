import { useDispatch } from "react-redux";
import { onOpen as onLoginOpen } from "../slices/loginModalSlice";
import { onOpen as onRegisterOpen } from "../slices/registerModalSlice";
import { Button } from "./Button";

export const Welcome = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <h1
        style={{
          marginBottom: "1rem",
          color: "#ffffff",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Welcome to Twitter
      </h1>
      <div
        role="group"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button label="Login" onClick={() => dispatch(onLoginOpen())} />
        <Button
          label="Register"
          blacked
          onClick={() => dispatch(onRegisterOpen())}
        />
      </div>
    </div>
  );
};
