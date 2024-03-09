import React from "react";

export default function Users() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-semibold">John Doe</span>
        </div>
        <div>
          Email: <span className="font-semibold">johndoe@gmail.com</span>
        </div>
        <button></button>
      </div>
    </div>
  );
}
