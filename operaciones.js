var selec_pitagoras = document.getElementById("pitagoras_selec");
const hipotenusa = document.getElementById("hipotenusa");
const a_id = document.getElementById("cateto_a");
const b_id = document.getElementById("cateto_b");
var a, b, h, r;

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
var selec_razones_tiene = document.getElementById("razones_selec-tiene");
var lado = document.getElementById("lado");
var angulo = document.getElementById("angulo");

Math.radianes = function (grados) {
    return grados * Math.PI / 180;
};
Math.grados = function (radianes) {
    return radianes * 180 / Math.PI;
};


function modulo_razones() {
    type1 = selec_razones_sacar.value;
    type2 = selec_razones_tiene.value;

    lado_value = parseFloat(lado.value);
    angulo_value = parseFloat(angulo.value);
    angulo_value = Math.radianes(angulo_value);

    if (type1 == "hipotenusa") {
        if (type2 == "b") {
            h = lado_value / Math.sin(angulo_value);
            input2 = b_id;
        }
        else {//si tiene cateto abyacente
            h = lado_value / Math.cos(angulo_value);
            input2 = a_id;
        }
        r = h;
        input = hipotenusa;
    }
    else if (type1 == "cateto opuesto") {
        if (type2 == "h") {
            b = lado_value * Math.sin(angulo_value);
            input2 = hipotenusa;
        }
        else {
            b = lado_value * Math.tan(angulo_value);
            input2 = a_id;
        }
        r = b; //b = cateto opuesto
        input = b_id;
    }
    else if (type1 == "cateto adyacente") {
        if (type2 == "h") {
            a = lado_value * Math.cos(angulo_value);
            input2 = hipotenusa;
        }
        else { //si tiene b
            a = lado_value * Math.tan(angulo_value);
            input2 = b_id;
        }
        r = a; //a = cateto adyacente
        input = a_id;
    }
    else { }

    input.value = r.toFixed(2);
    input2.value = lado_value.toFixed(2);

    const content = document.getElementById('resultado');
    content.innerHTML = `${type1}= ${r.toFixed(2)}`;

    if (type1 == "hipotenusa") {
        type1 = "cateto";
    }
    else  {
        type1 = "hipotenusa";
    }
    modulo(type1);
    // a = {
    //     b: a = lado / Math.sin(angulo),
    //     c: a = lado / Math.cos(angulo)
    // }
    // b = {
    //     a: b = lado * Math.sin(angulo),
    //     c: b = lado * Math.tan(angulo)
    // }
    // c = {
    //     a: c = lado * Math.cos(angulo),
    //     b: c = lado * Math.tan(angulo)
    // }
}


function razones2() {
    if (h_modulo == true) {
        if (a_modulo == true) {
            Preangulo = a/h;
            angulo = Math.ceil(Math.grados(Math.asin(Preangulo)));
        }
        else { //b
            Preangulo = b/h;
            angulo = Math.ceil(Math.grados(Math.acos(Preangulo)));
        }
    }
    else { //a && b
        Preangulo = b/a;
        angulo = Math.ceil(Math.grados(Math.atan(Preangulo)));
    }
}


function ley_senos () {
    if (lado == true) {
        (a.lado* Math.sin(Math.radianes(angulo))) 
        / Math.sin(Math.radianes(a.angulo));
    } else {
        Math.asin(
            (lado * Math.sin(a.angulo)) / a.lado
            );
        Math.grados(a);
    }
}


