
let firstLandingPage = document.querySelector('.animation');
let imgArray = ['animation1.jpg', 'animation2.jpg', 'animation3.jpg'];
function randomizeImgs(){
        setInterval(() => {
        let randomNumber = Math.floor(Math.random() * imgArray.length);
        firstLandingPage.style.backgroundImage = 'url("image/' + imgArray[randomNumber]+'")';
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

// البحث في المنتجات
searchInput.addEventListener("keyup", function() {
  let query = searchInput.value.toLowerCase(); // النص اللي مكتوب
  let found = false; // علشان نعرف لو فيه نتيجة ولا لأ

  cards.forEach(card => {
    let title = card.querySelector("h2").textContent.toLowerCase();
    let description = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      card.classList.remove("hidden"); // يظهر
      found = true;
    } else {
      card.classList.add("hidden"); // يختفي
    }
  });

  // إظهار أو إخفاء الرسالة حسب النتيجة
  if (!found && query.trim() !== "") {
    noResultMsg.style.display = "block";
  } else {
    noResultMsg.style.display = "none";
  }
});

// اضافه المنتاجات الجديده
const products = [
  {
    name: "Si",
    price: "250 EGP",
    img: "image/si-removebg-preview.png",
    desc: "تركيبته فيها مزيج من الكاسيس (عنب الثعلب الأسود) في البداية، مع قلب فيه زهور مثل .... الفريزيا والوردة الدمشقية، والقاعدة بتكون من الفانيليا، الباتشولي، الأخشاب والمسك."
  },
  {
    name: "BLISS IN RED",
    price: "750 EGP",
    oldPrice: "1100 EGP",
    img: "image/1206e68c-d96b-44d7-a5b1-95938e14cc72-removebg-preview.png",
    desc: "عطر أنثوي فخم يعكس الجاذبية والنعومة في نفس الوقت. زجاجته الأنيقة بلون ذهبي مع لمسة حمراءبتجسد شخصية العطر: أنوثة، رومانسية، وقوة هادية."
  },
  {
    name: "Sergeant Elixir",
    price: "900 EGP",
    img: "image/0f99614c-5a58-4585-b8ce-97c415bb8499-removebg-preview.png",
    desc: "عطر رجالي قوي وفخم من دار Fariis Parfum، مصمم ليجمع بين الطابع العصري والهيبة الكلاسيكية. العطر مستوحى من الروح الجذابة لعطر Dior Sauvage Elixir، لكنه بيقدّم نفس الأجواء بلمسة مختلفة وسعر مناسب."
  },
  {
    name: "Courageous Pour Homme",
    price: "900 EGP",
    img: "image/02aaa367-3b02-4421-ad3a-9b382445cafc-removebg-preview.png",
    desc: "عطر رجالي فخم من Fariis Parfum، مصمم للرجل الجريء الواثق اللي بيعرف يفرض حضوره. زجاجته الكهرمانية مع الغطاء المعدني تعكس شخصية العطر: قوة وأناقة في نفس الوقت."
  },
  {
    name: "Fleur Explosion",
    price: "900 EGP",
    img: "image/8ebc959f-9962-4e60-a94b-fc6b66ea8199-removebg-preview.png",
    desc: "عطر أنثوي راقي اسمه بيعبر عنه تمامًا: انفجار من الزهور المبهجة. زجاجته الوردية المزينة بشريط أسود أنيق بتجسد شخصية العطر: رقة، أنوثة، وحيوية."
  },
  {
    name: "Bold Beast",
    price: "900 EGP",
    img: "image/637c1d44-f9b2-4651-bbc5-7b08d3f6efcf-removebg-preview.png",
    desc: "عطر رجالي جريء بيعكس القوة والهيبة في زجاجة واحدة. تصميمه الأسود مع اللمسات الذهبية بيجسد شخصية العطر: فخامة، رجولة، وثقة لا متناهية."
  },
  {
    name: "Black Onyx",
    price: "1,200 EGP",
    img: "image/b8d54f9d-7ad1-4568-9dc7-c05de91d136a-removebg-preview.png",
    desc: "عطر فاخر يجمع بين الغموض والجاذبية. اسمه مستوحى من حجر العقيق الأسود المعروف بالقوة والهيبة، وزجاجته اللامعة السوداء بتجسد فخامة وأناقة لا مثيل لها."
  },
  {
    name: "Vibes",
    price: "950 EGP",
    img: "image/b2329e24-c52e-4f9c-bd5b-fe60d33e18b0-removebg-preview.png",
    desc: "عطر رجالي عصري بيمثل الطاقة الإيجابية والجاذبية في زجاجة واحدة. تصميمه الأنيق باللون الأسودالمتدرج يعكس شخصية العطر: قوة، بساطة، وأناقة شبابية."
  },
  {
    name: "مسك ملكي",
    price: "300 EGP",
    img: "image/مسك_ملكي-removebg-preview.png",
    desc: "عطر مسك ملكي هو مزيج من الفخامة الشرقية والأصالة العربية، مصمم ليمنحك حضورًا راقيًا وساحرًا. يرتكز على قاعدة من المسك  الأبيض النقي الذي يبعث إحساسًا بالانتعاش والصفاء، مع لمسات من الأخشاب الدافئة والعطور الزهرية الناعمة التي تضيف عمقًا وأناقة."
  },
  {
    name: "شيخ العرب",
    price: "1,500 EGP",
    img: "image/شيخ_العرب-removebg-preview.png",
    desc: "عطر شيخ العرب يجسد الأصالة العربية برائحة قوية وثرية تنبض بالفخامة. مزيج شرقي غني يمنحك حضورًا مميزًا وهيبة لا تُقاوم، صُمم ليعكس القوة والوقار في آن واحد."
  },
    {
    name: "Azure Blue",
    price: "900 EGP",
    img: "image/a7db1673-012e-415c-89f6-f5d40cddb5f1-removebg-preview.png",
    desc: "عطر Azure Blue هو عطر رجالي أنيق يجسد روح البحر ونسيم السماء الزرقاء. مزيج منعش من النغمات البحرية والحمضية يتداخل مع لمسات خشبية دافئة ليمنحك طابعًا عصريًا يجمع بين القوة والانتعاش. مثالي للرجل الواثق الذي يبحث عن عطر يعكس شخصيته الحيوية والجذابة."
  },
  {
    name: "Leather Noir",
    price: "900 EGP",
    img: "image/1721861e-4a40-4bc4-9878-6dadecdc0c90-removebg-preview.png",
    desc: "عطر Leather Noir هو التعبير الأمثل عن الفخامة والقوة. مزيج داكن وجريء يرتكز على رائحة الجلد الطبيعي الفاخر، ممزوجة بلمسات خشبية عميقة وتوابل دافئة تمنح العطر حضورًا ذكوريًا طاغيًا وأناقة لا تُقاوم. إنه عطر للرجل الذي يعشق التميز ويترك بصمته أينما ذهب."
  },
  {
    name: "Blossom Women",
    price: "900 EGP",
    img: "image/586020e4-5c0a-4fb0-8d74-f27401b283f8-removebg-preview.png",
    desc: "عطر Blossom Women هو ترجمة أنثوية للرقي والجاذبية، صُمم خصيصًا للمرأة التي تعشق الأناقة وتحب أن تترك أثرًا ناعمًا وساحرًا أينما ذهبت. مزيج زهري أنثوي يفيض بالأنوثة، مع لمسات فاكهية منعشة وقاعدة دافئة تجعل العطر مزيجًا متوازنًا بين الرقة والقوة."
  },
  {
    name: "بودي سبراي",
    price: "900 EGP",
    img: "image/0d08e2cc-201c-42f4-9f03-ef614efcb5c4-removebg-preview.png",
    desc: "بخاخ الجسم Vacation هو رفيقك المثالي في الأيام المليئة بالحركة والطاقة. برائحته المنعشة والخفيفة، يمنحك إحساسًا دائمًا بالنظافة والحيوية، كأنك في عطلة صيفية على الشاطئ. مصمم ليبقى معك طوال اليوم، ويضفي على إطلالتك لمسة عطرية منعشة ومبهجة."
  },
  {
    name: "بودي سبراي",
    price: "900 EGP",
    img: "image/8bb70c67-e450-4382-8092-7fca8d63ffd2-removebg-preview.png",
    desc: "بودي سبراي Fantastic من KESEM هو انفجار من الحيوية والمرح! صُمم ليمنحك رائحة مليئة بالطاقة والإشراقة، تناسب الأوقات اليومية المليئة بالحركة أو اللقاءات السريعة. بفضل مزيجه الفاكهي – الزهري المنعش، يترك لمسة عطرية أنثوية مبهجة تدوم معك طوال اليوم."
  },
  {
    name: "بودي سبراي",
    price: "900 EGP",
    img: "image/9cd2428f-227b-41e1-aae0-f94abe229684-removebg-preview.png",
    desc: "بودي سبراي Very Sexy من KESEM هو العطر اللي يجمع بين الجاذبية والأنوثة الساحرة. بلمسة فاكهية – شرقية دافئة، يمنحك إحساس بالثقة والإغراء مع كل رشة، ليكون رفيقك المثالي في السهرات والمناسبات الخاصة."
  },
  {
    name: "بودي سبراي",
    price: "900 EGP",
    img: "image/9fab3a08-1530-4fe8-ab54-19c37e2a81e3-removebg-preview.png",
    desc: "خاخ الجسم 912 MEN من KESEM هو العطر الرجالي العصري اللي بيجمع بين القوة والجاذبية. بتركيبة منعشة ودافئة في نفس الوقت، مصمم علشان يديك حضور مميز وثقة تدوم طول اليوم."
  },
  {
    name: "بودي سبراي",
    price: "900 EGP",
    img: "image/34ab47e0-1b0f-4c09-b9d6-081d4cf49098-removebg-preview.png",
    desc: "بخاخ الجسم KOKO من KESEM هو سر الجاذبية والأنوثة الناعمة. عطر مستوحى من الفخامة الكلاسيكية، يمنحك حضور راقٍ وساحر يدوم طول اليوم."
  },
  {
    name: "بودي سبراي",
    price: "900 EGP",
    img: "image/42af6e03-f947-49d2-bbe5-9c5fb1cde452-removebg-preview.png",
    desc: "بخاخ الجسم Secret Flower من KESEM هو سر الجمال الأنثوي الجذاب. عطر يدمج بين الرقة والجرأة، يمنحك لمسة ساحرة تبقى معك طوال اليوم."
  },
  {
    name: "بودي سبراي",
    price: "900 EGP",
    img: "image/4524f899-1e04-458a-942f-b6e7681800e7-removebg-preview.png",
    desc: "بخاخ الجسم Victory من KESEM هو عطر الرجولة والانتصار، يمنحك ثقة عالية وحضوراً قوياً يرافقك طوال اليوم. برائحة منعشة وجذابة تعكس طاقتك وقوة شخصيتك."
  },
  {
    name: "بودي سبراي النسائي",
    price: "900 EGP",
    img: "image/6586e5a2-dd1c-45b5-9997-f40a5f438a26-removebg-preview.png",
    desc: "بودي سبراي الزهور الوردية من KESEM هو سر أنوثتك الجذابة، يمنحك رائحة ساحرة تمزج بين النعومة والرقي، لتبقي متألقة طوال اليوم."
  },
  {
    name: "Rosado Secret",
    price: "900 EGP",
    img: "image/319581c8-981a-440f-b561-2fead53fbfe7-removebg-preview.png",
    desc: "استمتعي بجاذبية لا تُقاوم مع عطر Rosado Secret من Fariis Parfum، العطر الذي يجمع بين الرقة والجرأة في لمسة واحدة."
  },
  {
    name: "بودي سبراي",
    price: "900 EGP",
    img: "image/cefc2ef1-de01-4791-9277-eb213b751a16-removebg-preview.png",
    desc: "استمتع بانتعاش يدوم مع بخاخ الجسم Phantomen من KESEM، المصمم خصيصًا للرجل العصري الباحث عن الجاذبية والثقة."
  },
  {
    name: "بودي سبراي Laiev Stbel",
    price: "900 EGP",
    img: "image/e72ae124-4807-4c96-9ef8-ae57b64d5e88-removebg-preview.png",
    desc: "دللي نفسك مع بخاخ الجسم Laiev Stbel من KESEM، المصمم ليمنحك لمسة من الأناقة والرقي مع كل استخدام. رائحة ناعمة وأنثوية تمتزج بين الزهور الفاخرة والفواكه المنعشة، لتعكس شخصيتك الرقيقة والجذابة في آن واحد."
  },
  {
    name: "بودي سبراي Shaila",
    price: "900 EGP",
    img: "image/eb2362f4-7200-4d4c-a4d3-497a898c3e08-removebg-preview.png",
    desc: "استمتعي بسحر العطور الشرقية مع بخاخ الجسم Shaila من KESEM، المصمم ليجمع بين الفخامة والجاذبية في رائحة واحدة."
  },
  {
    name: "بودي سبراي Far Way",
    price: "900 EGP",
    img: "image/fa126145-41a6-4d06-b9f8-04b1f280e2f1-removebg-preview.png",
    desc: "استمتعي بأجواء حالمة مع بخاخ الجسم Far Way من KESEM، برائحة ناعمة وأنثوية تجمع بين عبق الزهور ولمسات دافئة تترك أثراً لا يُنسى."
  }
];

