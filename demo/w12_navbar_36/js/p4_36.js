const p = document.querySelector('.show-midterm-answer')
console.log('p',p)

function showMidtermPage(item) {
  switch(item){
    case 'p1_xx':
      p.innerHTML = `<iframe src='./p1_xx/p1_xx.html' width='100%' height='100%'/>`
      break
    }
}