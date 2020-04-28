'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "19df2a300fd33bfc70d99f74fdaddeb2",
"assets/assets/epubs/test.epub": "98c23e212fe13da13f5a9e9152d2a099",
"assets/assets/images/icon_mymo_header_faded.png": "74a571e31aee7454c7e016eedd73fccc",
"assets/assets/images/logo_poweredby_ZB.png": "c43f17e41c2275f95a0391b07ba262c2",
"assets/assets/images/MyMobilityWhiteLogo.png": "a6feb660a865f3eeac6205141b7e9379",
"assets/assets/images/mymobility_LoginLogo.png": "fbf2235634e0b5e98cc37d57cccea67a",
"assets/FontManifest.json": "a09b86ab83a79e5231aaaea86d4ad505",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "6503c6a56271f9a4b04c9244bbe5994f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "724526fdc28338ce3ed3296ef2cc0625",
"/": "724526fdc28338ce3ed3296ef2cc0625",
"main.dart.js": "251ea8c19f1d6e4e8645c5cd5a36fa50",
"manifest.json": "7869911b3cbcec6e49893c589c6e0022"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
