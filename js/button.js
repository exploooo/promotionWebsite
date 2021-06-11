const $button = document.querySelector('a');
const $contactWrapper = document.querySelector('#contact-wrapper');

const $newElement = document.createElement('p');
$newElement.innerHTML = "I think this is a beggining of a beautifull partnership!<br> ~ definitely not Rick Blaine";
$newElement.classList.add('new-paragraph');

let $counter;

const paragraphOpacity = function(){
    $newElement.style.opacity="1";
}

const mouseOut = function(){
    $contactWrapper.style.height="15rem";
    $contactWrapper.removeChild($newElement);
}


$button.addEventListener('mouseover', function(){
    clearTimeout($counter);
    $contactWrapper.style.height="20rem";
    $contactWrapper.appendChild($newElement);
    setTimeout(paragraphOpacity,500);
});

$button.addEventListener('mouseout', function(){
    $newElement.style.opacity="0";
    $counter = setTimeout(mouseOut,500);
});