import React, { useState } from "react";
import swal from "@sweetalert/with-react";
import axios from "axios";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleMakeAdmin = (e) => {
    e.preventDefault();

    const user = { email };
    axios.put("http://localhost:5000/users/admin", user).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold text-gray-800">
        Make someone admin
      </h1>
      <div className="mt-4 md:w-1/3">
        <form onSubmit={handleMakeAdmin}>
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            placeholder="Email"
            required
            onBlur={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 mt-4 text-gray-200 bg-gray-800 rounded active:bg-gray-600"
          >
            Make Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
