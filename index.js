$('.menu-icon').click(function () {
  removeClasses([$('.menu-icon'), $(".icon-container p"), $(".icon-container")], "active");
  addClass(
    [
      $(this),
      $(this).next(),
      $(this).parent(),
      $('aside'),
      $('#aside-content'),
      $('article'),
      $('#menu-nav'),
      $('header'),
      $('header h2')
    ], "active");
  changeAsideContent($(".menu-icon"), this);
});

$('.back-button').click(function () {
  removeClasses(
    [
      $('header'),
      $('header h2'),
      $('.flex-container article'),
      $('.menu-icon'),
      $(".icon-container p"),
      $(".icon-container"),
      $('aside'),
      $('#aside-content'),
      $('#menu-nav')
    ], "active");
});

$(document).ready(function () {
  if ($(window).width() > 600) {
    document.getElementById('first-icon').click();
  }
});

var asideDivs = [
  `<img id="figure1-img" src="assets/figure1.jpg" >
  <br>
  <div id="figure1-div">
    something about this image figure1
  </div>
  <hr>
  <img id="figure2-img" src="assets/figure2.png" >
  <br>
  <div id="figure2-div">
    somthing about second image figure2
  </div>
  <br><br><br><br>`,

  `<h4> Lorem </h4>
  <hr>
  <div>
    ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione veniam eius quibusdam laboriosam maxime fugiat earum?
  </div>
  <h4>Lorem</h4>
  <hr>
  <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione veniam eius quibusdam laboriosam maxime fugiat earum?
  </div>`,

  `<h4>Tiitle</h4>
  <hr>
  <div>
    ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione      veniam eius quibusdam laboriosam maxime fugiat earum?
  </div>
  <h4>Tiitle</h4>
  <hr>
  <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione veniam eius quibusdam laboriosam maxime fugiat earum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione veniam eius quibusdam laboriosam maxime fugiat earum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione veniam eius quibusdam laboriosam maxime fugiat earum?
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione veniam eius quibusdam laboriosam maxime fugiat earum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione veniam eius quibusdam laboriosam maxime fugiat earum,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit ex minus aut dicta soluta earum, molestias
    iste, asperiores, nam nobis eius labore! Ratione veniam eius quibusdam laboriosam maxime fugiat 
  </div>`,

  '<p>about details</p>'
];

function addClass(selectors, className) {
  for (let i = 0; i < selectors.length; i++) {
    selectors[i].addClass(className);
  }
}

function removeClasses(selectors, className) {
  for (let i = 0; i < selectors.length; i++) {
    selectors[i].removeClass(className);
  }
}

function changeAsideContent(elements, selector) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] == selector) {
      $("#aside-content").html(asideDivs[i]);
    }
  }
}