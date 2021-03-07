function openNav() {
	document.getElementById("myNav").style.width = "100%"
}

function openNav() {
	document.getElementById("myNav").style.width = "100%"
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%"
}
$(document).ready(function () {
	$(".js-services-section").waypoint(function (t) {
		"down" == t ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")
	});
	mixitup(".container");
	$("a").on("click", function (t) {
		var n;
		"" !== this.hash && (t.preventDefault(), n = this.hash, $("html, body").animate({
			scrollTop: $(n).offset().top
		}, 800, function () {
			window.location.hash = n
		}))
	})
});
$("svg.radial-progress").each(function (e, t) {
	$(this).find($("circle.complete")).removeAttr("style")
}), $(window).scroll(function () {
	$("svg.radial-progress").each(function (e, t) {
		$(window).scrollTop() > $(this).offset().top - .75 * $(window).height() && $(window).scrollTop() < $(this).offset().top + $(this).height() - .25 * $(window).height() && (percent = $(t).data("percentage"), radius = $(this).find($("circle.complete")).attr("r"), circumference = 2 * Math.PI * radius, strokeDashOffset = circumference - percent * circumference / 100, $(this).find($("circle.complete")).animate({
			"stroke-dashoffset": strokeDashOffset
		}, 1250))
	})
}).trigger("scroll");

function closeNav() {
	document.getElementById("myNav").style.width = "0%"
}
$(document).ready(function () {
	$(".js-services-section").waypoint(function (t) {
		"down" == t ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")
	});
	mixitup(".container");
	$("a").on("click", function (t) {
		var n;
		"" !== this.hash && (t.preventDefault(), n = this.hash, $("html, body").animate({
			scrollTop: $(n).offset().top
		}, 800, function () {
			window.location.hash = n
		}))
	})
});
$("svg.radial-progress").each(function (e, t) {
	$(this).find($("circle.complete")).removeAttr("style")
}), $(window).scroll(function () {
	$("svg.radial-progress").each(function (e, t) {
		$(window).scrollTop() > $(this).offset().top - .75 * $(window).height() && $(window).scrollTop() < $(this).offset().top + $(this).height() - .25 * $(window).height() && (percent = $(t).data("percentage"), radius = $(this).find($("circle.complete")).attr("r"), circumference = 2 * Math.PI * radius, strokeDashOffset = circumference - percent * circumference / 100, $(this).find($("circle.complete")).animate({
			"stroke-dashoffset": strokeDashOffset
		}, 1250))
	})
}).trigger("scroll");