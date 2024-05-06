const calcular = () => {
    const input = document.getElementById('numeros').value.trim();

    if (input === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Por favor, introduce al menos un número antes de calcular.',
        });
        return;
    }

    const numeros = input.split(',').map(Number);

    if (numeros.some(isNaN)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, introduce solo números separados por comas',
        });
        return;
    }

    
    //  media
    const media = numeros.reduce((a, b) => a + b, 0) / numeros.length;
    document.getElementById('media').innerText = media.toFixed(2);

    //  mediana
    numeros.sort((a, b) => a - b);
    let mediana;
    if (numeros.length % 2 === 0) {
        mediana = (numeros[numeros.length / 2 - 1] + numeros[numeros.length / 2]) / 2;
    } else {
        mediana = numeros[Math.floor(numeros.length / 2)];
    }
    document.getElementById('mediana').innerText = mediana.toFixed(2);

    //  moda
    const modaMap = {};
    numeros.forEach(numero => {
        modaMap[numero] = (modaMap[numero] || 0) + 1;
    });
    const moda = Object.keys(modaMap).reduce((a, b) => modaMap[a] > modaMap[b] ? a : b);
    document.getElementById('moda').innerText = moda;

    Swal.fire({
        icon: 'success',
        title: '¡Cálculo exitoso!',
        text: 'Los cálculos se han realizado correctamente.',
    });
};
