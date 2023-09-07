import axios from "axios";

const API_KEY = "AIzaSyAdRndq8m3iZ6fgg3S5boKQTAbr0-9_Gks";

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  console.log("email", email);
  console.log("password", password);

  await authenticate("signInWithPassword", email, password);
}

export async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  );

  console.log("response", response.data);
}
