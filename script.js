const mainNav = `
        <div class="leftside">
           <label><a href="../index.html">KP</a></label>
        </div>
        <nav class="navigation">
            <div class="rightside">
                <ul class="navbar-elements">

                    <li><a href="index.html">Home</a></li>
                    <li><a href="Redirect/About.html">About</a></li>
                    <li><a href="Redirect/Portfolio.html">Portfolio</a></li>
                    <li><a href="Redirect/Contact.html">Contact</a></li>
                    <li><button>Book Now</button></li>
                    <!-- two more elements are to be added facebook icon and instagram icon -->

                </ul>
            </div>
        </nav>
        
        <div class="mobileNavbarButtons">
            <ion-icon name="menu-outline" class="mobileMenu"></ion-icon>
            <ion-icon name="close-outline" class="mobileMenu"></ion-icon>
        </div>
        `

const addingMainNavBar = document.querySelector(".navigationBar")
addingMainNavBar.innerHTML = mainNav

const mobileNavbarButtons = document.querySelector(".mobileNavbarButtons");
const navigationBar = document.querySelector(".navigationBar")

function toggleNavbar(){
    navigationBar.classList.toggle("active")
    navigationBar.classList.toggle("scrollLock")
}

mobileNavbarButtons.addEventListener('click', () => toggleNavbar())