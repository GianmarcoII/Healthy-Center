$(function(){
  let menu = document.querySelector(".menu");
  let mobile = document.querySelector(".mobile");
  powerMenu(menu,mobile);
})

const powerMenu = function(menu, mobile){
  $(mobile).click(function(e){
    $(menu).toggleClass('open');
  })
}

const handler = function(){
  alert("This is a showcase website");
}
