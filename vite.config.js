import { defineConfig } from "vite";

import react
from "@vitejs/plugin-react";

import { VitePWA }
from "vite-plugin-pwa";

export default defineConfig({

  plugins: [

    react(),

    VitePWA({

      registerType:
        "autoUpdate",

      includeAssets: [

        "plenser-logo.png"

      ],

      manifest: {

        name:
          "Plenser AI Operations",

        short_name:
          "Plenser AI",

        description:
          "Operational intelligence & engineering analytics platform",

        theme_color:
          "#020617",

        background_color:
          "#020617",

        display:
          "standalone",

        orientation:
          "portrait",

        scope: "/",

        start_url: "/",

        icons: [

          {

            src:
              "/plenser-logo.png",

            sizes:
              "192x192",

            type:
              "image/png"

          },

          {

            src:
              "/plenser-logo.png",

            sizes:
              "512x512",

            type:
              "image/png"

          }

        ]

      }

    })

  ]

});
