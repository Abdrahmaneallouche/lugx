let burger = document.querySelector('.burger');
let span = document.querySelectorAll('.burger span');

burger.onclick=function(){
 navBar=document.querySelector('ul');
 navBar.classList.toggle('active');
  span.classList.toggle('switch');
}

burger.addEventListener("click",()=>{
  burger.classList.toggle('swipe');
})


const btn = document.querySelectorAll('.buttons button');
btn.forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelector('.is-active')?.classList.remove('is-active');
    button.classList.add('is-active');
  });
}); 


const filterButtons=document.querySelectorAll('.buttons button');
const filterCard=document.querySelectorAll('.games .game');

const filterCards = e=>{
  document.querySelector('.is-active').classList.remove('is-active');
  e.target.classList.add('is-active');
  filterCard.forEach(card=>{
    card.classList.add('hide');

    if(card.dataset.name=== e.target.dataset.name || e.target.dataset.name ==='all'){
      card.classList.remove('hide');
    }
  })

};
filterButtons.forEach(button=> button.addEventListener('click',filterCards))



const button = document.querySelectorAll('.des-rev button');
const paar = document.querySelectorAll('.parag p')


const hideShow=e=>{
  document.querySelector('.active')?.classList.remove('active');
  e.target.classList.add("active");

  paar.forEach(p=>{
    p.classList.add('show');
    if(p.dataset.name===e.target.dataset.name ){
      p.classList.remove('show');
    }
  })
};

button.forEach(button=>button.addEventListener('click',hideShow));


const link= document.querySelectorAll('header ul li');

link.forEach(a=>{
  a.addEventListener("click",()=>{
    document.querySelector('.act')?.classList.remove("act");
    a.classList.add('act');
  })
})



window.addEventListener('scroll',function(){
const header=document.querySelector("header ");
header.classList.toggle('sticky', window.scrollY > 750);
})