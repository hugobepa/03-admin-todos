import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailus.io',
        
      },
       {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        
      },

     
      
    ],
  },
   
    
  

  /* config options here */
};
/*
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailus.io',
      
      },
    ],
  },
}
*/
export default nextConfig;
