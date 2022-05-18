if ('serviceWorker' in  navigator){
    navigator.serviceWorker.register('../service-worker.js ', {scope: '/pwa-test/'})
    .then(function(){
        console.log("SW ok");
    })
} 

// let btn = document.getElementById('myButton');
// btn.addEventListener('click', function (){
//     alert('ok 1');
// });
