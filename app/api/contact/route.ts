export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (!data.name || !data.email || !data.message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Implement your email service here (SendGrid, Resend, Nodemailer, etc.)
    // For now, just log the data
    console.log("Contact form submission:", data)

    return Response.json({ success: true, message: "Message received" }, { status: 200 })
  } catch {
    return Response.json({ error: "Failed to process request" }, { status: 500 })
  }
}




// import { google } from "googleapis"

// export async function POST(request: Request) {
//   try {
//     const data = await request.json()

//     if (!data.name || !data.email || !data.message) {
//       return Response.json({ error: "Missing required fields" }, { status: 400 })
//     }

//     // Google Sheets configuration
//     const spreadsheetId = process.env.GOOGLE_SHEETS_ID
//     const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1"

//     if (!spreadsheetId) {
//       console.error("Missing GOOGLE_SHEETS_ID environment variable")
//       return Response.json({ error: "Server configuration error" }, { status: 500 })
//     }

//     try {
//       // Create auth using service account credentials from environment variable
//       const auth = new google.auth.GoogleAuth({
//         credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}"),
//         scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//       })

//       const sheets = google.sheets({ version: "v4", auth })

//       // Append data to Google Sheet
//       const timestamp = new Date().toISOString()
//       await sheets.spreadsheets.values.append({
//         spreadsheetId,
//         range: `${sheetName}!A:E`,
//         valueInputOption: "USER_ENTERED",
//         requestBody: {
//           values: [[timestamp, data.name, data.email, data.subject || "N/A", data.message]],
//         },
//       })

//       console.log("Data appended to Google Sheet successfully")
//     } catch (sheetsError) {
//       console.error("Error appending to Google Sheets:", sheetsError)
//       // Still return success to user even if sheets fails, so form doesn't break
//     }

//     return Response.json({ success: true, message: "Message received" }, { status: 200 })
//   } catch (error) {
//     console.error("Contact form error:", error)
//     return Response.json({ error: "Failed to process request" }, { status: 500 })
//   }
// }
