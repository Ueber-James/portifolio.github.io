// export default function initTyping() {
//     let letter = 0;
//     const text = 'Ueber James';

//     function typeWriter() {
//         if(letter < text.length) {
//             document.querySelector(".meu-nome").innerHTML += text.charAt(letter);
//             letter++;
//             setTimeout(typeWriter, 180)
//         }
//     }

//     typeWriter();

// }

export default function initTyping() {
    let letter = 0;
    const text = 'Ueber James';
    let deleting = false;

    function typeWriter() {
      const output = document.querySelector('.meu-nome');

      if (deleting) {
        output.textContent = text.substring(0, letter - 1);
        letter--;
      } else {
        output.textContent = text.substring(0, letter + 1);
        letter++;
      }

      if (letter === text.length + 1) {
        deleting = true;
        setTimeout(() => {
          deleting = false;
          letter = 0;
        }, 3000);
      }

      setTimeout(typeWriter, 180);
    }

    typeWriter();
  }
