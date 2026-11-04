document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.getAttribute('data-text');
        const lines = text.split('|')
        
        let lineIndex = 0;
        let charIndex = 0;
        const speed = 60;

        function typeLine() {
            const currentLine = lines[lineIndex];

            if (charIndex < currentLine.length) {
                typewriterElement.innerHTML = currentLine.slice(0, charIndex + 1);
                charIndex++
                setTimeout(typeLine, speed);
            } else {
                if (lineIndex < lines.length - 1) {
                    typewriterElement.innerHTML +='<br>';
                }
                setTimeout(() => {
                    lineIndex++;
                    charIndex = 0;
                    typeLine();
                }, 1000);
            }
        }

    setTimeout(typeLine, 1000);    
    }
})