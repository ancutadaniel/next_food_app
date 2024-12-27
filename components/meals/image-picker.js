"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();
  const [image, setImage] = useState();

  const handleClickPickImage = () => {
    inputRef.current.click();
  };

  const handleImageCHange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && <p>No image picked yet.</p>}
          {image && <Image src={image} alt="Preview" fill />}
        </div>
        <input
          id={name}
          name={name}
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png"
          className={classes.input}
          onChange={handleImageCHange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleClickPickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
