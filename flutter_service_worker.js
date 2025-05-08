'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c8029e2963db600736f5f9f8875aef58",
"version.json": "d97bb43413a262df1855b2dcb20adf64",
"index.html": "4724e55d02cd458120c7796d025c02ff",
"/": "4724e55d02cd458120c7796d025c02ff",
"main.dart.js": "a7002ce0cfb0730d455510a13d2c7533",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "a5b711612660b5ee056e4f4ae82250c3",
"icons/Icon-192.png": "a5b711612660b5ee056e4f4ae82250c3",
"icons/Icon-maskable-192.png": "a5b711612660b5ee056e4f4ae82250c3",
"icons/Icon-maskable-512.png": "a5b711612660b5ee056e4f4ae82250c3",
"icons/Icon-512.png": "a5b711612660b5ee056e4f4ae82250c3",
"manifest.json": "d5a7d64ecc1f2899e6b2cb942691ff1d",
"assets/AssetManifest.json": "2418064dc7e0e8b1be008d227e462546",
"assets/NOTICES": "3209e239acbd3ac1beabc34c5620cc38",
"assets/FontManifest.json": "b74165dc5b80759330cb01e2ccf06dae",
"assets/AssetManifest.bin.json": "32067de10633a6c94e8906bb9b310b8f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e1624355b8c9bb136806e97d9a7d3128",
"assets/fonts/MaterialIcons-Regular.otf": "a420cfe2c5982f66c6497773de622a57",
"assets/assets/images/svg/ic_ig.svg": "3c451c27d33cbbaf8401aa796bcd7ec5",
"assets/assets/images/svg/ic_facebook.svg": "1b059407eebc3313ee267da79e9ad35d",
"assets/assets/images/svg/ic_location.svg": "c97929279af90f053502f4c0b7dd133b",
"assets/assets/images/svg/ic_email.svg": "7c04ffedb8a1f493facf873787495e8e",
"assets/assets/images/svg/ic_linkin.svg": "a2a4fcfd72d4462c52544ff6281f4bff",
"assets/assets/images/svg/ic_telegram.svg": "73f9a0ede528882146ea4bfe2ae935b5",
"assets/assets/images/svg/ic_github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/images/png/person.png": "158ff4860632de8463c5000908ee5afd",
"assets/assets/images/jpg/toysnme.jpg": "fb0432bf2728b93e5548356d46b15781",
"assets/assets/images/jpg/phum_electronics.jpg": "c26ff425647b080697dd0cf8b51b0f8b",
"assets/assets/images/jpg/yeac.jpg": "cecd9ee19f01c8c0794ed9b74eb378a2",
"assets/assets/images/jpg/management_portal.jpg": "73b501d53d58a4ece653779d063b7315",
"assets/assets/images/jpg/phum_association.jpg": "7ee92be1aa25b2e4209e9b864739a779",
"assets/assets/images/jpg/ggearwholesale.jpg": "b98db9faa6279a30546d6abe64aa514b",
"assets/assets/fonts/KantumruyPro-Regular.ttf": "307a9d5d3eef890236589b986ffd9cf1",
"assets/assets/fonts/KantumruyPro-Thin.ttf": "c70b60b036aeacc715b521d25ea0f076",
"assets/assets/fonts/KantumruyPro-Bold.ttf": "a00945eaa49d658793e32a0fc5e99fd9",
"assets/assets/fonts/KantumruyPro-Medium.ttf": "717768b0de691bb654b8fd869ea70658",
"assets/assets/fonts/KantumruyPro-ExtraLightItalic.ttf": "281dbfeb889f9f55f8689f9a094e79da",
"assets/assets/fonts/KantumruyPro-SemiBoldItalic.ttf": "a5c3421892d9e22d0d00eaef54dd0ba4",
"assets/assets/fonts/KantumruyPro-ThinItalic.ttf": "34c8c32cf54bfbbc3bed34daf55c4a58",
"assets/assets/fonts/KantumruyPro-ExtraLight.ttf": "45516d01e18e9f416d9e620fe7d8c9e8",
"assets/assets/fonts/KantumruyPro-SemiBold.ttf": "1c5de94a9951d07fa2585ce34b1db159",
"assets/assets/fonts/KantumruyPro-BoldItalic.ttf": "7b6c6694858e22bae237b9ddc44fe81d",
"assets/assets/fonts/KantumruyPro-Light.ttf": "32b89deca03ca45cb3dc293452c83033",
"assets/assets/fonts/KantumruyPro-MediumItalic.ttf": "1badc249285304f18e3febf639dbbc87",
"assets/assets/fonts/KantumruyPro-LightItalic.ttf": "7d7c2be107779d3e7f70cd924398466e",
"assets/assets/fonts/KantumruyPro-Italic.ttf": "e7079a96af5af5572d8320d6b9e60b1b",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
