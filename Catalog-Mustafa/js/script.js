
let fristLandingPage = document.querySelector('.animation');
let imgArray = ['animation1.jpg', 'animation2.jpg', 'animation3.jpg'];
function randomizeImgs(){
        backgroundInterval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * imgArray.length);
        fristLandingPage.style.backgroundImage = 'url("image/' + imgArray[randomNumber]+'")';
        }, 5000)
}
randomizeImgs();
// Get modal elements
let modal = document.getElementById("cardModal");
let modalImg = document.getElementById("modalImg");
let modalTitle = document.getElementById("modalTitle");
let modalDesc = document.getElementById("modalDesc");
let modalPrice = document.getElementById("modalPrice");
let closeBtn = document.querySelector(".modal .close");
// Add click event to each card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    let img = card.querySelector("img").src;
    let title = card.querySelector("h2").textContent;
    let desc = card.querySelector("p").textContent;
    let price = card.querySelector("h1").textContent;

    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalPrice.textContent = price;

    modal.style.display = "flex";
  });
});
// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};
