
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
let closeBtn = document.querySelector(".modal .close");
// Add click event to each card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    let img = card.querySelector("img").src;
    let title = card.querySelector("h2").textContent;
    let desc = card.querySelector("p").textContent;

    modalImg.src = img;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
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

  // نجيب عناصر البحث والكروت
  const searchInput = document.querySelector(".search input");
  const cards = document.querySelectorAll(".card");

  // عنصر لرسالة "المنتج غير متوفر الان"
  const noResultMsg = document.createElement("p");
  noResultMsg.textContent = "المنتج غير متوفر الان";
  noResultMsg.style.textAlign = "center";
  noResultMsg.style.color = "black";
  noResultMsg.style.fontWeight = "bolder";
  noResultMsg.style.fontSize = "20px";
  noResultMsg.style.display = "none"; // مخفي في البداية
  document.querySelector(".cards").appendChild(noResultMsg);

  // لما المستخدم يكتب في البحث
  searchInput.addEventListener("keyup", function() {
    let query = searchInput.value.toLowerCase(); // النص اللي مكتوب
    let found = false; // علشان نعرف لو فيه نتيجة ولا لأ

    cards.forEach(card => {
      let title = card.querySelector("h2").textContent.toLowerCase();
      let description = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(query) || description.includes(query)) {
        card.style.display = "block"; // يظهر
        found = true;
      } else {
        card.style.display = "none"; // يختفي
      }
    });

    // إظهار أو إخفاء الرسالة حسب النتيجة
    if (!found && query.trim() !== "") {
      noResultMsg.style.display = "block";
    } else {
      noResultMsg.style.display = "none";
    }
  });