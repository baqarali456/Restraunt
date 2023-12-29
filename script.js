const restaCards = document.querySelector('.resta-Cards');
const menuList = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

String.prototype.Uppercase = function(){
    return this.toUpperCase()
}


function showMenu(menu){
    let menus = menu.map(menuitem=>{
        const {id,title,category,price,img,desc} = menuitem
        return `
        <div class="card mx-3 my-3" style="width: 18rem;">
                <img src=${img.Uppercase()} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title.Uppercase()}</h5>
                  <h5 class="card-title">${category.Uppercase()}</h5>
                  <p class="card-text">$${price}</p>
                  <p class="card-text">${desc.Uppercase()}</p>
                </div>
         </div>
        `
    })
    restaCards.innerHTML = menus
}
showMenu(menuList)

function showCategory(){
    let categoryList = menuList.map(menuitem=>menuitem.category);
     categoryList = ["all",...new Set(categoryList)];
    //  console.log(categoryList);
     
     let categories = categoryList.map(category=>{
        return `<h5 class="categories mx-2">${category}</h5>`
     })
    category.innerHTML = categories.join('');  
}
showCategory()

const btns = document.querySelectorAll('.categories');

btns.forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    const btnCategory = e.target.textContent;
    const filtercategory = menuList.filter(menuitem=>menuitem.category === btnCategory);
    if(btnCategory === "all"){
    showMenu(menuList)
    }
    else{
    showMenu(filtercategory)
    }
  })
    
})


submit.addEventListener('click',(e)=>{
e.preventDefault()
const filtercategory = menuList.filter(menuitem=>menuitem.category === input.value);
if(input.value == "all"){
  showMenu(menuList)
}
else{

  showMenu(filtercategory)
}
})
