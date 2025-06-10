import { useState } from "react";

export default function FeedMe() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }
  const uploadFile = async () => {
    if (!file) {
      setStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

       const data = response.json();
      setStatus(data.message || "Upload complete.");
    } catch (err) {
      setStatus("Upload failed.");
    }
  };

    return (
        <div className="p-4 border rounded-xl w-fit">
      <h2 className="text-lg font-semibold mb-2">📦 Feed Me</h2>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" onClick={uploadFile}>
        Upload Product Feed
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}

// This component allows users to upload a JSON file to the backend.
// It uses the Fetch API to send the file to the server and displays the upload status.
