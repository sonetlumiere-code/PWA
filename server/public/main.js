if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(registered => console.log('Service worker registered', registered))
        .catch(error => console.log('Service Worker registration failed', error));
} else {
    console.log('Service Workers no soportados');
}