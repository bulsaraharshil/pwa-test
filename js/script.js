if ('serviceWorker' in  navigator){
    navigator.serviceWorker.register('../service-worker.js ', {scope: '/pwa-test/'})
} 

// let btn = document.getElementById('myButton');
// btn.addEventListener('click', function (){
//     alert('ok 1');
// });
