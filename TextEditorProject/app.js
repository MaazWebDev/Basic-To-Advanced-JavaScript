let text = document.getElementById('text')
console.log('Text ==> ', text);

let buttons = document.getElementsByClassName('action-btn')
console.log(buttons);

let fontOptions = document.getElementById('font-family')
console.log(fontOptions);

let fontSize = document.getElementById('font-size')
console.log(fontSize);


fontOptions.addEventListener('change',function(){
    console.log(this.value);
    if(this.value === 'monospace'){
      text.style.fontFamily = 'monospace'
    }
    if(this.value === 'serif'){
        text.style.fontFamily = 'serif'
    }
    if(this.value === 'sans-serif'){
        text.style.fontFamily = 'sans-serif'
    }
    
})

fontSize.addEventListener('change',function(){
    console.log(this.value);
    if(this.value === 'heading'){
      text.style.fontSize = '41px'
    }
    if(this.value === 'sub-heading'){
        text.style.fontSize = '25px'
    }
    if(this.value === 'normal'){
        text.style.fontSize = '15px'
    }
    
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        console.log(this);

        switch (this.innerText) {
            case 'Bold':
                if (text.style.fontWeight === 'bold') {
                    text.style.fontWeight = 'normal';
                } else {
                    text.style.fontWeight = 'bold';
                }
                break;

            case 'Italic':
                if (text.style.fontStyle === 'italic') {
                    text.style.fontStyle = 'normal';
                } else {
                    text.style.fontStyle = 'italic';
                }
                break;

            case 'Underline':
                if (text.style.textDecoration === 'underline') {
                    text.style.textDecoration = 'none';
                } else {
                    text.style.textDecoration = 'underline';
                }
                break;

            case 'Center':
                if (text.style.textAlign === 'center') {
                    text.style.textAlign = 'left'; // reset back
                } else {
                    text.style.textAlign = 'center';
                }
                break;

            case 'Left':
                if (text.style.textAlign === 'left') {
                    text.style.textAlign = 'initial'; // reset
                } else {
                    text.style.textAlign = 'left';
                }
                break;

            case 'Right':
                if (text.style.textAlign === 'right') {
                    text.style.textAlign = 'initial';
                } else {
                    text.style.textAlign = 'right';
                }
                break;

            case 'Justify':
                if (text.style.textAlign === 'justify') {
                    text.style.textAlign = 'initial';
                } else {
                    text.style.textAlign = 'justify';
                }
                break;
        }
    });
}




