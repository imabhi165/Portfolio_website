import React from "react";

const OPTIONS = [
  { key: "animated", label: "Animated Gradient" },
  { key: "conic", label: "Conic Kaleidoscope" },
  { key: "cinematic", label: "Cinematic" },
  { key: "particles", label: "Particles Only" },
];

const BackgroundSwitcher = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-xs text-white/70 hidden md:inline">
        Background
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-black/60 text-white text-sm rounded-md px-2 py-1 border border-white/10 backdrop-blur-sm"
      >
        {OPTIONS.map((o) => (
          <option key={o.key} value={o.key}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BackgroundSwitcher;
