// app.config.ts
import { defineApp } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";
var app_config_default = defineApp({
  vite: {
    plugins: [tailwindcss()]
  }
});
export {
  app_config_default as default
};
