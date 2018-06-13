"use strict";

/* Register Service Worker
 * if you wanna include the prompt, check this page out:
 * https://developers.google.com/web/fundamentals/app-install-banners/?hl=en
 */

navigator.serviceWorker && navigator.serviceWorker.register('sw.js').then(function(registration) {
    console.log('Excellent, registered with scope: ', registration.scope);
  });


 /*  If you wannna add Push notifications later, got to this section:
  https://codelabs.developers.google.com/codelabs/migrate-to-progressive-web-apps/index.html?index=..%2F..%2Findex#4
 */
