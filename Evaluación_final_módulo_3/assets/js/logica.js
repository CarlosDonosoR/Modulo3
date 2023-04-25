
document.getElementById("open").onclick = function mostrar() {

    document.getElementById("navbar__list").style.display = "flex";
}

document.getElementById("close").onclick = function colapsar() {

    document.getElementById("navbar__list").style.display = "none";
}


const media1 = window.matchMedia('(max-width: 599px)')

if (media1.matches) {
    
    document.getElementById("chat1").onclick = function abrir() {
        const chat = document.getElementById("con1");
        const nombre = document.getElementById("nombre1");
    
        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("chat1");
            const parent1 = document.getElementById("chat1").parentNode;
            parent1.insertBefore(visible(chat), child1.nextSibling);
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }
    
    document.getElementById("chat2").onclick = function abrir() {
        const chat = document.getElementById("con2");
        const nombre = document.getElementById("nombre2");
        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("chat2");
            const parent1 = document.getElementById("chat2").parentNode;
            parent1.insertBefore(visible(chat), child1.nextSibling);
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }
    
    document.getElementById("chat3").onclick = function abrir() {
        const chat = document.getElementById("con3");
        const nombre = document.getElementById("nombre3");
        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("chat3");
            const parent1 = document.getElementById("chat3").parentNode;
            parent1.insertBefore(visible(chat), child1.nextSibling);
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }
    
    document.getElementById("chat4").onclick = function abrir() {
        const chat = document.getElementById("con4");
        const nombre = document.getElementById("nombre4");
        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("chat4");
            const parent1 = document.getElementById("chat4").parentNode;
            parent1.insertBefore(visible(chat), child1.nextSibling);
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }
    
    document.getElementById("chat5").onclick = function abrir() {
        const chat = document.getElementById("con5");
        const nombre = document.getElementById("nombre5");
        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("chat5");
            const parent1 = document.getElementById("chat5").parentNode;
            parent1.insertBefore(visible(chat), child1.nextSibling);
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }
}


function visible(conversacion) {

    var style = `
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-bottom: 0.3125rem;
    `;

    conversacion.style.cssText = style;

    return conversacion;
}

function visible2(conversacion) {

    var style = `
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 31.25rem;
        width: 31.25rem;
        padding: 1.125rem;
    `;

    conversacion.style.cssText = style;

    return conversacion;
}

function visible3(conversacion) {

    var style = `
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 46.875rem;
        width: 56.25rem;
        padding: 3.75rem;
    `;

    conversacion.style.cssText = style;

    return conversacion;
}


const media2 = window.matchMedia('(min-width: 600px)')

if (media2.matches) {

    document.getElementById("chat1").onclick = function abrir() {
        const chat = document.getElementById("con1");
        const nombre = document.getElementById("nombre1");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible2(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
        
    }

    document.getElementById("chat2").onclick = function abrir() {
        const chat = document.getElementById("con2");
        const nombre = document.getElementById("nombre2");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible2(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }

    document.getElementById("chat3").onclick = function abrir() {
        const chat = document.getElementById("con3");
        const nombre = document.getElementById("nombre3");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible2(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }

    document.getElementById("chat4").onclick = function abrir() {
        const chat = document.getElementById("con4");
        const nombre = document.getElementById("nombre4");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible2(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }

    document.getElementById("chat5").onclick = function abrir() {
        const chat = document.getElementById("con5");
        const nombre = document.getElementById("nombre5");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible2(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }
}

const media3 = window.matchMedia('(min-width: 900px)')

if (media3.matches) {

    document.getElementById("chat1").onclick = function abrir() {
        const chat = document.getElementById("con1");
        const nombre = document.getElementById("nombre1");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible3(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    }

    document.getElementById("chat2").onclick = function abrir() {
        const chat = document.getElementById("con2");
        const nombre = document.getElementById("nombre2");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible3(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }

    document.getElementById("chat3").onclick = function abrir() {
        const chat = document.getElementById("con3");
        const nombre = document.getElementById("nombre3");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible3(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }

    document.getElementById("chat4").onclick = function abrir() {
        const chat = document.getElementById("con4");
        const nombre = document.getElementById("nombre4");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible3(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }

    document.getElementById("chat5").onclick = function abrir() {
        const chat = document.getElementById("con5");
        const nombre = document.getElementById("nombre5");
        var space = document.getElementById("section--div");

        if (chat.style.display == "none") {
    
            let child1 = document.getElementById("section--div");
            const parent1 = document.getElementById("section--div").parentNode;
            parent1.insertBefore(visible3(chat), child1.nextSibling);
            space.style.display = "none";
    
            if (nombre.style.fontWeight == 700) {
                nombre.style.fontWeight = 400;
            } else {
                nombre.style.fontWeight = 400;
            }
    
        } else if (chat.style.display !== "none")
    
            chat.style.display = "none";
    
    }
}