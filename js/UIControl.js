const uiClass = {
    "modal": {
        "show": "modal_show",
        "hide": "modal_hide",
    },
    "anim": {
        "fadeout":"anim_fadeout",
        "fadein": "anim_fadein",
    }
}

function fireEvent(event) {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded",event)
    } else {
        event()
    }
}

function fadeinElem(id) {
    fireEvent(() => {
        let target = document.getElementById(id)
        target.classList.remove(uiClass.modal.hide)
        target.classList.add(uiClass.anim.fadein)
        setTimeout(() => {
            target.classList.add(uiClass.modal.show)
            target.classList.remove(uiClass.anim.fadein)
        }, 510);
    })
}

function fadeoutElem(id) {
    fireEvent(() => {
        let target = document.getElementById(id)
        target.classList.add(uiClass.anim.fadeout)
        setTimeout(() => {
            target.classList.remove(uiClass.modal.show)
            target.classList.add(uiClass.modal.hide)  
            target.classList.remove(uiClass.anim.fadeout)
        }, 510);
    })
}


(function () {
    function f() {
        if (document.readyState === "complete") {
            fadeoutElem("modal-loader")
        } else {
            setTimeout(f, 500);
        }
    }
    setTimeout(f, 1000);
})()