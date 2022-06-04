import axios from "axios";
const loginService = async (userDetails) => {
  return await axios.post("/api/auth/login",{...userDetails})
  // try {
  //     const responseReceived=await axios.post("/api/auth/login",{...userDetails});
  //     return responseReceived;
  // } catch (loginApiError) {
  //   console.error("An error occured while making an API Call for the login action:",loginApiError);
  // }
};
export { loginService };
