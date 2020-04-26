var wrapper = document.getElementsByClass("content")[0];
wrapper.innerHTML = wrapper.textContent.replace(/./g."<span>$&</span>");
var span = wrapper.getElementsByTagName("span");
for (var i = 0;i<span.length; i++) {
span[i].style.animationDelay = 1*80 + "ms"
}