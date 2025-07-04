const imgDiv = document.querySelector('.img')


const Python = document.getElementById('python');
const button = document.querySelectorAll('.button');

Python.addEventListener('click', () => {
    const img = document.createElement('img');
    img.className = 'img'
    img.setAttribute('src', "/Images/7e418ba4bb7340b5b79d3004e0918e2e.webp")
    imgDiv.appendChild(img)
    
    button.addEventListener('click', () => {
        if (button.textContext == 'Syntax') {
            const syntaxImg = document.createElement('img');
            syntaxImg.className = 'img';
            syntaxImg.setAttribute('src', '/Images/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg');
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


