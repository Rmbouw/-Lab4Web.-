// Demo form: memvalidasi input dan menampilkan ringkasan lokal.
// Data tidak dikirim ke server, email, atau layanan pihak ketiga.
const contactForm = document.querySelector("#contact-form");
const formResult = document.querySelector("#form-result");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // textContent mencegah teks input diperlakukan sebagai HTML.
  formResult.replaceChildren();
  const heading = document.createElement("strong");
  heading.textContent = "Pesan berhasil diperiksa di browser.";
  const details = document.createElement("p");
  details.textContent = `Nama: ${name} | Email: ${email} | Subjek: ${subject}`;
  const body = document.createElement("p");
  body.textContent = `Pesan: ${message}`;
  const note = document.createElement("p");
  note.textContent = "Catatan: ini hanya demo front-end. Pesan belum dikirim ke mana pun.";

  formResult.append(heading, details, body, note);
  formResult.hidden = false;
});
