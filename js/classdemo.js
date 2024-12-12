const p = document.querySelector('.show-classdemo')
console.log('p',p)

function showclassdemo(item) {
  switch(item){
    case 'w02-intro-36':
      p.innerHTML = `<iframe src='./demo/w02-intro-36/index.html' width='100%' height='100%'/>`
      break

       case 'w03_card_36':
      p.innerHTML = `<iframe src='./demo/w03_card_36/index.html' width='100%' height='100%'/>`
      break

      case 'w06_blog_36':
      p.innerHTML = `<iframe src='./demo/w06_blog_36/index.html' width='100%' height='100%'/>`
      break

       case 'w07_nav_36':
      p.innerHTML = `<iframe src='./demo/w07_nav_36/index.html' width='100%' height='100%'/>`
      break
    }
}