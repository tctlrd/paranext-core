const path = require('path');

const rootPath = path.join(__dirname, '../..');
const rootNodeModulesPath = path.join(rootPath, 'node_modules');

const dllPath = path.join(__dirname, '../dll');

const srcPath = path.join(rootPath, 'src');
const srcMainPath = path.join(srcPath, 'main');
const srcExtensionHostPath = path.join(srcPath, 'extension-host');
const srcRendererPath = path.join(srcPath, 'renderer');
const srcSharedPath = path.join(srcPath, 'shared');
const srcDeclarationsPath = path.join(srcPath, 'declarations');

const releasePath = path.join(rootPath, 'release');
const appPath = path.join(releasePath, 'app');
const appPackagePath = path.join(appPath, 'package.json');
const appNodeModulesPath = path.join(appPath, 'node_modules');

const distPath = path.join(appPath, 'dist');
const distMainPath = path.join(distPath, 'main');
const distExtensionHostPath = path.join(distPath, 'extension-host');
const distRendererPath = path.join(distPath, 'renderer');

const buildPath = path.join(releasePath, 'build');

const extensionsPath = path.join(rootPath, 'extensions');
const extensionsDistPath = path.join(extensionsPath, 'dist');
const extensionsLibPath = path.join(extensionsPath, 'lib');

const webpackPaths = {
  rootPath,
  rootNodeModulesPath,
  dllPath,
  srcPath,
  srcMainPath,
  srcExtensionHostPath,
  srcRendererPath,
  srcSharedPath,
  srcDeclarationsPath,
  releasePath,
  appPath,
  appPackagePath,
  appNodeModulesPath,
  distPath,
  distMainPath,
  distExtensionHostPath,
  distRendererPath,
  buildPath,
  extensionsPath,
  extensionsDistPath,
  extensionsLibPath,
};
export default webpackPaths;
