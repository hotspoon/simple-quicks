import type { NextApiRequest, NextApiResponse } from "next"
// import { faker } from '@faker-js/faker';
import { AxiosError } from "axios"
import { handleErrorApi } from "@/lib/handleErrorApi"
import fs from "fs"
import path from "path"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), "data", "email.json") // Updated file path
    const fileContents = fs.readFileSync(filePath, "utf8")
    const data = JSON.parse(fileContents)

    // success data
    // res.status(200).json(data)

    res.status(200).json(data)
  } catch (error) {
    const [statusCode, responseText, responseTextClient] = handleErrorApi(
      error as AxiosError | Error
    )
    console.log(statusCode, responseText)

    return res.status(statusCode).json({ rc_desc: responseTextClient })
  }
}
