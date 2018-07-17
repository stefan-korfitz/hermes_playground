/**
 * https://www.npmjs.com/package/react-native-localization
 */
import LocalizedStrings from 'react-native-localization';

let Strings = new LocalizedStrings({

    //#region language : ENGLISH
    "en":{

        // App.js -> Greeter
        "txt_hello_world": "Hello"

    },
    //#endregion language : ENGLISH

    //#region language : DANISH
    "da":{

        // App.js -> Greeter
        "txt_hello_world": "src/components/App.js"

    }
    //#endregion language : DANISH
});

module.exports = Strings;