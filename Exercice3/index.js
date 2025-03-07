// Créez votre fonction ici

function calculateAverage(arr) {
    if (!Array.isArray(arr) || arr.length < 1)
        return 'No numbers to calculate average';

    const additionTotal = arr.reduce((acc, cur) => (typeof acc === 'string' ? parseInt(acc) : acc) + cur);
    return additionTotal / arr.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
