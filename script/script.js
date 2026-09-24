function toggleCV(id) {
    const target = document.getElementById(id);
    const parent = target.closest('.cv-option-item');
    
    // Ferme les autres CV ouverts si souhaité
    document.querySelectorAll('.cv-preview-content').forEach(el => {
        if (el.id !== id) {
            el.classList.remove('active');
            el.closest('.cv-option-item').classList.remove('open');
        }
    });

    // Bascule l'affichage du CV sélectionné
    target.classList.toggle('active');
    parent.classList.toggle('open');
}