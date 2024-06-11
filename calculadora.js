function calcular() {
    var tipoSustancia = document.getElementById('tipoSustancia').value;
    var concentracion = parseFloat(document.getElementById('inputConcentracion').value);
    var pH;

    switch (tipoSustancia) {
        case 'acidoFuerte':
            pH = -Math.log10(concentracion);
            document.getElementById('resultado').value = "pH: " + pH.toFixed(2) + ", [H⁺]: " + concentracion.toFixed(2) + " M, [OH⁻]: " + (1.0e-14 / concentracion).toFixed(2) + " M";
            break;
        case 'acidoDebil':
            var Ka = parseFloat(prompt("Ingrese la constante de equilibrio Ka del ácido débil (en unidades de M):"));
            var x = Math.sqrt(Ka * concentracion);
            pH = -Math.log10(x);
            var concentracionH = x;
            var concentracionOH = Ka / x;
            document.getElementById('resultado').value = "pH: " + pH.toFixed(2) + ", [H⁺]: " + concentracionH.toFixed(2) + " M, [OH⁻]: " + concentracionOH.toFixed(2) + " M";
            break;
        case 'baseFuerte':
            pH = 14 + Math.log10(concentracion);
            document.getElementById('resultado').value = "pH: " + pH.toFixed(2) + ", [H⁺]: " + (1.0e-14 / concentracion).toFixed(2) + " M, [OH⁻]: " + concentracion.toFixed(2) + " M";
            break;
        default:
            document.getElementById('resultado').value = "Por favor, selecciona un tipo de sustancia.";
    }
}