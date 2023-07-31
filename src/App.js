import { useContext, useRef, useState } from "react";
//import AppContext
import { AppContext } from "./context/UserContext";
//import Auth
import Auth from "./components/Auth";
//import Chat component
import Chat from "./components/Chat";
//import Cookies
import Cookies from "universal-cookie";
// create new Cookie object
const cookies = new Cookies();

function App() {
  const { room, setRoom } = useContext(AppContext);
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  const inputRef = useRef();
  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  } else {
    if (room) {
      return <Chat />;
    } else {
      return (
        <div>
          <label>Enter roomID: </label>
          <input ref={inputRef} />
          <button onClick={() => setRoom(inputRef.current.value)}>
            Join Room
          </button>
        </div>
      );
    }
  }
}

export default App;
