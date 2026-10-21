document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos HTML
    const precioInput = document.getElementById('precio');
    const cantidadInput = document.getElementById('cantidad');
    const btnCalcular = document.getElementById('btn-calcular');

    const statusStep1 = document.getElementById('status-step-1');
    const statusStep2 = document.getElementById('status-step-2');
    const statusStep3 = document.getElementById('status-step-3');

    const calcTextResult = document.getElementById('calc-text-result');
    const finalTextResult = document.getElementById('final-text-result');

    // Función para calcular la compra
    btnCalcular.addEventListener('click', () => {
        const precio = parseFloat(precioInput.value);
        const cantidad = parseFloat(cantidadInput.value);

        // Validar entradas
        if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
            alert('Por favor, ingresa valores válidos en el precio y la cantidad.');
            return;
        }

        // Realizar la multiplicación
        const total = precio * cantidad;

        // Formatear valor como moneda (ejemplo: $15.000)
        const totalFormateado = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
        }).format(total);

        // Actualizar UI del Paso 1
        statusStep1.textContent = 'CALCULADO';
        statusStep1.className = 'status-badge calculated';

        // Actualizar UI del Paso 2
        calcTextResult.textContent = `${precio} × ${cantidad} = ${totalFormateado}`;
        statusStep2.textContent = 'CALCULADO';
        statusStep2.className = 'status-badge calculated';

        // Actualizar UI del Paso 3
        finalTextResult.textContent = `El cliente debe pagar: ${totalFormateado}`;
        statusStep3.textContent = 'FINALIZADO';
        statusStep3.className = 'status-badge calculated';
    });
});