import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const alt         = "Manuel Villarejo — IT Director & Enterprise Engineering Leader";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0e0c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* amber rule */}
        <div style={{ width: 44, height: 2, background: "#f59e0b", marginBottom: 36 }} />

        {/* eyebrow */}
        <div
          style={{
            color: "#f59e0b",
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 28,
            fontFamily: "monospace",
            fontWeight: 400,
          }}
        >
          IT Director · Enterprise Engineering Leader
        </div>

        {/* name — two lines */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 40 }}>
          <div
            style={{
              color: "#f0ebe2",
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
            }}
          >
            Manuel
          </div>
          <div
            style={{
              color: "#f0ebe2",
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
            }}
          >
            Villarejo
          </div>
        </div>

        {/* subtitle */}
        <div
          style={{
            color: "#6b6560",
            fontSize: 19,
            letterSpacing: "0.01em",
            fontWeight: 400,
          }}
        >
          19 years · Technology Strategy · M&amp;A · ISO 27001
        </div>

        {/* domain — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            right: 90,
            color: "#2e2b28",
            fontSize: 13,
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          villarejo.in
        </div>

        {/* monogram — top right */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 90,
            color: "#f0ebe2",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          M<span style={{ color: "#f59e0b" }}>V</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
