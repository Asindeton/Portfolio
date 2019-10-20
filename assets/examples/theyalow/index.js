function change( el )
{
    if ( el.value === "desktop" )
        el.value = "mobile";
    else
        el.value = "desktop";
}

function goBack() {
    window.history.back();
  }

const button = document.getElementById('button-change-version');
let counter = 0;

button.addEventListener('click', function(){
    const content = document.getElementById('content')
    if(counter == 0 || counter%2==0) {
    content.className = 'to-mobile-version'
} else{
    content.className = 'to-desktop-version'
    }
    counter++;
});