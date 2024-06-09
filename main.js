

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;

    const prevArrow = document.querySelector('.testimonies .arrows .arrow:nth-child(1)');
    const nextArrow = document.querySelector('.testimonies .arrows .arrow:nth-child(2)');
    const slider = document.querySelector('.testimonies .cards');
    const cards = document.querySelectorAll('.testimonies .cards .card');
    const totalSlides = cards.length;

    prevArrow.addEventListener('click', () => {
        moveSlide(-1);
    });

    nextArrow.addEventListener('click', () => {
        moveSlide(1);
    });

    function moveSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
    }

    // Opcional: Mover automáticamente las diapositivas cada 3 segundos
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});


// document.addEventListener('DOMContentLoaded', function() {
//     let currentIndex = 0;

//     const prevArrow = document.querySelector('.testimonies .arrows .arrow:nth-child(1)');
//     const nextArrow = document.querySelector('.testimonies .arrows .arrow:nth-child(2)');
//     const slider = document.querySelector('.testimonies .cards');
//     const cards = document.querySelectorAll('.testimonies .cards .card');
//     const totalSlides = cards.length;

//     prevArrow.addEventListener('click', () => {
//         moveSlide(-1);
//     });

//     nextArrow.addEventListener('click', () => {
//         moveSlide(1);
//     });

//     function moveSlide(direction) {
//         currentIndex += direction;

//         if (currentIndex < 0) {
//             currentIndex = totalSlides - 1;
//         } else if (currentIndex >= totalSlides) {
//             currentIndex = 0;
//         }

//         if (currentIndex === totalSlides - 1 && direction === 1) {
//             // Si estamos en el último slide y se hace clic en "Next", ir al primer slide
//             slider.style.transition = 'none';
//             currentIndex = 0;
//             slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
//             setTimeout(() => {
//                 slider.style.transition = '';
//                 currentIndex = 1;
//                 slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
//             }, 50);
//         } else if (currentIndex === 0 && direction === -1) {
//             // Si estamos en el primer slide y se hace clic en "Prev", ir al último slide
//             slider.style.transition = 'none';
//             currentIndex = totalSlides - 1;
//             slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
//             setTimeout(() => {
//                 slider.style.transition = '';
//                 currentIndex = totalSlides - 2;
//                 slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
//             }, 50);
//         } else {
//             slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
//         }
//     }

//     // Opcional: Mover automáticamente las diapositivas cada 3 segundos
//     setInterval(() => {
//         moveSlide(1);
//     }, 5000);
// });



