import { useState } from "react";
import { signUp } from "../services/login";
import LoadingAnimation from "../components/loading/LoadingAnimation";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState();
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!age || age < 18) newErrors.age = "Age must be at least 18";
    if (!city) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await signUp(name, email, password, phone, age, city);
      navigate("/log-in");
    } catch (error) {
      console.error("Error signing up", error);
      setLoading(false);
      alert("Failed to sign up, please try again later.");
    }
  };
  return (
    <div className="mt-20 flex flex-col gap-5">
      {loading && <LoadingAnimation />}
      <h1>Join Now</h1>
      <form
        onSubmit={handleSignUpSubmit}
        className="flex flex-col gap-5 justify-center items-center"
      >
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="py-3 px-5 rounded-2xl"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="py-3 px-5 rounded-2xl"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="py-3 px-5 rounded-2xl"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
        <input
          type="text"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          className="py-3 px-5 rounded-2xl"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        <input
          type="number"
          value={age}
          required
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Age"
          className="py-3 px-5 rounded-2xl"
        />
        {errors.age && <p className="text-red-500">{errors.age}</p>}
        <input
          type="text"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="py-3 px-5 rounded-2xl"
        />
        {errors.city && <p className="text-red-500">{errors.city}</p>}
        <button type="submit" className="py-3 px-5 text-white rounded-2xl">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
