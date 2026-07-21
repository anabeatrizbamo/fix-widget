window.addEventListener("load", () => {

    if (document.getElementById("fix-chat-frame")) return;

    const iframe = document.createElement("iframe");

    iframe.id = "fix-chat-frame";

    iframe.src = "https://buildwebchatfix.vercel.app";

    iframe.style.position = "fixed";
    iframe.style.right = "20px";
    iframe.style.bottom = "20px";

    // Tamanho inicial: apenas o botão
    iframe.style.width = "72px";
    iframe.style.height = "72px";

    iframe.style.border = "none";
    iframe.style.background = "transparent";
    iframe.style.overflow = "hidden";

    iframe.style.zIndex = "999999999";

    iframe.style.transition =
        "width .25s ease,height .25s ease";

    document.body.appendChild(iframe);

    // Tenta detectar foco no iframe
    iframe.addEventListener("focus", expandir);

    iframe.addEventListener("mouseenter", expandir);

    function expandir() {

        iframe.style.width = "390px";
        iframe.style.height = "680px";

    }

    // Fecha quando clicar fora
    document.addEventListener("click", function(e){

        if(!iframe.contains(e.target)){

            iframe.style.width="72px";
            iframe.style.height="72px";

        }

    });

});