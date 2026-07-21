window.addEventListener("load", () => {

    if (document.getElementById("fix-chat-container")) return;

    const container = document.createElement("div");
    container.id = "fix-chat-container";

    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.border = "none";
    container.style.zIndex = "999999";

    container.style.pointerEvents = "none";

    const iframe = document.createElement("iframe");

    iframe.src = "https://buildwebchatfix.vercel.app";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.style.background = "transparent";

    iframe.style.pointerEvents = "auto";

    container.appendChild(iframe);

    document.body.appendChild(container);

});