// Counting the number of items returned after the filter function
var Webflow = Webflow || [];
Webflow.push(function () {
  let itemCount = $(".company-item").length;
  $("#item-count").append(itemCount);
  console.log(itemCount);
});

// Hide the tabs content until a filter parent category is selected
$(".tab-link").click(function () {
  $("#tabcontent").attr("style", "display:block");
});

//Update item count on filter change

$(".ai-ml-filter").click(function () {
  setTimeout(function () {
    var allElems = document.getElementsByClassName("company-item");
    var count = 0;
    for (var i = 0; i < allElems.length; i++) {
      var thisElem = allElems[i];
      if (thisElem.style.display != "none") count++;
      console.log(count);
    }
  }, 3000);
});

// F'in sweet CMS Library for Webflow

(function () {
  var fsComponent = new FsLibrary(".company-list");

  var myFilters = [
    {
      filterWrapper: ".ai-ml-wrapperfilter",
      filterType: "multi",
    },
    {
      filterWrapper: ".industry-wrapperfilter",
      filterType: "multi",
    },
    {
      filterWrapper: ".vision-wrapperfilter",
      filterType: "multi",
    },
  ];

  fsComponent.filter({
    filterArray: myFilters,
    activeClass: "ai-ml-active",
    animation: {
      enable: true,
      duration: 300,
      easing: "ease-in",
      effects: "fade ",
    },
  });
})();
