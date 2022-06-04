import axios from "axios";
const signupService = async (userDetails) => {
  return await axios.post("/api/auth/signup",{...userDetails})
  // try {
  //   const responseReceived = await axios.post("/api/auth/signup", {
  //     ...userDetails,
  //   });
  //   return responseReceived;
  // } catch (signupApiError) {
  //   console.error(
  //     "Error occured while making an API CALL for signup action",
  //     signupApiError
  //   );
  // }
};
export { signupService };
