
let animation = document.getElementById(ani);

function goBack() {
    window.history.back();
}
const projects = document.querySelectorAll('.proj');

function switchPageAnimation() {
    addEventListener
}
document.addEventListener('DOMContentLoaded', () => { // listener for when the page is loaded
    const links = document.querySelectorAll('a'); // grabs <a> tags and makes the a varible
    links.forEach(link => { //for each link that gets clicked it will send them to the page 
        link.addEventListener('click', (e) => {//by fading out unless it includes a (section on page)
        const targetUrl = link.getAttribute('href'); 
        if (targetUrl && !targetUrl.startsWith('#') && !targetUrl.includes('://')) {
          e.preventDefault(); 
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = targetUrl;
          }, 500); 
        }
      });
    });
  });
