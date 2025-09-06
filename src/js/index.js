// Inicialización inmediata del tema
(function() {
    if (!localStorage.getItem('hs_theme')) {
        localStorage.setItem('hs_theme', 'dark');
    }
    const theme = localStorage.getItem('hs_theme');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
})();

// Funcionalidad del botón de tema
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    
    // Función para actualizar iconos
    function updateIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        if (isDark) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }
    }
    
    // Inicializar iconos
    updateIcons();
    
    // Event listener para el botón
    themeToggle.addEventListener('click', function() {
        const html = document.documentElement;
        const currentTheme = localStorage.getItem('hs_theme');
        
        if (currentTheme === 'dark') {
            html.classList.remove('dark');
            localStorage.setItem('hs_theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('hs_theme', 'dark');
        }
        
        updateIcons();
    });
});

