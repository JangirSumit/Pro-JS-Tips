function showLoader() {

    const loader = `
                    <div class="overlay">
                        <div class="overlay__inner">
                            <div class="overlay__content"><span class="spinner"></span></div>
                        </div>
                    </div>
                `

    document.body.innerHTML += loader;
}

function hideLoader() {
    document.body.removeChild(document.querySelector(".overlay"));
}