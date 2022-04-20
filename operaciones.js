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
        hipotenusa.value = r.toFixed(2);
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
        input.value = r.toFixed(2);
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
        // input.value = r.toFixed(2);
        // input2.value = lado_value.toFixed(2);

        const content = document.getElementById('resultado');
        content.innerHTML = `${type2}= ${r.toFixed(2)}`;

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

// const a = document.getElementById("a");
// const b = document.getElementById("b");
// const c = document.getElementById("c");

// const A = document.getElementById("A");
// const B = document.getElementById("B");
// const C = document.getElementById("C");

// recto = false;
// function lector() {
//     a_value = { value: a.value, nombre: "cateto adyacente" };
//     b_value = { value: b.value, nombre: "cateto opuesto" };
//     c_value = { value: c.value, nombre: "hipotenusa" };

//     A_value = { value: check_a.value, nombre: "angulo A" };
//     B_value = { value: check_b.value, nombre: "angulo B" };
//     C_value = { value: C.value, nombre: "angulo C" };

//     lados = [a_value, b_value, c_value];
//     angulos = [A_value, B_value, C_value];
//     angulos_radianes = Map(angulos, Math.radianes);

//     var sum, angulo, sum2, C_angulos;
//     angulos.forEach(element => {
//         if (element.value == 90) {
//             agudo = true;
//             sum += element.value;
//         }
//         if (sum < 180) {
//             angulo = 180 - sum;
//         }
//         if (element.value == '') {
//             sum2++;
//         }
//         if (sum2 == 1) {
//             if (element.value == '') {
//                 element.value = angulo;;
//             }
//         }
//         if (element.value != '' && element.value != 0) {
//             C_angulos++;
//         }
//     });

//     var C_lados = lados.reduce(element => {
//         if (element != '' && element != 0) {
//             C_lados++;
//         }
//     });
// }

// if (recto == true) {
//     if (C_lados == 2) {
//         if (lados[2].value != '' && lados[2].value != 0) {

//         }
//     }
//     else {

//     }
// }


function ley_senos(anguloA, ladoA, angulo) {
    if (lado == true) {
        x = ((ladoA * Math.sin(Math.radianes(angulo)))
            / Math.sin(Math.radianes(anguloA)));
    } else {
        x = (Math.asin(
            (lado * Math.sin(anguloA)) / ladoA
        ));
        Math.grados(angulo);
    }
    return x
}

function ley_senos() {
    if (lado == true) {
        (a.lado * Math.sin(Math.radianes(angulo)))
            / Math.sin(Math.radianes(a.angulo));
    } else {
        Math.asin(
            (lado * Math.sin(a.angulo)) / a.lado
        );
        Math.grados(a);
    }
}

function ley_cosenos(b, c, angulo) {
    Math.sqrt((Math.pow(b, 2) + Math.pow(c, 2)) - 2 * b * c * Math.cos(Math.radianes(angulo)))
}

function ley_cosenos_modulo() {
    if (a == true) {
        ley_cosenos(b, c, angulo)
    }
}

