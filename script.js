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

// F'in sweet CMS Library for Webflow

// immediately/self invoked function. This function executes right away
(function () {
  // create a new Library instance and store it in a variable called "customBlogPosts"
  var companySubdomain = new FsLibrary(".company-list"); // define 4 filter groups in an array and store it in a variable called myFilters

  var myFilters = [
    {
      filterWrapper: ".ai-ml-wrapperfilter", // parent wrapper of filter group1
      filterType: "multi",
    },
    {
      filterWrapper: ".industry-wrapperfilter", // parent wrapper of filter group2
      filterType: "multi",
      filterByClass: ".industry-tag", // class of the text that holds the filter info (optional)
    },
  ]; // run the filter Library component on your instance

  companySubdomain.filter({
    filterArray: myFilters, // variable of the array we created above
    activeClass: "ai-ml-active", // class that styles the active state (optional)
    emptyMessage: ".empty-message",
    animation: {
      enable: true,
    },
  });
})();
