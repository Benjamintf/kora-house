document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-gallery-filter]").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-gallery-filter]").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
    const filter=btn.dataset.galleryFilter;
    document.querySelectorAll("[data-gallery-item]").forEach(item=>item.style.display=(filter==="all"||item.dataset.category===filter)?"block":"none");
  }));
  const lightbox=document.querySelector(".lightbox");
  const lightImg=lightbox?.querySelector("img");
  document.querySelectorAll("[data-lightbox]").forEach(fig=>fig.addEventListener("click",()=>{
    lightImg.src=fig.querySelector("img").src; lightImg.alt=fig.querySelector("img").alt; lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false");
  }));
  function close(){lightbox?.classList.remove("open");lightbox?.setAttribute("aria-hidden","true")}
  document.querySelector(".lightbox-close")?.addEventListener("click",close);
  lightbox?.addEventListener("click",e=>{if(e.target===lightbox)close()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
});
