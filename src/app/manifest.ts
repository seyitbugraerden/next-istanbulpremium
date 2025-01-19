import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "İstanbul Premium Oto Servis | Profesyonel Araç Bakım ve Onarım",
    short_name: "İstanbul Premium Oto Servis",
    description:
      "İstanbul Premium oto servis hizmetleriyle aracınıza özel bakım ve onarım çözümleri sunuyoruz. Hızlı, güvenilir ve kaliteli hizmet için bizi tercih edin!",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F3FF",
    theme_color: "#24213A",
    icons: [
      {
        src: "/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}