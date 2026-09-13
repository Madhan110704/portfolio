import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/api/**/*': ['./public/**/*'],
  },
  async headers() {
    return [
      {
        source: '/resume/Madhan_Raj_Resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline; filename="Madhan_Raj_M_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
