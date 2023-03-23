import React from "react";

const CardUpload = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // if file is image
    if (file && file.type.match("image.*")) {
      setFile(file);
      console.log(file)
    } else if(file) {
        alert("Please upload an image file");
        window.location.reload();
    }

  };

  return (
    <>
      <input type="file" onChange={handleFileChange}></input>
    </>
  );
};

export default CardUpload;
