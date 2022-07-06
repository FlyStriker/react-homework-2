import * as React from "react";

export default function AuthorizationForm(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitCallback = (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Не все поля заполнены");
    } else {
      console.log("username"+ " " + username,"Password" + " " + password);
      setUsername("");
      setPassword("");
    }
  };
  return (
    <form onSubmit={onSubmitCallback}>
      <p>Username</p>
      <input
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />

      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
       
        <input type="submit" />
    </form>
  );
}
