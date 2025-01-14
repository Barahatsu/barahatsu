// Función para abrir una imagen en tamaño completo al hacer clic
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const src = img.src;
        const newWindow = window.open();
        newWindow.document.write(`<img src="${src}" style="width: 100%; height: 100%; object-fit: cover;">`);
    });
});

