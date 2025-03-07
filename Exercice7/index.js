const decimalInput = document.querySelector('input#decimalInput');
const binaryResultParagraph = document.querySelector('p#binaryResult')

function convertToBinary() {
    const inputValue = decimalInput.value;
    if (!inputValue.match(/^[0-9]+$/)) {
        binaryResultParagraph.textContent = '';
        return;
    }

    let finalBinary = '';
    let current = parseInt(inputValue);

    while (current > 0) {
        finalBinary = (current % 2) + finalBinary;
        current = Math.floor(current / 2);
    }

    binaryResultParagraph.textContent = finalBinary;
}
