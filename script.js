const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements=document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));


const slideshows = document.querySelectorAll(".slideshow");

slideshows.forEach(slideshow => {

    let slideIndex = 0;

    const slides = slideshow.querySelectorAll(".slides");
    const dots = slideshow.querySelectorAll(".dot");

    function showSlide(index){

        if(index >= slides.length) slideIndex = 0;
        if(index < 0) slideIndex = slides.length - 1;

        slides.forEach(slide => slide.style.display = "none");
        dots.forEach(dot => dot.classList.remove("active-dot"));

        slides[slideIndex].style.display = "block";
        dots[slideIndex].classList.add("active-dot");
    }

    showSlide(slideIndex);

    slideshow.querySelector(".next").onclick = () => {

        slideIndex++;

        showSlide(slideIndex);

    };

    slideshow.querySelector(".prev").onclick = () => {

        slideIndex--;

        showSlide(slideIndex);

    };

    dots.forEach((dot, index)=>{

        dot.onclick = ()=>{

            slideIndex = index;

            showSlide(slideIndex);

        };

    });

});
