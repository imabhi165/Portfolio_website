import React from "react";
import BackgroundAnimatedGradient from "./BackgroundAnimatedGradient";
import BackgroundParticles from "./BackgroundParticles";
import BackgroundCinematic from "./BackgroundCinematic";
import BackgroundConic from "./BackgroundConic";

const BackgroundManager = ({ variant = "animated", showParticles = true }) => {
  // variants: animated, conic, cinematic, particles-only
  return (
    <>
      {variant === "animated" && <BackgroundAnimatedGradient />}
      {variant === "conic" && <BackgroundConic />}
      {variant === "cinematic" && <BackgroundCinematic />}
      {variant === "particles" && (
        <BackgroundParticles style={{ opacity: 0.95 }} />
      )}

      {/* optional particles overlay for richness */}
      {showParticles && variant !== "particles" && (
        <BackgroundParticles style={{ zIndex: -10, opacity: 0.9 }} />
      )}
    </>
  );
};

export default BackgroundManager;
