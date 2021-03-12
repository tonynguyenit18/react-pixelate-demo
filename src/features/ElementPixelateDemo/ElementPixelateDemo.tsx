import React, { useState } from "react";
import { ElementPixelated } from "react-pixelate";
import useDebouncedCallback from "use-debounce/lib/useDebouncedCallback";

export const ElementPixelatedDemo = () => {
  const [pixelSize, setPixelSize] = useState<number>(5);
  const debounceHandler = useDebouncedCallback(
    (value, func) => {
      func(value);
    },
    // delay in ms
    200
  );
  return (
    <>
      <h3>Element Pixelated</h3>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
          marginBottom: 30,
          width: "100%",
        }}
      >
        <div>
          <p>Original div element</p>
          <div style={{ width: 500 }}>
            This is the text want to be pixelated. set pixelSize to be 0 to see
            the text
          </div>
        </div>
        <div>
          <p>Pixelated div element</p>
          <ElementPixelated pixelSize={pixelSize}>
            <div>
              This is the text want to be pixelated. set pixelSize to be 0 to
              see the text
            </div>
          </ElementPixelated>
        </div>
        <div>
          <form>
            <div className="form-item">
              <label
                style={{
                  textAlign: "left",
                  fontSize: 20,
                  fontWeight: 500,
                  width: 100,
                }}
                htmlFor="pixelSize"
              >
                PixelSize:
              </label>
              <input
                key={pixelSize}
                defaultValue={pixelSize}
                name="pixelSize"
                type="number"
                style={{ width: 50 }}
                onChange={(e) =>
                  debounceHandler(parseInt(e.target.value || "0"), setPixelSize)
                }
              />
              <input
                key={pixelSize + 1}
                defaultValue={pixelSize}
                name="pixelSize"
                type="range"
                min={0}
                step={1}
                onChange={(e) =>
                  debounceHandler(parseInt(e.target.value || "0"), setPixelSize)
                }
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
