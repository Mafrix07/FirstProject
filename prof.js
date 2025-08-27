
document.addEventListener('DOMContentLoaded', () => {
    const isLoginPage = document.getElementById('login-form');
    const isProfPage = document.getElementById('note-form');

    // --- LOGIQUE COMMUNE ---
    async function getDatabase() {
        try {
            const response = await fetch('database.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Impossible de charger la base de données:", error);
            return null;
        }
    }

    // --- LOGIQUE PAGE DE CONNEXION ---
    if (isLoginPage) {
        const loginForm = document.getElementById('login-form');
        const loginError = document.getElementById('login-error');

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            loginError.textContent = '';

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            const data = await getDatabase();
            if (!data) return;

            const professor = data.professeurs.find(p => p.login === username && p.mdp === password);

            if (professor) {
                // Simuler une session en stockant les infos du professeur
                sessionStorage.setItem('professeurNom', `${professor.prenom} ${professor.nom}`);
                sessionStorage.setItem('professeurUE', professor.ue);
                window.location.href = 'professeur.html';
            } else {
                loginError.textContent = 'Identifiant ou mot de passe incorrect.';
            }
        });
    }

    // --- LOGIQUE PAGE PROFESSEUR ---
});
