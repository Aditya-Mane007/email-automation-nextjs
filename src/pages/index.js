import React from "react";

function Index() {
  console.log(process.env.NEXT_PUBLIC_API_URL);

  const sendEmail = async () => {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Use correct Content-Type
        },
        body: JSON.stringify({}), // Send an empty object or `{ emails: [...] }` if needed
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        className="w-auto h-auto py-3 px-8 rounded-2xl border border-white cursor-pointer"
        onClick={sendEmail}
      >
        Send
      </button>
    </div>
  );
}

export default Index;
