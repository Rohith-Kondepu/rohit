import React from "react";
import Jobs from "./pages/jobs.jsx";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-purple-100 h-[60vh] p-10 rounded-lg w-full  ">
      {/* < className="bg-gradient-to-b from-white to-purple-100 h-[50vh] p-10 rounded-lg w-full max-w-5xl mt-6"> */}
      {/* <div className="bg-gradient-to-b from-white to-purple-100 min-h-screen"> */}
      <Jobs />
    </div>
  );
}

export default App;