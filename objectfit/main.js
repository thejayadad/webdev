
function changeImage(style){
    const image = document.getElementById('review-image');
    switch(style){
        case 'fill':
            image.style.objectFit = 'fill';
            break;
        case 'contain':
            image.style.objectFit = 'contain';
            break;
        case 'cover':
            image.style.objectFit = 'cover';
            break;
        case 'none':
            image.style.objectFit = 'none';
            break;
    }
}