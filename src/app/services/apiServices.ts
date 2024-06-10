import axios from "axios"
export async function getEmails() {
  try {
    const response = await axios.get("/api/email")
    console.log("response", response)
    return response.data
  } catch (error: any) {
    console.log(error.message)
  }
}
