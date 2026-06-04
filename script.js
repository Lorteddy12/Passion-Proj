
let animation = document.getElementById(ani);

function goBack() {
    window.history.back();
}
const projects = document.querySelectorAll('.proj');

function switchPageAnimation() {
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
}
function buttonFadeOut(){
  document.addEventListener('DOMContentLoaded',  () => {
    const links = document.querySelectorAll('a');

  })
}
  projects.forEach((proj) => {
    // create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    proj.appendChild(overlay);

    let text = proj.dataset.title;
    let p = document.createElement("H2");
    p.textContent = text;
    overlay.appendChild(p);

    // hover in
    proj.addEventListener('mouseenter', () => {
        overlay.style.opacity = '0';
    });

    // hover out
    proj.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0.7';
    });
});
// This just creates another page, and i already made html pages with numerical order, which was easy.
projects.forEach((proj, index) => {
    proj.addEventListener("click", () => {
        window.location.href = `page${index + 1}.html`;
    });
});
