// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBe8N_2Wdg2a2t4AU-UTPE8p7mLAQujnbk",
    authDomain: "cares-563ca.firebaseapp.com",
    databaseURL: "https://cares-563ca.firebaseio.com",
    projectId: "cares-563ca",
    storageBucket: "cares-563ca.appspot.com",
    messagingSenderId: "354150206790"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.