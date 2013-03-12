(function () {
    "use strict";

    var notifications = Windows.UI.Notifications;
    var notificationManager = notifications.ToastNotificationManager;
    var notifier = notificationManager.createToastNotifier();

    WinJS.Namespace.define("YeahToast", {

        show: function (options) {

            var toastXml = this.getToastXml(options);

            var toast = new notifications.ToastNotification(toastXml);

            notifier.show(toast);
        },
        schedule: function (options) {

            var toastXml = this.getToastXml(options);

            var toast = new notifications.ScheduledToastNotification(toastXml, options.due);
            toast.id = this.getUniqueToastId();

            notifier.addToSchedule(toast);
            return toast;
        },
        cancel: function (id) {
            var scheduled = notifier.getScheduledToastNotifications();
            
            for (var i = 0, len = scheduled.length; i < len; i++) {
                if (scheduled[i].id === id) {
                    notifier.removeFromSchedule(scheduled[i]);
                }
            }
        },
        getToastXml: function (options) {
            var _template = notifications.ToastTemplateType.toastText01; //default

            //check for the template value
            if (options.template) {
                _template = options.template;
            }
            else {
                //Try and figure out the template
                _template = this.getTemplateFromOptions(options);
            }

            //Get the template xml
            var toastXml = notificationManager.getTemplateContent(_template);

            if (options.audio) {
                //TODO: add in audio node under the root
            }

            if (options.imgsrc) {
                //load the xml values
                var images = toastXml.getElementsByTagName("image");
                images[0].setAttribute("src", options.imgsrc);
            }

            var textNodes = toastXml.getElementsByTagName("text");
            textNodes.forEach(function (value, index) {
                if (index == 0) {
                    value.appendChild(toastXml.createTextNode(options.title));
                } else if (index == 1) {
                    value.appendChild(toastXml.createTextNode(options.textContent));
                } else {
                    value.appendChild(toastXml.createTextNode(options.textContent2));
                }
            });

            return toastXml;
        },
        getUniqueToastId: function () {
            return Math.floor(Math.random() * 100000000);
        },
        getTemplateFromOptions: function (options) {
            if (options.imgsrc && options.title && options.textContent && options.textContent2) {
                return notifications.ToastTemplateType.toastImageAndText04;
            }
            else if (options.imgsrc && options.title && options.textContent) {
                if (options.title.length > options.textContent.length) {
                    return notifications.ToastTemplateType.toastImageAndText03;
                }
                else {
                    return notifications.ToastTemplateType.toastImageAndText02;
                }
            }
            else if (options.imgsrc && options.title) {
                return notifications.ToastTemplateType.toastImageAndText01;
            }
            else if (options.title && options.textContent && options.textContent2) {
                return notifications.ToastTemplateType.toastText04;
            }
            else if (options.title && options.textContent) {
                if (options.title.length > options.textContent.length) {
                    return notifications.ToastTemplateType.toastText03;
                }
                else {
                    return notifications.ToastTemplateType.toastText02;
                }
            }
            else {
                return notifications.ToastTemplateType.toastText01;
            }
        }
    });
})();
