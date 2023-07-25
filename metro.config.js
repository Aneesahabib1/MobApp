const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    // Add any custom configurations you need here.
    // For example, you can add custom assetExts or resolver options.
  };
})();
