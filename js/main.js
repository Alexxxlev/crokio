// =======================================================================
const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.pageYOffset > animItemOffset - animItemPoint &&
        window.pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("active");
      } else {
        animItem.classList.remove("active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}

$(document).ready(function () {
  $(".call").on("click", function (e) {
    e.preventDefault();
    $(".calendly").toggleClass("calendly--open");
  });
  $(".calendly-close, .calendly-overlay").on("click", function () {
    $(".calendly").removeClass("calendly--open");
  });
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".calendly").length &&
      !$(event.target).closest(".call").length
    ) {
      $(".calendly").removeClass("calendly--open");
    }
  });
});

$(function () {
  $(".burger, .overlay").on("click", function (e) {
    e.preventDefault();
    $(".header__nav").toggleClass("header__nav--open");
  });
  // -----------------------------------------------------------------------------
  $(".grow__acc-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("grow__acc-link--active")) {
      $(this).removeClass("grow__acc-link--active");
      $(this).children(".grow__acc-text").slideUp();
    } else {
      $(".grow__acc-link").removeClass("grow__acc-link--active");
      $(".grow__acc-text").slideUp();
      $(this).addClass("grow__acc-link--active");
      $(this).children(".grow__acc-text").slideDown();
    }
  });
  // -----------------------------------------------------------------------------
  $(".faq__acc-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("faq__acc-link--active")) {
      $(this).removeClass("faq__acc-link--active");
      $(this).removeClass("faq__acc-link--active");
      $(this).children(".faq__acc-text").slideUp();
    } else {
      $(".faq__acc-link").removeClass("faq__acc-link--active");
      $(".faq__acc-text").slideUp();
      $(this).addClass("faq__acc-link--active");
      $(this).children(".faq__acc-text").slideDown();
    }
  });

  // --------------------------------------------------------------------------------------
  $(
    ".price-btns, .inclusive__btns, .inclusive__btn, .insclusive__button, .returns, .returs"
  ).on("click", function (e) {
    var id = $(this).attr("href");
    var targetElement = $(id);
    var padding = 140;
    var top = targetElement.offset().top - padding;
    $("body,html").animate({ scrollTop: top }, 500);

    return false;
  });
});

$(function () {
  // Show more toggle
  $(".showmore--more").click(function () {
    $(".rates").toggleClass("rates--active");
    $(".rates__item-box--extra").slideToggle();
    $(".showmore--more").text(function (i, text) {
      return text === "Show more" ? "Hide" : "Show more";
    });
  });

  // popup toggle
  $(".showmore--popup").click(function () {
    $(".popup").toggleClass("popup--active");
  });
});

// анимация rates ........................................................
var scrolledRates = false;

$(window).scroll(function () {
  if (!scrolledRates) {
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $(".rates__item-list").offset().top;
    var eh = $(".rates__item-list").outerHeight();
    var dh = $(document).height();
    if (
      window.innerWidth < 1100 &&
      wt + wh >= et ||
      wh + wt == dh ||
      eh + et < wh
    ) {
      scrolledRates = true;
      $(".rates__slider").addClass("rates__slider--animate");
      $(".rates__inner").addClass("rates__inner--animate");

      setInterval(function () {
        $(".rates__slider").removeClass("rates__slider--animate");
        $(".rates__inner").removeClass("rates__inner--animate");
      }, 4500);
    }
  }
});

// анимация addservices ........................................................
var scrolledAddservices = false;

$(window).scroll(function () {
  if (!scrolledAddservices) {
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $(".addservices__content").offset().top;
    var eh = $(".addservices__content").outerHeight();
    var dh = $(document).height();
    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      scrolledAddservices = true;
      $(".addservices__content").addClass("addservices__content--animate");
      setInterval(function () {
        $(".addservices__content--animate").animate(
          {
            scrollLeft: 1000,
          },
          1000
        );
      }, 1000);
      setInterval(function () {
        $(".addservices__content--animate").animate(
          {
            scrollLeft: 0,
          },
          500
        );
        $(".addservices__content").removeClass("addservices__content--animate");
      }, 1000);
    }
  }
});

///////////////////////////////////////////////////////////////////

$(function () {
  const ratesSwiper = new Swiper(".rates__slider", {
    breakpoints: {
      // mobile + tablet - 320-990
      1200: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 1,
      },
    },
  });
});

// // Form
// $(".form__btn").on("click", function (event) {
//   event.preventDefault();

//   $(".form-box").css("display", "none");
//   $(".form-sent").css("display", "block");

//   $.ajax({
//     url: "yoururl",
//     type: "POST",
//     data: yourData,
//     success: function (result) {
//       console.log(result);
//     },
//   });
// });

// =======================================================================
var blocks = document.getElementsByClassName("card__box-item");

var activateBlock = function () {
  for (var j = 0; j < blocks.length; j++) {
    blocks[j].classList.remove("active");
  }
  this.classList.add("active");
};

for (var i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener("mouseenter", activateBlock);
  blocks[i].addEventListener("click", activateBlock);
}

blocks[1].classList.add("active");
const hover = document.querySelectorAll(".bt");

hover.forEach((hov, index) => {
  hov.addEventListener("click", () => {
    console.log(index);
    const divv = document.querySelectorAll(".box-hover");
    divv.forEach((divs) => {
      divs.classList.remove("active");
    });
    divv[index].classList.add("active");
  });
});

var b = document.querySelectorAll(".bt");
var divs = document.querySelectorAll(".inclusive__box");

var activateBlock = function (index) {
  console.log(index);
  divs.forEach(function (div) {
    div.classList.remove("active");
  });
  divs[index].classList.add("active");
};

b.forEach(function (br, index) {
  br.addEventListener("click", function () {
    activateBlock(index);
  });

  br.addEventListener("mouseenter", function () {
    activateBlock(index);
  });
});

// tabs
var tabNavs = document.querySelectorAll(
  ".inclusive__tabs .inclusive__tabs-item"
);
var tabPanes = document.querySelectorAll(".inclusive__top-box");

for (var i = 0; i < tabNavs.length; i++) {
  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    }
  });
}

// tabs mobile
var tabNavsMobile = document.querySelectorAll(
  ".inclusive__tabs--mobile .inclusive__tabs-item"
);
var tabPanesMobile = document.querySelectorAll(".inclusive__top-box");

for (var i = 0; i < tabNavsMobile.length; i++) {
  tabNavsMobile[i].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabAttrMobile = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavsMobile.length; j++) {
      var contentAttrMobile =
        tabPanesMobile[j].getAttribute("data-tab-content");

      if (activeTabAttrMobile === contentAttrMobile) {
        tabNavsMobile[j].classList.add("active");
        tabPanesMobile[j].classList.add("active");
      } else {
        tabNavsMobile[j].classList.remove("active");
        tabPanesMobile[j].classList.remove("active");
      }
    }
  });
}

// default tab при клике/наведении на план
$(".card__box-content").on("click mouseenter", function () {
  $(".inclusive__tabs .inclusive__tabs-item").removeClass("active");
  $(".inclusive__tabs .inclusive__tabs-item--default").addClass("active");
  $(".inclusive__tabs--first .inclusive__tabs-item").removeClass("active");
  $(
    ".inclusive__tabs--mobile .inclusive__tabs-item.inclusive__tabs-item--default"
  ).addClass("active");
  $(".inclusive__top-box").removeClass("active");
  $(".inclusive__top-box--default").addClass("active");
});

// ---------------------------------------------------------------
const btns = document.querySelectorAll(".price-btns");
const oneActiveBtn = document.querySelector(".return");
const oneActiveBtns = document.querySelector(".returns");
const oneActiveBt = document.querySelector(".retur");
const oneActiveBts = document.querySelector(".returs");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log(index);
    const divs = document.querySelectorAll(".inclusive__box");
    divs.forEach((div) => {
      div.classList.remove("active");
    });
    divs[index].classList.add("active");
  });
});

oneActiveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const divs = document.querySelectorAll(".inclusive__box");
  divs.forEach((div) => {
    div.classList.remove("active");
  });
  divs[0].classList.add("active");
});

oneActiveBtns.addEventListener("click", (event) => {
  event.preventDefault();
  const divs = document.querySelectorAll(".inclusive__box");
  divs.forEach((div) => {
    div.classList.remove("active");
  });
  divs[0].classList.add("active");
});

oneActiveBt.addEventListener("click", (event) => {
  event.preventDefault();
  const divs = document.querySelectorAll(".inclusive__box");
  divs.forEach((div) => {
    div.classList.remove("active");
  });
  divs[1].classList.add("active");
  activeIndex = 1;
});

oneActiveBts.addEventListener("click", (event) => {
  event.preventDefault();
  const divs = document.querySelectorAll(".inclusive__box");
  divs.forEach((div) => {
    div.classList.remove("active");
  });
  divs[1].classList.add("active");
  activeIndex = 1;
});
// -------------------------------HUI------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("acc-btn");
  var hiddenText = document.getElementById("inclusive-acc");
  var isOpen = false;

  toggleButton.addEventListener("click", function () {
    if (!isOpen) {
      hiddenText.style.display = "block";
      isOpen = true;
    } else {
      hiddenText.style.display = "none";
      isOpen = false;
    }
  });
});
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("acc-btns");
  var hiddenText = document.getElementById("inclusive-accs");
  var isOpen = false;

  toggleButton.addEventListener("click", function () {
    if (!isOpen) {
      hiddenText.style.display = "block";
      isOpen = true;
    } else {
      hiddenText.style.display = "none";
      isOpen = false;
    }
  });
});
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("acc-bt");
  var hiddenText = document.getElementById("inclusive-ac");
  var isOpen = false;

  toggleButton.addEventListener("click", function () {
    if (!isOpen) {
      hiddenText.style.display = "block";
      isOpen = true;
    } else {
      hiddenText.style.display = "none";
      isOpen = false;
    }
  });
});
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("ac-btn");
  var hiddenText = document.getElementById("first-acc");
  var isOpen = false;

  toggleButton.addEventListener("click", function () {
    if (!isOpen) {
      hiddenText.style.display = "block";
      isOpen = true;
    } else {
      hiddenText.style.display = "none";
      isOpen = false;
    }
  });
});
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("accs-btn");
  var hiddenText = document.getElementById("inclusive-accs");
  var isOpen = false;

  toggleButton.addEventListener("click", function () {
    if (!isOpen) {
      hiddenText.style.display = "block";
      isOpen = true;
    } else {
      hiddenText.style.display = "none";
      isOpen = false;
    }
  });
});
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("acc-btn-last");
  var hiddenText = document.getElementById("inclusive-acc-last");
  var isOpen = false;

  toggleButton.addEventListener("click", function () {
    if (!isOpen) {
      hiddenText.style.display = "block";
      isOpen = true;
    } else {
      hiddenText.style.display = "none";
      isOpen = false;
    }
  });
});
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("acc-btn-pink");
  var hiddenText = document.getElementById("inclusive-acc-pink");
  var isOpen = false;

  toggleButton.addEventListener("click", function () {
    if (!isOpen) {
      hiddenText.style.display = "block";
      isOpen = true;
    } else {
      hiddenText.style.display = "none";
      isOpen = false;
    }
  });
});
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("acc-btn-second");
  var hiddenText = document.getElementById("second-acc");
  var isOpen = false;

  toggleButton.addEventListener("click", function () {
    if (!isOpen) {
      hiddenText.style.display = "block";
      isOpen = true;
    } else {
      hiddenText.style.display = "none";
      isOpen = false;
    }
  });
});
