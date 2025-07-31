import React from "react";
import toast from "react-hot-toast";

function Index() {
  const sendEmail = async () => {
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      toast.success("Emails Sent!");
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
