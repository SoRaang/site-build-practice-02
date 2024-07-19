const copyYear = document.getElementById('copyYear');

copyYear.innerText = new Date().getFullYear();

const askGuidebook = document.getElementById('sideBooklet');
const modalAskForm = document.getElementById('modalAskForm');
const btnModalClose = document.getElementById('btnModalClose');

askGuidebook.addEventListener('click', () => modalAskForm.showModal());
btnModalClose.addEventListener('click', () => modalAskForm.close());