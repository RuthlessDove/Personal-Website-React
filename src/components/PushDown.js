// Function to scroll down on press of the button at the bottom of the hero section 

export default function PushDown() {
    window.scrollBy({
        top: 600,
        behavior: 'smooth'
    });
}
