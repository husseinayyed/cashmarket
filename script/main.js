
function id(item) {
  return document.getElementById(item)
}
function className(item) {
  return document.getElementsByClassName(item)
}
className("whatsapp")[0].addEventListener("click",function(){location.href="https://wa.me/9647875003990"})
className("whatsapp")[1].addEventListener("click",function(){location.href="https://wa.me/9647875003990"})
className("maps")[0].addEventListener("click",function(){location.href="https://maps.app.goo.gl/HjXEq3v9LFN1spHC8"})
className("maps")[1].addEventListener("click",function(){location.href="https://maps.app.goo.gl/HjXEq3v9LFN1spHC8"})

function toggleMenu() {
  id("ham").classList.toggle("active")
  id("scall").classList.toggle("active")
}
function createProductCard(imageSrc, price, title) {
  // إنشاء العناصر الأساسية للبطاقة
  const article = document.createElement('article');
  const image = document.createElement('img');
  const titleElement = document.createElement('h2');
  const priceElement = document.createElement('h3');
  const spanElement = document.createElement("span");
  
  const button = document.createElement('button');
  const section = document.createElement('section');

  // تعيين خصائص العناصر
  image.src = imageSrc;
  image.draggable = false;
  image.alt = title;
  image.loading = 'lazy';
  titleElement.textContent = title;
  priceElement.textContent = price;
  spanElement.textContent = " دينار عراقي";
  button.textContent = "اطلب الآن";
  button.classList.add('dodger-button', 'pointer');
  button.addEventListener("click",function(){
    alert("يجب التواصل مع إدارة المجمع على الواتساب او زيارتهم ، رقم الواتساب وموقع المجمع على خرائط Google موجود أعلاه")
  })

  // بناء هيكل البطاقة
  section.appendChild(button);
  article.appendChild(image);
  article.appendChild(titleElement);
  priceElement.appendChild(spanElement)
  article.appendChild(priceElement);
  article.appendChild(section);

  // إرجاع العنصر المُنشأ
  id("main").appendChild(article);
}
fetch("./data/products.json").then((data)=>data.json()).then((data)=>{
  
  for(let x = 0;x<10;x++){
    createProductCard(data.items[0][x].source, data.items[0][x].price,data.items[0][x].alt)
  }
  
  
})
// مثال لاستخدام الدالة لإنشاء بطاقة المنتج
