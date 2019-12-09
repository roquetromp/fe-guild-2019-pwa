const manifest = {
    "name": "Selfie stick",
    "short_name": "Selfie",
    "theme_color": "#2196f3",
    "background_color": "#f321f1",
    "display": "standalone",
    "orientation": "portrait",
    "icons": [
        {
            "src": "src/images/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
        },
        {
            "src": "src/images/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "src": "src/images/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
        },
        {
            "src": "src/images/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "src/images/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
        },
        {
            "src": "src/images/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "src/images/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "src/images/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "splash_pages": null,
    "dir": "ltr",
    "lang": "en-US"
};


const base = document.querySelector('base');
let baseUrl = base && base.href || '';

if (!baseUrl.endsWith('/')) {
    baseUrl = `${baseUrl}/`;
}

manifest['start_url'] = `${baseUrl}index.html`;
manifest.icons.forEach(icon => {
    icon.src = `${baseUrl}${icon.src}`;
});

const stringManifest = JSON.stringify(manifest);
const blob = new Blob([stringManifest], { type: 'application/json' });
const manifestURL = URL.createObjectURL(blob);
document.querySelector('#manifestPlaceholder').setAttribute('href', manifestURL);

window.addEventListener('load', () => {
    // Place this code after the existing code !!!
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(`${baseUrl}sw.js`)
            .then(registration => {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
    }
});