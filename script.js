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
  let itemCount = $(".company-item").length;
  $("#item-count").append(itemCount);
  console.log(itemCount);
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
      filterWrapper: ".vision-value-wrapper",
      filterType: "multi",
    },
  ];

  fsComponent.filter({
    filterArray: myFilters,
    activeClass: "ai-ml-active",
    filterReset: ".fiter-reset-main",
    animation: {
      enable: true,
      duration: 300,
      easing: "ease-in",
      effects: "fade ",
    },
  });
})();
