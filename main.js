function menuClick() {
var menu = document.getElementById('MobileMenu');
if (menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
} else {
    menu.classList.add('hidden');
}
}