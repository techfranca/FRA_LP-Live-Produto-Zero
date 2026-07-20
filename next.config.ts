import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fixa a raiz do workspace nesta pasta (existem outros lockfiles na máquina;
  // sem isso o Turbopack pode inferir a raiz errada).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
