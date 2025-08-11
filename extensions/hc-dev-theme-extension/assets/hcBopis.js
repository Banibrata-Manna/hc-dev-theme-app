function getStores() {
    return [
        { name: "Demo Store", address: "Demo Address", timings: "10 AM - 9 PM", "city": "Aventura",
                "postalCode": "33180",
                "country": "United States",
                "countryCode": "US",
                "state": "Florida"},
        { name: "Another Store", address: "Another Address", timings: "9 AM - 8 PM", "city": "Miami",
                "postalCode": "33101",
                "country": "United States",
                "countryCode": "US",
                "state": "Florida"},
        { name: "Third Store", address: "Third Address", timings: "11 AM - 7 PM", "city": "Orlando",
                "postalCode": "32801",
                "country": "United States",
                "countryCode": "US",
                "state": "Florida"}
    ];
}

document.addEventListener('DOMContentLoaded', function() {
    var stores = getStores();
    var container = document.getElementById('store-list');
    if (container) {
        stores.forEach(function(store) {
            var html = 
            `<div class="store">
                <div class="store-name">
                    <h3>${store.name}</h3>
                </div>
                <p>${store.address}</p>
                <p>Open Today: ${store.timings}</p>
            </div>
            <div class="store-actions">
                <button id="pickup-btn" class="btn">Pickup Here</button>
                <p>In Stock</p>
            </div>
            <hr/>`;
            container.insertAdjacentHTML('beforeend', html);
        });
    }
});