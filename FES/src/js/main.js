
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.classList.add("fixed")
  }

  else {
    nav.classList.remove("fixed")
  }

})

let openNav = $("#Nav-open-btn")
let closeNav = $("#Nav-close-btn")

openNav.click(function (e) {
  $("#nav-mobile-1").addClass("show")
  e.stopPropagation();
})
closeNav.click(function () {
  $("#nav-mobile-1").removeClass("show")
})



// // ***************************************************
//            Add Book Navigation on Scrool
//****************************************************
let navMobile2 = document.querySelector("#nav-mobile-2");
$(window).scroll(function () {
  if ($(window).scrollTop() > 120) {
    navMobile2.classList.add("nav-scroll2");
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
      navMobile2.classList.remove("nav-scroll2");
    }
  }


  else {
    navMobile2.classList.remove("nav-scroll2");
  }

});
window.addEventListener("load", (event) => {

  $(".preloader").fadeOut();
  $("body").css("overflow", "auto")

});
let openChildCat = $(".open-child-cat")
let closeChildCat = $(".close-btn")
openChildCat.each(function () {
  $(this).click(function (e) {
    $(this).next().addClass("show")
  })
});
closeChildCat.each(function () {

  $(this).click(function (e) {
    $(this).parent().parent().removeClass("show")
  })
});



