import React, { useState } from "react";
import { ImagePixelated } from "react-pixelate";
import imgSrc from "../../image.png";
import "./style.css";
import { useDebouncedCallback } from "use-debounce";

export const ImagePixelatedDemo = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [centered, setCentered] = useState<boolean>();
  const [pixelSize, setPixelSize] = useState<number>(5);
  const [fillTransparencyColor, setFillTransparencyColor] = useState<string>(
    "white"
  );
  const debounceHandler = useDebouncedCallback(
    (value, func) => {
      func(value);
    },
    // delay in ms
    200
  );

  return (
    <>
      <h3>Image Pixelated</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: 30,
          width: "100%",
        }}
      >
        <div>
          <p>Original Image</p>
          <img src={imgSrc} />
        </div>
        <div>
          <p>Pixelated Image</p>
          <ImagePixelated
            src={imgSrc}
            width={width}
            height={height}
            pixelSize={pixelSize}
            centered={centered}
            fillTransparencyColor={fillTransparencyColor}
          />
        </div>
        <div>
          <form>
            <div className="form-item">
              <label className="form-label" htmlFor="width">
                Width:
              </label>
              <input
                defaultValue={width}
                name="width"
                type="number"
                placeholder="Original Width"
                onChange={(e) =>
                  debounceHandler(parseInt(e.target.value || "0"), setWidth)
                }
              />
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="height">
                Height:
              </label>
              <input
                defaultValue={height}
                name="height"
                type="number"
                placeholder="Original Height"
                onChange={(e) => setHeight(parseInt(e.target.value || "0"))}
              />
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="pixelSize">
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
            <div className="form-item">
              <label className="form-label" htmlFor="center">
                Centered:
              </label>
              <input
                defaultChecked={centered}
                name="center"
                type="checkbox"
                style={{ fontSize: 100 }}
                onChange={(e) => debounceHandler(e.target.checked, setCentered)}
              />
            </div>
            <div className="form-item">
              <label className="form-label" htmlFor="fillTransparencyColor">
                FillTransparencyColor:
              </label>
              <input
                defaultValue="#ffffff"
                name="fillTransparencyColor"
                type="color"
                onChange={(e) =>
                  debounceHandler(e.target.value, setFillTransparencyColor)
                }
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
