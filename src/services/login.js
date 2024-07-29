import axios from "axios";

const BASE_URL = "http://localhost:8000/users";

export const signUp = async (name, email, password, phone, age, city) => {
  try {
    const payload = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      age: age,
      city: city,
    };
    const response = await axios.post(BASE_URL, payload);
    return response.data;
  } catch (error) {
    console.error("Error signing up", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?email=${email}&password=${password}`
    );
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
};
