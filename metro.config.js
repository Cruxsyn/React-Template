const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Enable fast refresh for better development experience
config.resolver.sourceExts.push('mjs');

// Explicitly enable Fast Refresh
config.transformer = {
  ...config.transformer,
  enableBabelRCLookup: false,
  // Ensure Fast Refresh works properly
  unstable_allowRequireContext: true,
};

module.exports = config; 