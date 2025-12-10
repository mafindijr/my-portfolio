// "use server"

// import emailjs from "@emailjs/browser"

// export async function sendContactEmail(data: {
//   name: string
//   email: string
//   subject: string
//   message: string
// }) {
//   try {
//     // Initialize EmailJS with server-side environment variables
//     emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")

//     const result = await emailjs.send(
//       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
//       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
//       {
//         to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "",
//         from_name: data.name,
//         from_email: data.email,
//         subject: data.subject,
//         message: data.message,
//       },
//     )

//     if (result.status === 200) {
//       return { success: true }
//     } else {
//       return { success: false }
//     }
//   } catch (error) {
//     console.log("[v0] Server action error:", error)
//     return { success: false }
//   }
// }
