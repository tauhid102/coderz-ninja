import { toast } from "react-hot-toast";

export default async function sendMailFromContactUsForm({
  name,
  email,
  subject,
  message,
}) {
  let data = {
    name,
    email,
    subject,
    message,
  };

  return new Promise((resolve, reject) => {
    fetch("/api/connect-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.status === 200) {
          resolve({
            message: "Email sent successfull",
            success: true,
            status: 200,
          });
        } else {
          reject({
            message: "Email sent failed",
            success: false,
            status: 500,
          });
        }
      })
      .catch((error) => {
        reject({
          message: "Email sent failed",
          success: false,
          status: 400,
        });
      });
  });
}
