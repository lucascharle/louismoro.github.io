// Mot de passe correct
const correctPassword = "crs61";

// Récupération des éléments
const privateLink = document.getElementById('privateLink');
const passwordModal = document.getElementById('passwordModal');
const closeModal = document.querySelector('.close');
const submitPassword = document.getElementById('submitPassword');
const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('errorMsg');

// Afficher la fenêtre modale lors du clic sur le lien "Catégorie Privée"
privateLink.addEventListener('click', function(event) {
    event.preventDefault();
    passwordModal.style.display = 'block';
});

// Fermer la fenêtre modale
closeModal.addEventListener('click', function() {
    passwordModal.style.display = 'none';
    passwordInput.value = ''; // Réinitialise le champ
    errorMsg.classList.add('hidden'); // Cacher le message d'erreur
});

// Validation du mot de passe
submitPassword.addEventListener('click', function() {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        window.location.href = 'categorie4.html'; // Rediriger vers la page protégée
    } else {
        errorMsg.classList.remove('hidden'); // Afficher le message d'erreur
    }
});

// Fermer la fenêtre modale si l'utilisateur clique en dehors
window.onclick = function(event) {
    if (event.target == passwordModal) {
        passwordModal.style.display = 'none';
        passwordInput.value = '';
        errorMsg.classList.add('hidden');
    }
};

