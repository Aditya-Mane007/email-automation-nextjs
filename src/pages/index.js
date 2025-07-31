import React from "react";

function index() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const sendEmail = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify("Hello"),
    });
    const data = await res.json();

    console.log(data);
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

export default index;
