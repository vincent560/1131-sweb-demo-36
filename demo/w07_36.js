const p =document.querySelector('.show-classdemo')
console.log('show-classdemo', p)

function showDemo(item) {
   switch(item) {
    case 'w02_intro_36':
    p.innerHTML=`<iframe src='./w02-intro-36/index.html' width="100%" height="100%" />`

    break
    case 'w03_card_36':
    p.innerHTML=`<iframe src='./w03_card_36/index.html' width="100%" height="100%" />`
    break
    case 'w06_blog_36':
    p.innerHTML=`<iframe src='./w06_blog_36/index.html' width="100%" height="100%" />`
    break
   }
}