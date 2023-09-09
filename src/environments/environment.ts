// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_API_URI: {
    BASE_SERVICE_CUSTOMER_API: 'http://139.162.3.13:8017/',
    BASE_SERVICE_SELLER_API: 'http://139.162.3.13:9002/',
    CLIENT_ADDRESS: 'http://localhost:8082',
    // BASE_SERVICE_API: 'http://10.254.145.209:8088/',
    // CLIENT_ADDRESS:    'http://10.254.145.209:8082',
  }, 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
