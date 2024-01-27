// Modal
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function (event) {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data("modal");

  $(modalId).addClass("modal--show");
  $("body").addClass("no-scroll");

  setTimeout(function () {
    $(modalId).find(".modal__dialog").css({
      transform: "scale(1)",
    });

    $(modalId).find(".modal-showcase__dialog").css({
      transform: "translateY(0%)",
    });
  }, 200);
});

$(".showcase__item").on("click", function (event) {
  event.preventDefault();

  if (document.documentElement.clientWidth > 650) {
    $("body").removeClass("no-scroll");
  }
});

modalClose.on("click", function (event) {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents(".modal");

  modalParent.find(".modal__dialog").css({
    transform: "scale(0)",
  });

  setTimeout(function () {
    modalParent.removeClass("modal--show");
    $("body").removeClass("no-scroll");
  }, 200);
});

$(".modal").on("click", function (event) {
  let $this = $(this);

  $this.find(".modal__dialog").css({
    transform: "scale(0)",
  });

  $this.find(".modal-showcase__dialog").css({
    transform: "translateY(100%)",
  });

  setTimeout(function () {
    $("body").removeClass("no-scroll");
    $this.removeClass("modal--show");
  }, 200);
});

$(".modal__dialog").on("click", function (event) {
  event.stopPropagation();
});

// Form
$(".form__btn").on("click", function (event) {
  event.preventDefault();
  
  $(".form").css("display", "none");
  $(".form-sent").css("display", "block");

  $.ajax({
    url: "yoururl",
    type: "POST",
    data: yourData,
    success: function (result) {
      console.log(result);
    },
  });
});

$(function () {
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
  // ============================================================================================

  // ============================================================================================

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

    // SLIDER1
    $(".testimonials__slider").slick({
      slidesToShow: 1,
      arrows: false,
      dots: false,
      waitForAnimate: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
    });
    $(".testimonials__slider-prev").on("click", function (e) {
      e.preventDefault();
      $(".testimonials__slider").slick("slickPrev");
    });
    $(".testimonials__slider-next").on("click", function (e) {
      e.preventDefault();
      $(".testimonials__slider").slick("slickNext");
    });
    // SLIDER2
    $(".case__slider").slick({
      slidesToShow: 1,
      arrows: false,
      dots: false,
      waitForAnimate: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
    });
    $(".case__slider-prev").on("click", function (e) {
      e.preventDefault();
      $(".case__slider").slick("slickPrev");
    });
    $(".case__slider-next").on("click", function (e) {
      e.preventDefault();
      $(".case__slider").slick("slickNext");
    });
  });

  $(window)
    .scroll(function () {
      var $window = $(window),
        $body = $("body"),
        $panel = $(".panel");

      var scroll = $window.scrollTop() + $window.height() / 1.5;

      $panel.each(function () {
        var $this = $(this);

        if (
          $this.position().top <= scroll &&
          $this.position().top + $this.height() > scroll
        ) {
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
          });

          $body.addClass("color-" + $(this).data("color"));
          $body.find(".text").css("color", dataColor);
        }
      });
    })
    .scroll();

  // анимации wow js
  $(function () {
    new WOW().init();
  });

  // google timeline
  $(function () {
    google.charts.load("current", { packages: ["timeline"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var container = document.getElementById("timeline");
      var chart = new google.visualization.Timeline(container);
      var dataTable = new google.visualization.DataTable();

      dataTable.addColumn({ type: "string", id: "Term" });
      dataTable.addColumn({ type: "string", id: "Name" });
      dataTable.addColumn({ type: "string", role: "tooltip" });
      dataTable.addColumn({ type: "date", id: "Start" });
      dataTable.addColumn({ type: "date", id: "End" });
      dataTable.addRows([
        [
          "Marketing",
          "Branding Development",
          "Developing a brand's identity, positioning, and messaging through market research, strategy development, and visual design.",
          new Date(2023, 6, 16),
          new Date(2023, 6, 29),
        ],
        [
          "Marketing",
          "Facebook, Instagram Pages - Content Creation",
          "Creating engaging and visually appealing content for Facebook and Instagram pages to attract and engage the target audience, promote brand awareness, and drive user interaction.",
          new Date(2023, 6, 30),
          new Date(2023, 7, 23),
        ],
        [
          "Marketing",
          "Analytics and Reporting",
          "Analyzing marketing data, generating reports, and providing insights to measure the effectiveness of marketing campaigns, identify trends, and make data-driven decisions for optimizing future strategies.",
          new Date(2023, 7, 24),
          new Date(2023, 8, 2),
        ],
        [
          "Marketing",
          "YouTube Content Creation",
          "Producing high-quality video content for YouTube channels, including scripting, filming, editing, and optimizing videos to engage the audience and drive viewership and subscriber growth.",
          new Date(2023, 8, 3),
          new Date(2023, 8, 23),
        ],
        [
          "Marketing",
          "Company Catalog - Content Creation",
          "Creating visually appealing and informative content for company catalogs, including product descriptions, images, and specifications, to showcase the range of offerings and attract potential customers.",
          new Date(2023, 8, 24),
          new Date(2023, 9, 21),
        ],
        [
          "Marketing",
          "Analytics and Reporting",
          "Analyzing marketing data, generating reports, and providing insights to measure the effectiveness of marketing campaigns, identify trends, and make data-driven decisions for optimizing future strategies.",
          new Date(2023, 9, 22),
          new Date(2023, 9, 28),
        ],
        [
          "Marketing",
          "Campaign Execution and Optimization",
          "Developing a brand's identity, positioning, and messaging through market research, strategy development, and visual design.",
          new Date(2023, 9, 29),
          new Date(2023, 10, 18),
        ],
        [
          "Marketing",
          "Marketing Strategy Research",
          "Conducting comprehensive research on target markets, industry trends, consumer behavior, and competitor analysis to develop effective marketing strategies that align with business objectives and drive success.",
          new Date(2023, 6, 2),
          new Date(2023, 6, 22),
        ],
        [
          "Marketing",
          "Campaign Development",
          "Planning and executing marketing campaigns by defining campaign objectives, target audience, messaging, selecting appropriate channels, and coordinating various campaign elements to achieve desired outcomes and generate measurable results.",
          new Date(2023, 6, 23),
          new Date(2023, 7, 26),
        ],
        [
          "Marketing",
          "Digital & Offline Advertising Planning",
          "Developing comprehensive advertising plans that encompass both digital and offline channels, including identifying target audiences, selecting appropriate advertising platforms, creating engaging ad content, and optimizing campaigns to maximize reach and impact.",
          new Date(2023, 7, 27),
          new Date(2023, 8, 16),
        ],
        [
          "Marketing",
          "Promo Video Content Creation",
          "Creating engaging and visually appealing content for Facebook and Instagram pages to attract and engage the target audience, promote brand awareness, and drive user interaction.",
          new Date(2023, 8, 17),
          new Date(2023, 9, 14),
        ],
        [
          "Marketing",
          "Google Maps & Yellow Pages Setup",
          "Setting up and optimizing business profiles on Google Maps and Yellow Pages platforms, including accurate listing information, business descriptions, contact details, and relevant keywords, to enhance online visibility and improve local search engine rankings.",
          new Date(2023, 9, 15),
          new Date(2023, 9, 28),
        ],
        [
          "Marketing",
          "Company Catalog - Content Creation",
          "Creating compelling and informative content for a company catalog, including product descriptions, images, pricing details, and specifications, to effectively showcase the company's offerings and attract potential customers.",
          new Date(2023, 9, 29),
          new Date(2023, 10, 19),
        ],
        [
          "Marketing",
          "Website Planning and Requirements Gathering",
          "Conducting thorough analysis and gathering client requirements to plan and outline the structure, features, functionality, and content strategy for a website, ensuring it meets the client's objectives and user needs.",
          new Date(2023, 6, 9),
          new Date(2023, 6, 29),
        ],
        [
          "Marketing",
          "Website Content Creation",
          "Planning and executing marketing campaigns by defining campaign objectives, target audience, messaging, selecting appropriate channels, and coordinating various campaign elements to achieve desired outcomes and generate measurable results.",
          new Date(2023, 6, 30),
          new Date(2023, 8, 2),
        ],
        [
          "Marketing",
          "Mobile App Planning and Requirements Gathering",
          "Conducting comprehensive analysis and gathering client requirements to plan and outline the features, functionality, user interface, and user experience of a mobile app, ensuring it aligns with the client's objectives and meets the needs of the target audience.",
          new Date(2023, 8, 3),
          new Date(2023, 8, 23),
        ],
        [
          "Marketing",
          "Mobile App Content Creation",
          "Creating engaging and user-friendly content, including text, images, videos, and interactive elements, for a mobile app that effectively communicates information, guides users, and enhances their overall experience, aligning with the app's purpose and target audience.",
          new Date(2023, 8, 24),
          new Date(2023, 10, 19),
        ],

        [
          "Web-Development",
          "Website - UX/UI Design",
          "Designing the user experience (UX) and user interface (UI) of a website by creating intuitive navigation, visually appealing layouts, interactive elements, and seamless interactions to enhance usability and provide an engaging and satisfying experience for website visitors.",
          new Date(2023, 6, 23),
          new Date(2023, 7, 12),
        ],
        [
          "Web-Development",
          "Web Design",
          "Designing visually appealing and functional websites by creating layouts, selecting color schemes, choosing typography, and incorporating graphics and multimedia elements to ensure an aesthetically pleasing and user-friendly online presence.",
          new Date(2023, 7, 13),
          new Date(2023, 7, 26),
        ],
        [
          "Web-Development",
          "Back-end and Front-end Development",
          "Back-end website development involves building the server-side functionality, while front-end development focuses on creating the user interface and client-side functionality.",
          new Date(2023, 7, 27),
          new Date(2023, 8, 23),
        ],
        [
          "Web-Development",
          "Testing, Release",
          "Testing and release involve conducting comprehensive quality assurance tests to identify and resolve any issues or bugs in a website or application before it is officially launched to ensure a smooth and error-free user experience. Once testing is complete, the product is released to the intended audience.",
          new Date(2023, 8, 24),
          new Date(2023, 9, 2),
        ],
        [
          "Web-Development",
          "Website Deployment and Maintenance",
          "Website deployment is the process of making a website live, while website maintenance involves ongoing updates and management to ensure its optimal performance and security.",
          new Date(2023, 9, 3),
          new Date(2023, 10, 19),
        ],
        [
          "Web-Development",
          "E-mail list Development",
          "E-mail advertising involves sending targeted promotional messages to a list of subscribers via email to drive conversions, build brand awareness, and foster customer relationships.",
          new Date(2023, 7, 3),
          new Date(2023, 7, 25),
        ],
        [
          "Web-Development",
          "Mobile app - UX/UI Design",
          "Mobile app UX/UI design involves creating a visually appealing and user-friendly interface for a mobile application, focusing on intuitive navigation, engaging interactions, and optimizing the overall user experience.",
          new Date(2023, 8, 10),
          new Date(2023, 9, 7),
        ],
        [
          "Web-Development",
          "Mobile app Design",
          "Mobile app design encompasses the entire process of creating an engaging and user-friendly interface for a mobile application, which includes wireframing, prototyping, visual design, and interaction design to deliver a visually appealing and intuitive user experience.",
          new Date(2023, 9, 8),
          new Date(2023, 10, 4),
        ],
        [
          "Web-Development",
          "Mobile app Development",
          "Mobile app development is the process of creating software applications specifically designed to run on mobile devices, such as smartphones or tablets. It involves various stages, including ideation, design, coding, testing, and deployment, to create functional and user-friendly mobile applications for platforms like iOS and Android.",
          new Date(2023, 10, 5),
          new Date(2023, 10, 19),
        ],

        [
          "Design",
          "Business identity design",
          "Business identity design is the process of creating a visual representation of a company's brand, including its logo and other visual elements, to establish a recognizable and cohesive brand identity.",
          new Date(2023, 6, 16),
          new Date(2023, 7, 5),
        ],
        [
          "Design",
          "Social media graphics",
          "Social media graphics are visual content designed for sharing on social media platforms to attract engagement, increase brand visibility, and effectively communicate messages to the target audience.",
          new Date(2023, 7, 6),
          new Date(2023, 7, 25),
        ],
        [
          "Design",
          "Promotional merchandise Design",
          "Promotional merchandise design is the process of creating visually appealing and branded items that are used for promotional purposes, incorporating the company's logo and messaging to effectively promote the business or event.",
          new Date(2023, 7, 27),
          new Date(2023, 8, 16),
        ],
        [
          "Design",
          "Social media graphics",
          "Social media graphics are visual content designed for sharing on social media platforms to attract engagement, increase brand visibility, and effectively communicate messages to the target audience.",
          new Date(2023, 8, 17),
          new Date(2023, 8, 29),
        ],
        [
          "Design",
          "Product Catalog Design",
          "Product catalog design involves creating visually engaging and informative layouts that effectively showcase a company's products or services, highlighting their features and benefits to entice customers and drive sales.",
          new Date(2023, 9, 8),
          new Date(2023, 10, 4),
        ],
        [
          "Design",
          "Social media graphics",
          "Social media graphics are visual content designed for sharing on social media platforms to attract engagement, increase brand visibility, and effectively communicate messages to the target audience.",
          new Date(2023, 10, 5),
          new Date(2023, 10, 19),
        ],
        [
          "Design",
          "E-mail Ads Design",
          "Create an attention-grabbing and persuasive email ad that showcases the benefits of your product/service, compelling the customer to take action and make a purchase.",
          new Date(2023, 7, 3),
          new Date(2023, 7, 19),
        ],
        [
          "Design",
          "Custom Design - Animations and Illustrations for Website",
          "Create engaging and visually captivating custom animations and illustrations tailored to your brand's style and website's needs, enhancing user experience and effectively conveying information or messages.",
          new Date(2023, 7, 20),
          new Date(2023, 8, 16),
        ],
        [
          "Design",
          "Custom Design - Animations and Illustrations for Mobile App",
          "Craft unique and eye-catching animations and illustrations customized for your mobile app, enhancing its visual appeal, user experience, and effectively conveying information or guiding user interactions.",
          new Date(2023, 8, 17),
          new Date(2023, 9, 21),
        ],
        [
          "Design",
          "Company Presentation Design",
          "Create a visually compelling and professionally designed company presentation that effectively communicates your brand's story, key messages, and engages the audience, leaving a lasting impression.",
          new Date(2023, 9, 22),
          new Date(2023, 10, 19),
        ],
        [
          "Design",
          "Advertising Design Google, Banners",
          "Design eye-catching and impactful advertising banners for Google display network, tailored to your target audience and campaign goals, to drive clicks, conversions, and brand awareness.",
          new Date(2023, 7, 11),
          new Date(2023, 8, 9),
        ],
        [
          "Design",
          "Company custom stickers and labels",
          "Create unique and customized stickers and labels for your company, incorporating your branding elements and design preferences, to enhance your product packaging, marketing materials, or promotional items.",
          new Date(2023, 8, 10),
          new Date(2023, 8, 23),
        ],
        [
          "Design",
          "Video Animations and Processing",
          "Produce engaging and visually appealing video animations with professional processing techniques, enhancing your videos with special effects, transitions, and editing to captivate your audience.",
          new Date(2023, 8, 24),
          new Date(2023, 9, 14),
        ],
        [
          "Design",
          "Packaging design",
          "Design visually appealing and impactful packaging that effectively showcases your product, captures attention on store shelves, and communicates your brand's identity and values to potential customers.",
          new Date(2023, 9, 15),
          new Date(2023, 10, 3),
        ],
        [
          "Design",
          "Exhibition stand Design",
          "Create a captivating and innovative exhibition stand design that showcases your brand, products, and messaging, engaging visitors and leaving a lasting impression at trade shows or events.",
          new Date(2023, 10, 5),
          new Date(2023, 10, 19),
        ],

        [
          "Advertising",
          "Google Advertising Setup",
          "Set up effective Google advertising campaigns by conducting keyword research, creating compelling ad copy, optimizing targeting settings, and configuring conversion tracking, to drive relevant traffic and maximize return on investment.",
          new Date(2023, 8, 1),
          new Date(2023, 8, 23),
        ],
        [
          "Advertising",
          "Performance Analysis and Reporting",
          "Conduct comprehensive performance analysis and reporting for your advertising campaigns, utilizing key metrics and insights to evaluate the effectiveness, identify areas for improvement, and provide actionable recommendations for optimizing campaign performance and ROI.",
          new Date(2023, 8, 24),
          new Date(2023, 9, 13),
        ],
        [
          "Advertising",
          "Instagram, FB Advertising Setup",
          "Efficiently set up Instagram and Facebook advertising campaigns by creating compelling ad creatives, defining precise targeting parameters, and optimizing bidding strategies to reach your desired audience and achieve campaign objectives.",
          new Date(2023, 9, 15),
          new Date(2023, 10, 4),
        ],
        [
          "Advertising",
          "Performance Analysis and Reporting",
          "Conduct comprehensive performance analysis and reporting for your advertising campaigns, utilizing key metrics and insights to evaluate the effectiveness, identify areas for improvement, and provide actionable recommendations for optimizing campaign performance and ROI.",
          new Date(2023, 10, 5),
          new Date(2023, 10, 19),
        ],
        [
          "Advertising",
          "E-mail Advertising Setup and Realization",
          "Effectively set up and execute email advertising campaigns by creating compelling content, designing visually appealing templates, segmenting the audience, and implementing tracking mechanisms to maximize engagement and conversions.",
          new Date(2023, 6, 30),
          new Date(2023, 7, 18),
        ],
        [
          "Advertising",
          "Direct Mail Advertising Setup and Realization",
          "Proficiently set up and execute direct mail advertising campaigns by developing impactful designs, targeting the right audience, coordinating printing and mailing logistics, and tracking campaign performance to generate effective offline marketing results.",
          new Date(2023, 7, 20),
          new Date(2023, 8, 15),
        ],
        [
          "Advertising",
          "Local Sport Event Advertising",
          "Create targeted and engaging local sport event advertising campaigns that effectively promote the event, reach the desired audience, and generate excitement and participation through strategic placement and compelling messaging.",
          new Date(2023, 8, 17),
          new Date(2023, 9, 7),
        ],
        [
          "Advertising",
          "Loyalty program with special discounts",
          "Develop a comprehensive loyalty program with exclusive discounts and rewards, tailored to incentivize customer loyalty, encourage repeat purchases, and foster long-term relationships with your brand.",
          new Date(2023, 9, 8),
          new Date(2023, 9, 28),
        ],
        [
          "Advertising",
          "Postcards Advertising Setup",
          "Efficiently set up postcard advertising campaigns by designing visually appealing postcards, defining targeted mailing lists, coordinating printing and distribution, and tracking response rates to effectively promote your business or offers.",
          new Date(2023, 9, 29),
          new Date(2023, 10, 19),
        ],
      ]);

      var options = {
        width: "100%",
        colors: ["#ff4618", "#510f93", "#e7fd43", "#232428"],
        timeline: {
          colorByRowLabel: true,
        },
        focusTarget: "category",
        tooltip: {
          isHtml: true,
        },
        legend: "none",
      };

      chart.draw(dataTable, options);
    }
  });

  // timeline horizontal scroll
  const container = document.getElementById("timelineBox");
  // where "container" is the id of the container
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 100;
      e.preventDefault();
      // prevenDefault() will help avoid worrisome
      // inclusion of vertical scroll
    } else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });
});
