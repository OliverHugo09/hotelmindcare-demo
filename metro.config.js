const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = (() => {
  const defaultConfig = getDefaultConfig(__dirname);
  const { transformer, resolver } = defaultConfig;

  return {
    ...defaultConfig,
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      ...resolver,
      assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...resolver.sourceExts, "svg"],
    },
  };
})();

module.exports = withNativeWind(config, { input: "./global.css" });
