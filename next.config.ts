// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: [
//         "utfs.io"
//       ],
//     remotePatterns: [
//       {
        
//         protocol: 'https',
//         hostname: 'f7f948mkor.ufs.sh',
//         pathname: '**',
//       },
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["utfs.io"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ufs.sh", // allow all subdomains like qi7egtx8yo.ufs.sh
        pathname: "**",
      },
    ],
  },

  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
