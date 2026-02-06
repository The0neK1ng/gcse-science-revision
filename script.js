// Select all subject cards
const subjects = document.querySelectorAll('.subject-card');
const startButton = document.getElementById('startRevision');

let selectedSubject = null;

subjects.forEach(card => {
  card.addEventListener('click', () => {
    // Remove 'selected' class from all
    subjects.forEach(c => c.classList.remove('selected'));
    // Add 'selected' to clicked
    card.classList.add('selected');
    selectedSubject = card.textContent.trim();
    startButton.disabled = false;
    startButton.classList.add('enabled');
  });
});

startButton.addEventListener('click', () => {
  if (!selectedSubject) return;

  alert(`You selected ${selectedSubject}. Next step: Load dashboard (not implemented yet).`);
});
