let section = document.querySelector('.section-1');
let text = document.querySelector('.logo-wrapper');

// обрабатываем событие скролла
window.addEventListener('scroll', function () {
  // получаем текущую позицию скролла
  let scrollPosition = window.scrollY;

  // вычисляем новую позицию текста
  let newPosition = scrollPosition / 6.5;
  let newPositionSectionFFHor = scrollPosition / 0.455;
  let newPositionSectionFFVert = scrollPosition / 4;

  // перемещаем текст
  text.style.transform = 'translateX(-50%) translateY(' + newPosition + 'px)';
  // sectFirstF.style.transform ='translateY('+ newPositionSectionFFVert + 'px) translateX('+ -newPositionSectionFFHor + 'px)';
  sectHorizontal.style.transform ='translateX('+ -newPositionSectionFFHor + 'px)';

  if(newPositionSectionFFHor >= sectHorizontal.offsetWidth){
    console.log('finish')
    sectHorizontal.style.transform ='translateX('+ -sectHorizontal.offsetWidth + 'px)';
  }


// Получите высоту первой секции
const sectionFirstHeight = sectFirst.offsetHeight;

// Получите высоту видимой области окна
const windowHeight = window.innerHeight;

// Вычислите расстояние от низа экрана до начала документа
const distanceFromBottom = sectionFirstHeight - windowHeight - window.pageYOffset;



  if(newPositionSectionFFHor >= innerWidth){
    // sectHorizontal.style.transform ='translateX('+ -innerWidth + 'px)';
    sectHorizontal.style.bottom = `${distanceFromBottom}px`
  }



});




// Вызовите функцию для обновления позиции облака при загрузке страницы
updateCloudPosition();

// Обновляйте ширину экрана при изменении размера окна
window.addEventListener('resize', () => {
  updateCloudPosition();
});

// Функция для обновления позиции облака
function updateCloudPosition() {
  // Определите начальную ширину экрана
  let screenWidth = 1440;

  screenWidth = window.innerWidth;
  if (screenWidth >= 1440) return
  const reductionFactor = Math.floor((1440 - screenWidth) / 100);
  const newCloudPosition = reductionFactor * -55 + 'px';
  document.documentElement.style.setProperty('--sect-1-pic-cloud-pos-l-r', newCloudPosition);
}







