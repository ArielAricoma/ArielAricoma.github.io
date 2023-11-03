const pRegistro = document.getElementById("pRegistro");
const ltaErrores = document.getElementById("ltaErrores");
const btnRegistro = document.getElementById("btnRegistro");
const frm = document.getElementById("frm");
frm.addEventListener("submit",function(e){
    e.preventDefault();
    let f_nombre = document.getElementById("f_nombre");
    let nombre = f_nombre.value.trim();
    let f_apellido = document.getElementById("f_apellido");
    let apellido = f_apellido.value.trim();
    let f_gmail = document.getElementById("f_gmail");
    let gmail = f_gmail.value.trim();

    let errores = [];
    let campo_error = null;

    let frm = document.getElementById("frm");
    for (let v of frm.querySelectorAll("input, select, div")) {
        v.classList.remove("error");
    }

    // Validación del nombre
    if (nombre === "") {
        errores.push("Falta Nombre");
        campo_error = f_nombre;
        f_nombre.classList.add("error");
    }

    // Validación del apellido
    if (apellido === "") {
        errores.push("Falta Apellido");
        campo_error = f_apellido;
        f_apellido.classList.add("error");
    }

    // Validación del correo electrónico
    if (gmail === "" ) {
        errores.push("Falta Gmail");
        campo_error = f_gmail;
        f_gmail.classList.add("error");
    }else if(!validarGmail(gmail)){
        errores.push("Gmail no válido");
        campo_error = f_gmail;
        f_gmail.classList.add("error");
    }
    
    ltaErrores.innerHTML = ""; // Limpiamos la lista de errores

    if (errores.length > 0) {
        // Mostramos los errores en la lista de errores
        for (let i = 0; i < errores.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = errores[i];
            ltaErrores.appendChild(li);
        }
        if (campo_error != null) {
            campo_error.focus();
        }
        return false;
    }

    let mje = `¡Hola... Bienvenido ${nombre} ${apellido} !`;
    pRegistro.innerText = mje;
    return false;
});
function validarGmail(gmail){
    const falta = /@/ ;
    return falta.test(gmail);
}