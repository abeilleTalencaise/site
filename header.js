const headerHTML = `
<header>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="img/logo.png" alt="Logo de mon site">
                </a>
                <!-- Burger menu pour mobile -->
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <!-- Menu principal -->
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/">
                        L'abeille Talencaise
                    </a>
                </div>
                <!-- Menu de droite (optionnel) -->
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary" href="https://www.facebook.com/labeilletalencaise" target="_blank" aria-label="Notre page Facebook">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="facebook-logo">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
`;

// Insérer le header dans la page
document.write(headerHTML);

// Activer le burger menu Bulma après le chargement
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les burgers
    const burgers = document.querySelectorAll('.navbar-burger');
    
    // Ajouter un écouteur d'événement sur chaque burger
    burgers.forEach(function(burger) {
        burger.addEventListener('click', function() {
            // Récupérer l'ID de la cible depuis l'attribut data-target
            const target = burger.dataset.target;
            const menu = document.getElementById(target);
            
            // Basculer la classe "is-active" sur le burger et le menu
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    });
});