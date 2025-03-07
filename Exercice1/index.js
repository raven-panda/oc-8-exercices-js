//votre code ici

function pairNumbers(min, max) {
    const parsedMin = typeof min === 'string' ? parseInt(min) : min,
        parsedMax = typeof max === 'string' ? parseInt(max) : max;

    let final = [];
    for (let i = parsedMin; i <= parsedMax; i++ ) {
        if (i % 2 === 0) final.push(i);
    }

    return final.join(',');
}

export default pairNumbers;
