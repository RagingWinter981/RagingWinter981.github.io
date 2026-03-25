function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerText = img.alt;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}