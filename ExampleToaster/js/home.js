(function () {
    "use strict";

    var nav = WinJS.Navigation;
    var ui = WinJS.UI;
    var utils = WinJS.Utilities;

    WinJS.UI.Pages.define("/default.html", {

        ready: function (element, options) {
            document.getElementById('btnShow').addEventListener("click", showToast, false);
            document.getElementById('btnCustomToast').addEventListener("click", customToast, false);
        }
    });

    function showToast() {
        YeahToast.show({ title: "Toast title!", textContent: "Toast content!" });
    }

    function customToast() {
        var title = document.getElementById("txtTitle").value;
        var content = document.getElementById("txtDescription").value;
        var image = document.getElementById("chkImage").checked;

        var imgsrc = image ? "/images/Trophy.png" : null;

        YeahToast.show({ title: title, textContent: content, imgsrc: imgsrc });
    }

})();