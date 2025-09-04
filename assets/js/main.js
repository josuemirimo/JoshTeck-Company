// Subscribe form handling
const subForm = document.getElementById('subscribe-form');
const subResp = document.getElementById('sub-response');
subForm?.addEventListener('submit', e => {
  e.preventDefault();
  subForm.reset();
  subResp.classList.remove('hidden');
  setTimeout(() => subResp.classList.add('hidden'), 5000);
});
