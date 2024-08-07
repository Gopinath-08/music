/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './src/App';
import {name as appName} from './app.json';
import { playBackServices } from './musicPlayerServices';

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => playBackServices);