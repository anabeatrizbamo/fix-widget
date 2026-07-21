(function () {

    if (document.getElementById("fix-chat-widget")) return;

    const style = document.createElement("style");

    style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    *{
        font-family:Inter,sans-serif;
    }

    #fix-chat-widget{
        position:fixed;
        right:24px;
        bottom:24px;
        z-index:999999999;
    }

    #fix-chat-button{

        width:68px;
        height:68px;

        border-radius:50%;

        border:none;

        background:#1695FB;

        color:white;

        cursor:pointer;

        font-size:28px;

        box-shadow:0 10px 30px rgba(0,2,14,.35);

        transition:.25s;

    }

    #fix-chat-button:hover{

        transform:scale(1.08);

    }

    #fix-chat-window{

        position:absolute;

        right:0;

        bottom:90px;

        width:390px;

        height:680px;

        background:white;

        overflow:hidden;

        border-radius:22px;

        display:none;

        border:2px solid #1695FB;

        box-shadow:0 25px 60px rgba(0,2,14,.35);

    }

    #fix-chat-window iframe{

        width:100%;

        height:100%;

        border:none;

    }

    #fix-close{

        position:absolute;

        top:14px;

        right:14px;

        width:34px;

        height:34px;

        border-radius:50%;

        border:none;

        background:#00020E;

        color:white;

        cursor:pointer;

        z-index:99;

    }

    #fix-close:hover{

        background:#1695FB;

    }

    @media(max-width:768px){

        #fix-chat-window{

            position:fixed;

            left:0;

            top:0;

            width:100vw;

            height:100vh;

            border-radius:0;

        }

    }

    `;

    document.head.appendChild(style);

    const widget = document.createElement("div");

    widget.id = "fix-chat-widget";

    widget.innerHTML = `

    <div id="fix-chat-window">

        <button id="fix-close">✕</button>

        <iframe
        loading="lazy"
        src="https://buildwebchatfix.vercel.app">
        </iframe>

    </div>

    <button id="fix-chat-button">

        💬

    </button>

    `;

    document.body.appendChild(widget);

    document.getElementById("fix-chat-button").onclick=function(){

        document.getElementById("fix-chat-window").style.display="block";

    }

    document.getElementById("fix-close").onclick=function(){

        document.getElementById("fix-chat-window").style.display="none";

    }

})();