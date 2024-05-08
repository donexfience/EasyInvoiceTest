import { useState } from "react";
import { saveAs } from "file-saver";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const downloadInvoice = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/user/invoice-pdf/`, {
        withCredentials: true,
        responseType: "blob",
      });

      saveAs(response.data, "invoice.pdf");
    } catch (error) {
      console.error("Error downloading invoice:", error);
    }
  };

  return (
    <>
      <p>click here to download invoice</p>
      <button className="bg-red-500" onClick={downloadInvoice}>click here</button>
    </>
  );
}

export default App;
