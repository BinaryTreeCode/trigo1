var selec_pitagoras = document.getElementById("pitagoras_selec");
const hipotenusa = document.getElementById("hipotenusa");
const a_id = document.getElementById("cateto_a");
const b_id = document.getElementById("cateto_b");

function modulo(type) {
    a = parseFloat(a_id.value);
    b = parseFloat(b_id.value);
    if (type == "hipotenusa") {
        h = Math.pow(a, 2) + Math.pow(b, 2);
        r = Math.sqrt(h);
        hipotenusa.value = r.toFixed(3);
    }
    else {
        if (a_id.value == '') {
            cateto = b;
            input = a_id;
        }
        else if (b_id.value == '') {
            cateto = a;
            input = b_id;
        }
        else {
            alert(`amobos catetos tienen un valor, a${a.value} b${b.value} cambie de opcion a hipotenusa`);
        }
        h = hipotenusa.value;
        cateto_r = Math.pow(h, 2) - Math.pow(cateto, 2); //cateto_r resultante
        r = Math.sqrt(cateto_r);
        input.value = r.toFixed(3);
    }
}


var selec_razones_sacar = document.getElementById("razones_selec-sacar");
var selec_razones_sacarLado = document.getElementById("razones_selec-sacar_lado");

var lado = document.getElementById("lado");
var angulo = document.getElementById("angulo");

Math.radianes = function (grados) {
    return grados * Math.PI / 180;
};
Math.grados = function (radianes) {
    return radianes * 180 / Math.PI;
};

var check_h = document.getElementsByClassName("check_h");
var check_a = document.getElementsByClassName("check_a");
var check_b = document.getElementsByClassName("check_b");

function modulo_razones() {
    type1 = selec_razones_sacar.value;
    type2 = selec_razones_sacarLado.value;;

    h = {
        value: parseInt(check_h[1].value),
        buleano: check_h[0].checked,
    }

    a = {
        value: parseInt(check_a[1].value),
        buleano: check_a[0].checked,
    }

    b = {
        value: parseInt(check_b[1].value),
        buleano: check_b[0].checked,
    }


    lado_value = parseFloat(lado.value);
    angulo_value = parseFloat(angulo.value);
    angulo_value = Math.radianes(angulo_value);

    if (type1 == "lado") {
        if (type2 == "hipotenusa") {
            if (b.buleano == true) {
                h = b.value / Math.sin(angulo_value);
                // input2 = b_id;
            }
            else {//si tiene cateto abyacente
                h = a.value / Math.cos(angulo_value);
                // input2 = a_id;
            }
            r = h;
            input = hipotenusa;
        }
        else if (type2 == "cateto opuesto") {
            if (h.buleano == true) {
                b = h.value * Math.sin(angulo_value);
                // input2 = hipotenusa;
            }
            else {
                b = a.value * Math.tan(angulo_value);
                // input2 = a_id;
            }
            r = b; //b = cateto opuesto
            input = b_id;
        }
        else if (type2 == "cateto adyacente") {
            if (h.buleano == true) {
                a = h.value * Math.cos(angulo_value);
                // input2 = hipotenusa;
            }
            else { //si tiene b
                a = b.value * Math.tan(angulo_value);
                // input2 = b_id;
            }
            r = a; //a = cateto adyacente
            input = a_id;
        }
        // input.value = r.toFixed(3);
        // input2.value = lado_value.toFixed(3);

        const content = document.getElementById('resultado');
        content.innerHTML = `${type2}= ${r.toFixed(3)}`;

        if (type2 == "hipotenusa") {
            type2 = "cateto";
        }
        else {
            type2 = "hipotenusa";
        }
        modulo(type2);
    }
    else {
        if (h.buleano == true) {
            if (a.buleano == true) {
                Preangulo = a.value / h.value;
                angulo = Math.grados(Math.asin(Preangulo));
            }
            else { //b
                Preangulo = b.value / h.value;
                angulo = Math.grados(Math.acos(Preangulo));
            }
        }
        else { //a && b
            Preangulo = b.value / a.value;
            angulo = Math.grados(Math.atan(Preangulo));
        }

        const content = document.getElementById('resultado');
        content.innerHTML = `angulo = ${angulo.toFixed(3)}`;
    }
}


const selector_razon = document.getElementById("razones_selec-sacar");
const selector_razon__angulo = document.getElementById("razones_selec-tiene__angulo");
const selector_lado = document.getElementById("lado");

selector_razon.addEventListener("change", visible, false);


function visible() {
    v = selector_razon.value;
    if (v == "angulo") {
        selector_lado.style.display = "none";
        selector_razon__angulo.style.display = "none";
    }
    else {
        selector_lado.style.display = "block";
        selector_razon__angulo.style.display = "block";
    }
}

const selec_cosenos = document.getElementById("selec_cosenos");
const cosenos_lados = document.getElementById("label: tres lados");
const cosenos_angulo = document.getElementById("label: dos lados y un angulo");

selec_cosenos.addEventListener("change", visible_cosenos, false);


function visible_cosenos() {
    v = selec_cosenos.value;
    if (v == "0") { //tiene 3 lados
        cosenos_lados.style.display = "block";
        cosenos_angulo.style.display = "none";
    }
    else { //tiene 2 lados y un angulo
        cosenos_lados.style.display = "none";
        cosenos_angulo.style.display = "block";
    }
}

const lados_elments = document.getElementsByClassName("0");
const angulo_elments = document.getElementsByClassName("1");

function ley_cosenos_lados(a, b, c) {
    return Math.grados(Math.acos(
        (Math.pow(a, 2) - Math.pow(b, 2) - Math.pow(c, 2)) /
        (-2 * b * c)
    ));
}
function ley_cosenos_angulo(b, c, angulo) {
    return Math.sqrt((Math.pow(b, 2) + Math.pow(c, 2)) - 2 * b * c * Math.cos(Math.radianes(angulo)))
}

function ley_cosenos_modulo() {
    v = selec_cosenos.value;

    a0 = parseFloat(lados_elments[0].value);
    b0 = parseFloat(lados_elments[1].value);
    c0 = parseFloat(lados_elments[2].value);

    a1 = parseFloat(angulo_elments[0].value);
    b1 = parseFloat(angulo_elments[1].value);
    c1 = parseFloat(angulo_elments[2].value); //angulo

    if (v == "0") { //tiene 3 lados
        r = ley_cosenos_lados(a0, b0, c0)
    }
    else { //tiene 2 lados y un angulo
        r = ley_cosenos_angulo(a1, b1, c1)
    }

    let resultado = document.getElementById("resultado cosenos");
    resultado.innerHTML = `el agulo es igual a ${r.toFixed(3)}`;
}

function ley_senos_lado(ladoA, anguloA, lado) {
    return (Math.asin(
        (lado * Math.sin(Math.radianes(anguloA))) / ladoA
    ));
}

function ley_senos_angulo(ladoA, anguloA, angulo) {
    return ((ladoA * Math.sin(Math.radianes(angulo)))
        / Math.sin(Math.radianes(anguloA)));
}

const selec_senos = document.getElementById("selec_senos");
const senos_elements = document.getElementsByClassName("pareja");


function ley_senos_modulo() {
    ladoA = parseFloat(senos_elements[0].value);
    anguloA = parseFloat(senos_elements[1].value);
    otro = parseFloat(senos_elements[2].value);

    v = selec_senos.value;
    if (v == "0") { // tiene un lado
        r = ley_senos_lado(ladoA, anguloA, otro);
        text = "angulo";
    } else { // tiene un angulo
        r = ley_senos_angulo(ladoA, anguloA, otro);
        text = "lado";
    }
    let resultado = document.getElementById("resultado senos");
    resultado.innerHTML = `el ${text} es igual a ${r.toFixed(3)}`;
}
