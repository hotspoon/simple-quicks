import { AxiosError } from "axios"

export const handleErrorApi = (error: AxiosError | Error): [number, string, string?] => {
  let statusCode = 500
  let errorMessage = "An error occurred"
  let errorMessageClient = ""

  if (error instanceof AxiosError) {
    const { response, request, message, code } = error
    statusCode = response?.status || 500

    // Handle ECONNREFUSED error
    if (code === "ECONNREFUSED") {
      errorMessage = "Unable to connect to the server"
      errorMessageClient = "Kami saat ini tidak dapat terhubung ke server. Silakan coba lagi nanti."
    }

    // Handle ETIMEDOUT error
    if (code === "ETIMEDOUT") {
      errorMessage = "The server did not respond in time"
      errorMessageClient = "Server kami saat ini tidak merespon. Silakan coba lagi nanti."
    }

    if (response) {
      const url = response.config.url
        ? (response.config.url.startsWith("/") ? "" : "/") +
          response.config.url.split("/").slice(-2).join("/")
        : ""
      const rc_desc = response.data?.rc_desc

      errorMessage = rc_desc ? `${url}, ${rc_desc}` : "An error occurred"
      errorMessageClient = rc_desc || ""
    } else if (request) {
      errorMessage = message
      errorMessageClient = message
    } else {
      errorMessage = message
      errorMessageClient = message
    }
  } else {
    errorMessage = error.message
    errorMessageClient = error.message
  }

  return [statusCode, errorMessage, errorMessageClient]
}
