window.addEventListener("load", () => {

    if (document.getElementById("fix-widget")) return;

    const style = document.createElement("style");

    style.innerHTML = `

    #fix-widget{

        position:fixed;

        right:24px;

        bottom:24px;

        z-index:999999999;

    }

    #fix-chat{

        position:fixed;

        right:24px;

        bottom:100px;

        width:390px;

        height:680px;

        display:none;

        overflow:hidden;

        border:none;

        border-radius:18px;

        background:transparent;

        box-shadow:0 18px 45px rgba(0,0,0,.25);

        animation:chatOpen .25s ease;

    }

    @keyframes chatOpen{

        from{

            opacity:0;

            transform:translateY(15px) scale(.97);

        }

        to{

            opacity:1;

            transform:none;

        }

    }

    #fix-chat iframe{

        width:100%;

        height:100%;

        border:none;

        display:block;

        background:transparent;

    }

    #fix-button{

        width:64px;

        height:64px;

        border-radius:50%;

        border:none;

        cursor:pointer;

        background:white;

        box-shadow:0 10px 30px rgba(0,0,0,.25);

        font-size:28px;

        transition:.2s;

    }

    #fix-button:hover{

        transform:scale(1.08);

    }

    @media(max-width:768px){

        #fix-chat{

            left:0;

            top:0;

            width:100vw;

            height:100vh;

            right:auto;

            bottom:auto;

            border-radius:0;

        }

        #fix-widget{

            right:18px;

            bottom:18px;

        }

    }

    `;

    document.head.appendChild(style);

    const widget = document.createElement("div");

    widget.id = "fix-widget";

    widget.innerHTML = `

        <div id="fix-chat"></div>

        <button id="fix-button">💬</button>

    `;

    document.body.appendChild(widget);

    const button = document.getElementById("fix-button");
    const chat = document.getElementById("fix-chat");

    let aberto = false;
    let carregado = false;

    button.onclick = () => {

        if (!carregado) {

            const iframe = document.createElement("iframe");

            iframe.src = "https://buildwebchatfix.vercel.app";

            iframe.loading = "lazy";

            chat.appendChild(iframe);

            carregado = true;

        }

        aberto = !aberto;

        chat.style.display = aberto ? "block" : "none";

    };

});
