(function () {
    "use strict";

    var nav = WinJS.Navigation;
    var ui = WinJS.UI;
    var utils = WinJS.Utilities;

    WinJS.UI.Pages.define("/default.html", {

        ready: function (element, options) {
            document.getElementById('btnShow').addEventListener("click", showToast, false);
        }
    });

    function showToast() {
        YeahToast.Toast.show({ title: "Toast title!", textContent: "Toast content!" });
    }

})();