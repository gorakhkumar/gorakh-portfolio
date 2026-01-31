const navbar = document.getElementById("navbar");
const navLink = document.getElementById("navLink");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
    mobileMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(0)';
}


window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navbar.classList.add('bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm',);
        navLink.classList.remove('bg-[#0F172A]', 'shadow-sm', 'bg-opacity-50');
    } else {
        navbar.classList.remove('bg-[#0F172A]', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLink.classList.add('bg-[#0F172A]', 'shadow-sm', 'bg-opacity-50');
    }
})