
document.getElementById('year').textContent = new Date().getFullYear();


(function typewriter(){
  const el = document.getElementById('typeTarget');
  const full = "Designing futures that move.";
  if(!el) return;
  el.textContent = "";
  let i = 0;
  const tick = () => {
    if(i <= full.length){
      el.textContent = full.slice(0, i);
      i++;
      requestAnimationFrame(tick);
    }
  };
  setTimeout(()=>requestAnimationFrame(tick), 200);
})();


(function revealOnScroll(){
  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    items.forEach(i=>i.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    }
  }, { threshold:.12, rootMargin:"0px 0px -10% 0px" });
  items.forEach(i=>io.observe(i));
})();