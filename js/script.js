
(function (global) {

var ado = {};

var homeHtml = "snippets/home-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var singleHtml = "snippets/single-snippet.html";
var aboutHtml = "snippets/about-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='image/loading.gif' class='loader' ></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

// Load the menu categories view
ado.loadMenuCategories = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
   categoryHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};


// Load the menu single menu view
ado.loadMenuSingle = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
   singleHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

// Load the menu about menu view
ado.loadMenuAbout = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
   aboutHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

global.$ado = ado;

})(window);
