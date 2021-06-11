const $images = document.querySelectorAll('#gallery-display > img');
const $next = document.querySelector('#next');
const $previous = document.querySelector('#previous');

let $timer;
let $changer = 0;

const left = function(){
    $changer-=100;
    if($changer===-($images.length)*100){
        $changer=0;
    }
    $images.forEach(x=>x.style.transform = `translateX(${$changer}%)`);

    clearInterval($timer);
    $timer = setInterval(left,5000); 
}

const right = function(){
    $changer+=100;
    if($changer>0){
        $changer=($images.length-1)*-100;
    }
    $images.forEach(x=>x.style.transform = `translateX(${$changer}%)`);

    clearInterval($timer);
    $timer = setInterval(left,5000); 
}

const autoLeft = function(){
    $timer = setInterval(left,5000);
}
 
autoLeft();

$next.addEventListener('click', left);

$previous.addEventListener('click', right);