const images = [
    {name: "memorygame1.png", alt: "Starting Screen"},
    {name: "memorygame2.png", alt: "Revealed Screen"},
    {name: "memorygame3.png", alt: "Gameplay"},
    {name: "memorygame4.png", alt: "End Screen"},
];

const reviews = [];

reviewTemplate = function (username, content, rating) {
    return {
        username: username,
        content: content,
        rating: rating,
        date: new Date().toLocaleDateString("en-IE", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "2-digit"
        })
    };
};

let imagesCompiled = Handlebars.compile(document.querySelector("#images").innerHTML);
let reviewCompiled = Handlebars.compile(document.querySelector('#review').innerHTML);

let refreshHandlebars = (template, data, parentID) => {
    document.querySelector(parentID).innerHTML = template(data);
}

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    reviews.unshift(reviewTemplate(
        form.elements.username.value,
        form.elements.content.value,
        form.elements.rating.value));

    refreshHandlebars(reviewCompiled, reviews, '#reviews');

    Array.from(form.elements).forEach(item => {
        if (item.type !== 'submit' && item.type !== 'radio') {
            item.value = "";
        }
    });
    modal.close();
});

refreshHandlebars(reviewCompiled, reviews, '#reviews');
refreshHandlebars(imagesCompiled, images, '#gallery');

imageElems = document.querySelectorAll('img');
imageElems.forEach(image => {
    image.addEventListener('mouseenter', (evt) => evt.target.style.opacity = .7);
    image.addEventListener('mouseleave', (evt) => evt.target.style.opacity = 1);
});

lightGallery(document.querySelector('#gallery'), {
    plugins: [lgZoom, lgThumbnail, lgFullscreen],
    thumbWidth: 80,
    controls: true,
    getCaptionFromTitleOrAlt: true,
    loop: true,
    actualSize: false,
    counter: true,
    fullScreen: true,
    zoom: true,
    mode: 'lg-fade'
});

var modal = jSuites.modal(document.getElementById('modal'), {
    width: '600px',
    height: '480px',
    closed: true,
});

btn.addEventListener('click', function () {
    modal.open()
});
