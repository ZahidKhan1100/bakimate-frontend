import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 } as const;

export const OG_ALT = "BakiMate — Udhaar & installments, clear and fast";

export function bakimateOgImageResponse(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0b1220 0%, #1e293b 45%, #0f172a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #00875A, #00a372)",
            }}
          />
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#00875A",
            }}
          >
            BakiMate
          </span>
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: "#94a3b8",
            marginTop: 8,
          }}
        >
          Udhaar & installments, clear and fast
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#2EC4B6",
            marginTop: 28,
            fontWeight: 600,
          }}
        >
          Free on the App Store · iPhone & iPad
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}

/** @deprecated Use `bakimateOgImageResponse` */
export const habimateOgImageResponse = bakimateOgImageResponse;
