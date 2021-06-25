// Counting the number of items returned after the filter function
// Only run after scripts (and HTML document) are ready
var Webflow = Webflow || [];
Webflow.push(function () {
  // DOMready has fired
  // May now use jQuery and Webflow api
  const listItem = document.getElementById("company-list");
  var i = 0,
    itemCount = 0;
  while (listItem.getElementsByClassName("company-card")[i++]) itemCount++;
  document.getElementById("item-count").innerHTML = itemCount;
});
// Hide the tabs content until a filter parent category is selected
$(".tab-link").click(function () {
  $("#tabcontent").attr("style", "display:block");
});

// F'in sweet CMS Library for Webflow

// immediately/self invoked function. This function executes right away
(function () {
  // create a new Library instance and store it in a variable called "customBlogPosts"
  var customBlogPosts = new FsLibrary(".blog-posts-list"); // define 4 filter groups in an array and store it in a variable called myFilters

  var myFilters = [
    {
      filterWrapper: ".filter-bar-category", // parent wrapper of filter group1
      filterType: "exclusive",
    },
    {
      filterWrapper: ".filter-bar-color", // parent wrapper of filter group2
      filterType: "multi",
      filterByClass: ".color", // class of the text that holds the filter info (optional)
    },
    {
      filterWrapper: ".filter-bar-price", // parent wrapper of filter group3
      filterType: "multi",
      filterRange: true, // filter by number range (optional)
    },
    {
      filterWrapper: ".filter-bar-service", // parent wrapper of filter group4
      filterType: "multi",
    },
  ]; // run the filter Library component on your instance

  customBlogPosts.filter({
    filterArray: myFilters, // variable of the array we created above
    activeClass: "button-active", // class that styles the active state (optional)
    emptyMessage: ".empty-message",
    animation: {
      enable: false,
    },
  });
})();
