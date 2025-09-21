
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

// Search functionality


// استدعاء عناصر البحث والكروت
const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

// وظيفة البحث
searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase().trim(); // النص اللي المستخدم كتبه

    cards.forEach(card => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        const desc = card.querySelector("p").textContent.toLowerCase();

        // لو النص اللي مكتوب موجود في العنوان أو الوصف → خلي الكارت ظاهر
        if (title.includes(value) || desc.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
