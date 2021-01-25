module.exports = {
  pwa: {
    name: "Co2 Footprint",
    themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      name: "Co2 Footprint",
      short_name: "Footprint",
      start_url: ".",
      display: "fullscreen", //standalone
      background_color: "#42b983",
    },
    workboxPluginMode: "GenerateSW",
  },
}
