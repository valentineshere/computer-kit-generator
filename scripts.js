document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('toggle-theme');
    const generateKitButton = document.getElementById('generate-kit');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'second-theme');
        } else {
            body.classList.replace('second-theme', 'dark-theme');
        }
    });

    generateKitButton.addEventListener('click', () => {
        const budget = document.getElementById('budget').value;
        if (budget) {
            fetchComputerKit(budget);
        }
    });
});