/*
====================================================
SCROLL, SIZE & MOUSE COORDINATES CHEAT SHEET
====================================================
*/

/*
scrollBy()
------------------------
Current position se scroll karta hai.
Relative scroll.

window.scrollBy(0, 100);

Agar page 500px par hai,
toh 100px aur niche -> 600px
*/

/*
scrollTo()
------------------------
Absolute position par scroll karta hai.

window.scrollTo(0, 100);

Hamesha top se 100px position par jayega.
*/



/*
pageXOffset / pageYOffset
(window.scrollX / scrollY)
------------------------
Page top/left se kitna scroll hua hai.

window.pageYOffset
window.scrollY

Example:
Page 500px scroll hua hai
=> 500
*/




/*
offsetTop / offsetLeft
------------------------
Parent offset container ke relative
element ki position.

div.offsetTop
div.offsetLeft

NOT viewport se.

Example:
Parent ke top se 200px niche hai
=> offsetTop = 200
*/

/*
scrollTop / scrollLeft
------------------------
Scrollable div ke andar kitna scroll hua hai.

div.scrollTop
div.scrollLeft

window ke liye nahi,
normally scrollable element ke liye use karte hain.
*/

/*
scrollWidth / scrollHeight
------------------------
Element ke total content ki width/height.

Overflow hidden ho ya scroll ho,
poora content count hota hai.

div.scrollHeight

Example:
Visible height = 200px
Actual content = 1000px

=> scrollHeight = 1000
*/

/*
offsetWidth / offsetHeight
------------------------
Visible size including:

✓ Content
✓ Padding
✓ Border
✓ Scrollbar (if present)

✗ Margin

div.offsetWidth
div.offsetHeight
*/

/*
clientWidth / clientHeight
------------------------
Visible size including:

✓ Content
✓ Padding

✗ Border
✗ Scrollbar
✗ Margin

div.clientWidth
div.clientHeight
*/

/*
clientX / clientY
------------------------
Mouse position inside viewport.

event.clientX
event.clientY

Scroll count nahi hota.

Example:
Viewport ke left se 100px
=> clientX = 100
*/

/*
pageX / pageY
------------------------
Mouse position poore document/page me.

Scroll include hota hai.

event.pageX
event.pageY

Example:
Scroll = 500px
Mouse viewport me = 100px

pageY = 600
*/

/*
screenX / screenY
------------------------
Mouse position monitor/screen ke relative.

event.screenX
event.screenY

Browser ya page se relation nahi.
*/

/*
offsetX / offsetY
------------------------
Mouse position target element ke relative.

event.offsetX
event.offsetY

Example:
Div ke andar click hua

Left se 50px
Top se 20px

offsetX = 50
offsetY = 20
*/