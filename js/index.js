const img = document.querySelector('.img-content');
//generic hover effect
img.addEventListener('mouseenter', () => {
    img.style.transform = "scale(1.5)";
    img.style.transition = "all 0.3s";
});

img.addEventListener('mouseleave', () => {
    img.style.transform = "scale(1)"; 
});


  window.addEventListener('resize', () => {
    const screen = document.querySelector('.inverse-content');
    screen.style.backgroundColor = 'blue';
  });

  const textChange = document.querySelector('.logo-heading');

textChange.addEventListener('click', (e) => {
    e.target.style.transform = "scale(1.5)";
    e.target.style.transition = "all 0.3s";
    e.target.style.fontSize = '6rem';
  });
  const img2 = document.querySelectorAll('.img-content')[1];
  img2.addEventListener('dblclick', () => {
    img2.style.transform = "scale(2)"; 
});
  


document.addEventListener("keydown", (event) => { 
  const body = document.querySelector("body");
  body.style.backgroundColor="papayawhip";
})
  document.addEventListener('keydown', (event) => {
    const foot = document.querySelector('.destination');
    event.stopPropagation();
    foot.style.backgroundColor = 'black';
  });



const link = document.querySelector('.nav');

 link.addEventListener ('click', (e) => {
   e.preventDefault();
    e.target.style.color = 'blue';
    e.target.style.fontSize = '2rem';
  });
  

const source = document.querySelector('body');

source.addEventListener('copy', () => {
    alert ("dont steal!");
});


noContext = document.querySelector('img');

noContext.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});


const changeImage = document.querySelector('.content-destination img');

changeImage.addEventListener('dblclick', () => {
  
  changeImage.src = "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80";
})


