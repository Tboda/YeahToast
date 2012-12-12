# YeahToast - Simple WinJS Toast Notification Wrapper

[WinJS Supported Templates Catalog][1]

Example Usage
--------------------------------------

### Title + Description ###

```js
YeahToast.show({ title: "YEAHTOAST!" });
YeahToast.show({ title: "YEAHTOAST!", textContent: "message does here" });
YeahToast.show({ title: "YEAHTOAST!", textContent: "message does here", textContent2: "message line 2" });
YeahToast.show({ imgsrc: "images/placeholder.png", title: "This one has an image!", textContent: "something something" });
```

![Example1](http://dkdevelopment.net/img/yeahtoast1.png)
![Example2](http://dkdevelopment.net/img/yeahtoast2.png)

### Events ###
```js
function toastActivated(e){
  var dialog = new Windows.UI.Popups.MessageDialog("User clicked on the toast!");
  dialog.showAsync();
}

function toastDismissed(e){
  var dialog = new Windows.UI.Popups.MessageDialog("Toast was dismissed!");
  dialog.showAsync();
}

function toastFailed(e){
  var dialog = new Windows.UI.Popups.MessageDialog("Toast failed to show!");
  dialog.showAsync();
}

YeahToast.show({ title: "YEAHTOAST!", onactivated: toastActivated, ondismissed: toastDismissed, onfailed: toastFailed});
```
See http://msdn.microsoft.com/en-us/library/windows/apps/br208641.aspx for dismissal reasons.

[YeahToast inspiration!][2]

[1]: http://msdn.microsoft.com/en-us/library/windows/apps/hh761494.aspx
[2]: http://www.youtube.com/watch?v=avU5onrWfYo


