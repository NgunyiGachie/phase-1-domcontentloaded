function changeParagraphText() {
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.textContent = 'This is really cool!';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'JavaScript is so cool. It lets me add text to my page programmatically.';
    document.body.appendChild(paragraph);
});


document.addEventListener("DOMContentLoaded", changeParagraphText);

