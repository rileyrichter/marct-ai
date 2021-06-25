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
