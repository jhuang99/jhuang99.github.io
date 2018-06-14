$(document).ready(function() {
			$('a[href*=#]').each(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&amp;amp;&amp;amp; location.hostname == this.hostname
			&amp;amp;&amp;amp; this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
			var targetOffset = $target.offset().top;
			$(this).click(function() {
			$("#nav li a").removeClass("active");
			$(this).addClass('active');
			$('html, body').animate({scrollTop: targetOffset}, 1000);
			return false;
			});
			}
			}
			});

});
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {moveHeader()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function moveHeader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}