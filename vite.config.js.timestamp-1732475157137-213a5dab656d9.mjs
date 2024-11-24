// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/idrik/OneDrive/Desktop/Desktop2.0/QTpythonVue3PHP/Vue3JS/JobPostProject1/RealJobSite/RealJobSite/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/idrik/OneDrive/Desktop/Desktop2.0/QTpythonVue3PHP/Vue3JS/JobPostProject1/RealJobSite/RealJobSite/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/idrik/OneDrive/Desktop/Desktop2.0/QTpythonVue3PHP/Vue3JS/JobPostProject1/RealJobSite/RealJobSite/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueDevTools from "file:///C:/Users/idrik/OneDrive/Desktop/Desktop2.0/QTpythonVue3PHP/Vue3JS/JobPostProject1/RealJobSite/RealJobSite/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/idrik/OneDrive/Desktop/Desktop2.0/QTpythonVue3PHP/Vue3JS/JobPostProject1/RealJobSite/RealJobSite/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools()
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpZHJpa1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXERlc2t0b3AyLjBcXFxcUVRweXRob25WdWUzUEhQXFxcXFZ1ZTNKU1xcXFxKb2JQb3N0UHJvamVjdDFcXFxcUmVhbEpvYlNpdGVcXFxcUmVhbEpvYlNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGlkcmlrXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcRGVza3RvcDIuMFxcXFxRVHB5dGhvblZ1ZTNQSFBcXFxcVnVlM0pTXFxcXEpvYlBvc3RQcm9qZWN0MVxcXFxSZWFsSm9iU2l0ZVxcXFxSZWFsSm9iU2l0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvaWRyaWsvT25lRHJpdmUvRGVza3RvcC9EZXNrdG9wMi4wL1FUcHl0aG9uVnVlM1BIUC9WdWUzSlMvSm9iUG9zdFByb2plY3QxL1JlYWxKb2JTaXRlL1JlYWxKb2JTaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHZ1ZUpzeCgpLFxuICAgIHZ1ZURldlRvb2xzKCksXG4gIF0sXG4gIHNlcnZlcjoge1xuXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHsgXG4gICAgICAgICAgdGFyZ2V0OiAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG5cbiAgICAgICAgfVxuXG4gICAgICB9LFxuICAgIH0sXG4gIFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1nQixTQUFTLGVBQWUsV0FBVztBQUV0aUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUx1VCxJQUFNLDJDQUEyQztBQVFoWSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBRUosT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUztBQUFBLFFBQ1QsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BRTlDO0FBQUEsSUFFRjtBQUFBLEVBQ0Y7QUFBQSxFQUVGLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
