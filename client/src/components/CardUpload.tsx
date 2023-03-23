import React from "react";
import { createWorker } from "tesseract.js";

const readData = async (file: File) => {
  const worker = await createWorker({
    logger: (m) => console.log(m),
  });
  await worker.load();
  await worker.loadLanguage("kor");
  await worker.initialize("kor");
  const {
    data: { text },
  } = await worker.recognize(file);
  console.log(text);
  const regex = /\d{6}-\d{7}/g;
  const matches = text.match(regex);
  if (matches) {
    console.log(matches[0]);
    alert(matches[0]);
  } else {
    console.log("No matches");
  }

  await worker.terminate();

  return matches?[0]:null;
};

const CardUpload = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // if file is image
    if (file && file.type.match("image.*")) {
      setFile(file);
      console.log(file);
    } else if (file) {
      alert("Please upload an image file");
      window.location.reload();
    }
  };

  return (
    <>
      <input type="file" onChange={handleFileChange}></input>
      <button
        onClick={() => {
          if (file) {
            readData(file);
          } else {
            alert("Please upload an image file");
          }
        }}
      >
        Submit
      </button>
    </>
  );
};

export default CardUpload;
