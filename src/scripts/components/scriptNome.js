export default function initTyping() {
    let letter = 0;
    const text = 'Ueber James';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".meu-nome").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
    
}