const imgDiv = document.querySelector('.img')


const Python = document.getElementById('python');
const button = document.querySelectorAll('.button');

Python.addEventListener('click', () => {
    const img = document.createElement('img');
    img.className = 'img'
    img.setAttribute('src', "/Images/overview.png")
    imgDiv.appendChild(img)
    
    button.addEventListener('click', () => {
        if (button.textContext == 'Syntax') {
            const syntaxImg = document.createElement('img');
            syntaxImg.className = 'img';
            syntaxImg.setAttribute('src', '');
            imgDiv.appendChild(syntaxImg)
        }
    })
})

const JavaScript = document.getElementById('javascript');

JavaScript.addEventListener('click', () => {
    
    const img = document.createElement('img');
    img.className = 'img';
    img.setAttribute('src', "/Images/Javascript.png");
    imgDiv.appendChild(img);
})


