export const preloader = (function() {
    const body = document.body;

    return {
        hide() {
            body.classList.remove("overflow");
            body.classList.add("loaded");
        },
        showWithDelay(delay) {
            return new Promise(resolve => {
                this.show();
                setTimeout(() => {
                    resolve();
                }, delay);
            });
        },
        hideWithDelay(delay) {
            setTimeout(() => this.hide(), delay);
        },
        show() {
            body.classList.remove("loaded");
            body.classList.add("overflow");
        }
    };
})();