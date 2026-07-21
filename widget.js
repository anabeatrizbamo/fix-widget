window.addEventListener("load", () => {

    if (document.getElementById("fix-chat-frame")) return;

    const iframe = document.createElement("iframe");

    iframe.id = "fix-chat-frame";
    iframe.src = "https://buildwebchatfix.vercel.app";

    iframe.style.position = "fixed";
    iframe.style.right = "15px";
    iframe.style.bottom = "15px";

    // Tamanho do botão
    iframe.style.width = "110px";
    iframe.style.height = "110px";

    iframe.style.border = "none";
    iframe.style.background = "transparent";
    iframe.style.overflow = "hidden";

    iframe.style.zIndex = "999999999";

    iframe.style.transition =
        "width .25s ease, height .25s ease";

    document.body.appendChild(iframe);

    function expandir() {

        iframe.style.width = "390px";
        iframe.style.height = "680px";

    }

    function recolher() {

        iframe.style.width = "110px";
        iframe.style.height = "110px";

    }

    iframe.addEventListener("mouseenter", expandir);

    document.addEventListener("click", function(e){

        if(!iframe.contains(e.target)){
            recolher();
        }

    });

});