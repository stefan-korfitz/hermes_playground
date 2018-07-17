import { AppRegistry } from 'react-native';
import App from './src/components/App';

// TODO : dette er en temp-fix, da det reelt set ikke fixer issuet, men bare får den warning til at forsvinde!...
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('hermes_playground', () => App);
