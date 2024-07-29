import { useState } from "react";
import { login } from "../services/login";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("login proccess");
      try {
        const user = await login(email, password);
        console.log("User:", user);
        navigate("/");
      } catch (err) {
        console.error("Error logining", err);
        alert("Failed to login, please try again later.");
        return;
      }
    }
    // Add your login logic here
  };
  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      alert("Email is required");
    }
    if (password === "" || password === null) {
      result = false;
      alert("password is required");
    }
    return result;
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[50vh]">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          value={email}
          className="py-3 px-5 rounded-2xl"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          className="py-3 px-5 rounded-2xl"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <Link className="underline" to={"/sign-up"}>
          Do not have account yet ?
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
