import axios from "axios";

const API_KEY = "AIzaSyAdRndq8m3iZ6fgg3S5boKQTAbr0-9_Gks";

export async function createUser({ email, password }) {
  console.log("email", email);
  console.log("password", password);

  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );

  console.log("response", response);

  //   return response.data;
}
