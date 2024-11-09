const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { resolver } = config;

  config.resolver = {
    ...resolver,
    assetExts: [...resolver.assetExts, "bin", "blend", "obj", "glb", "gltf", "png", "jpg"],
    sourceExts: [
      ...resolver.sourceExts,
      "js",
      "jsx",
      "json",
      "ts",
      "tsx",
      "cjs",
      "mjs",
    ],
  };

  return config;
})();
