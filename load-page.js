var mainContent = document.getElementById('article');

if (mainContent.childElementCount === 0) {
    var paragraph = document.createElement('p');
    paragraph.textContent = "첫 글을 작성해 보세요";
    paragraph.classList.add('editable-text');
    mainContent.appendChild(paragraph);
    console.log("There was nothing")

}
console.log(mainContent)