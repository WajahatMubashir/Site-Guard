/** @format */
document.addEventListener("DOMContentLoaded", function () {
	var bodyTag = document.getElementsByTagName("body");
	var classCheck = bodyTag.classList;
	console.log(classCheck);
	if (jQuery("body").hasClass("admin-bar")) {
		console.log("logged-in");
	} else {
		document.addEventListener("keydown", function (event) {
			if (event.ctrlKey) {
				event.preventDefault();
			}
		});

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

// Showing Warning Message
document.addEventListener("DOMContentLoaded", function () {
	if (jQuery("body").hasClass("admin-bar")) {
		console.log("logged-in");
	} else {
		window.addEventListener("contextmenu", (event) => {
			var boxStructure = jQuery(
				`<div class="modal-main"><div class="modal-warn"><p class="warn-message">Please don't copy content from this website.</p><button id="mybutton">Close</button></div></div>`,
			);
			var bodySection = jQuery("body");
			boxStructure.insertAfter(bodySection);
			var btnClose = jQuery("#mybutton");
			btnClose.on("click", function () {
				jQuery(".modal-main").css("display", "none");
			});
			event.preventDefault();
		});
		
		document.onkeydown = function (e) {
			// disable F12 key
			if(e.keyCode == 123) {
				return false;
			}
		}
	}
});
