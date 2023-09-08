const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        // You can add code here to handle what happens when an image is clicked.
        // For example, opening a modal or linking to a larger version of the image.
    });
});
