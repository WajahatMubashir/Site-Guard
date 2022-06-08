/** @format */
document.addEventListener("DOMContentLoaded", function () {
	var bodyTag = document.getElementsByTagName("body");
	var classCheck = bodyTag.classList;
	if (jQuery("body").hasClass("logged-in")) {
		console.log("logged-in");
	} else {
		document.addEventListener("keydown", function (event) {
			if (event.ctrlKey) {
				event.preventDefault();
			}
		});

		document.addEventListener("contextmenu", (event) =>
			event.preventDefault(),
		);

		bodyTag.setAttribute("ondragstart", "return false;");
		bodyTag.setAttribute("onselectstart", "return false;");
		bodyTag.setAttribute("oncontextmenu", "return false;");
		bodyTag.setAttribute("oncopy", "return false;");
		bodyTag.setAttribute("oncut", "return false;");
		bodyTag.setAttribute("onpaste", "return false;");
		bodyTag.setAttribute("onload", "clearData();");
		bodyTag.setAttribute("onblur", "clearData();");

		function clearData() {
			window.clipboardData.setData("text", "");
		}
		function cldata() {
			if (clipboardData) {
				clipboardData.clearData();
			}
		}
		setInterval("cldata();", 1000);
	}
});
