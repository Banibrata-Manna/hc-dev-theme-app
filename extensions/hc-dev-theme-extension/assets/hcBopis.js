export function getStores() {
    return [
        {
            name: "Demo Store",
            address: "Demo Address",
            timings: "10 AM - 9 PM"
        },
        {
            name: "Another Store",
            address: "Another Address",
            timings: "9 AM - 8 PM"
        },
        {
            name: "Third Store",
            address: "Third Address",
            timings: "11 AM - 7 PM"
        }
    ];
}

// document.addEventListener('DOMContentLoaded', function() {
//     var stores = getStores();
//     var container = document.getElementById('store-list');
//     if (container) {
//         stores.forEach(function(store) {
//             var html = `<div class="store">
//                 <h3>${store.name}</h3>
//                 <p>${store.address}</p>
//                 <p>${store.timings}</p>
//             </div>`;
//             container.insertAdjacentHTML('beforeend', html);
//         });
//     }
// });

alert("Hello, World!");