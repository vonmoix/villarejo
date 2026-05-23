import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const size        = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0e0c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 800,
            fontSize: 28,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#f0ebe2" }}>M</span>
          <span style={{ color: "#f59e0b" }}>V</span>
        </div>
      </div>
    ),
    { width: 64, height: 64 },
  );
}
