document.getElementById("signInForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value;
  alert(`Signed in as: ${email}`);
  const signInModal = bootstrap.Modal.getInstance(document.getElementById("signInModal")) || new bootstrap.Modal(document.getElementById("signInModal"));
  signInModal.hide();
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const registerModal = bootstrap.Modal.getInstance(document.getElementById("registerModal")) || new bootstrap.Modal(document.getElementById("registerModal"));
  registerModal.hide();
  bootstrap.Modal.getInstance(document.getElementById("registerModal")).hide();
});
