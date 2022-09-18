import React, { useState, useRef, useEffect } from "react";

export function CarDetails({
  initialData = { model: "Audi TTS", year: "2021", color: "Satin Black" },
}) {
  const detailsRef = useRef();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    detailsRef.current.elements.model.value = initialData.model;
    detailsRef.current.elements.year.value = initialData.year;
    detailsRef.current.elements.color.value = initialData.color;
  }, [initialData]);

  useEffect(() => {
    if (status === true) {
      detailsRef.current.reset();
    }
  }, [status]);

  function handleInputChange() {
    setStatus(true);
  }

  return (
    <div>
      <h1>Car Details:</h1>
      <form ref={detailsRef} onChange={handleInputChange}>
        <label for="model">Model</label>
        <input type="text" id="model" name="model" />
        <br></br> <br></br>
        <label for="year">Year</label>
        <input type="text" id="year" name="year" />
        <br></br> <br></br>
        <label for="color">Color</label>
        <input type="text" id="color" name="color" />
      </form>
    </div>
  );
}
