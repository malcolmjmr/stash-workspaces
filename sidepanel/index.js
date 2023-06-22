document.addEventListener('onload', () => {
    console.log('loading');
    try {
        let container = document.createElement('div');
        container.id = 'app-container';
        document.body.appendChild(container);
        const app = new window.App({
            target: container,
        });

    } catch (e) {
        console.log(e);
    }
});
