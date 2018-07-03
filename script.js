var h1= document.querySelector('h1');
var text = h1.innerHTML;

var spanned = text.split('').map(letter => `<div><span class="inside">${letter === ' ' ? '&nbsp' : letter}</span></div>`);

h1.innerHTML=spanned.join('');

h1
  .querySelectorAll('div')
  .forEach(div => {
    div.addEventListener('mouseenter', function(e){
      TweenLite.to(div.querySelector('.inside'), 0.3, {top: -12, color: '#1E7D9E', textShadow:"0px 12px 10px rgba(0,0,0,0.3)",ease: Power1.easeOut});
    });
    div.addEventListener('mouseleave', function(e){
      TweenLite.to(div.querySelector('.inside'), 0.3, {top: 0, color: '#056585', textShadow:"0px 0px 10px rgba(0,0,0,0)", ease: Power1.easeOut});
    });
  });
