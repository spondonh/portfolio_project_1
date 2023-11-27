const cl = (msgToLog) => {console.log(msgToLog);}; 


// cl("JS file is alive");
const contactForm = document.getElementById('contactForm');
// cl('Got the element:' + contactForm.id);


// Just for debugging
const sendAlert = () => {
    cl('Entered sendAlert!');
    window.alert('Message submitted!');
};
// contactForm.addEventListener("submit",sendAlert); // Just for debugging


const hideTheForm = (event) => {
    event.preventDefault();
    // event.target.style.visibility = "collapse";
    event.target.style.display = "none";
    theHiddenStuff.style.display = "block";
}

contactForm.addEventListener("submit", hideTheForm); // Now try to hide the form

const theHiddenStuff = document.getElementById('jk');
