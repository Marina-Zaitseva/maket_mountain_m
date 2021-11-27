let phrases = [
  { text: 'Венеция', image: 'images/galery/' },
  { text: 'Язык Тролля', image: 'https://img.fonwall.ru/o/50/yazyk-trollya-skala-trolltunga-norvegiya-gory.jpg?route=mid&amp;h=750' },
  { text: 'Бонифачо', image: 'https://www.fodors.com/wp-content/uploads/2021/01/shutterstock_339266552.jpg' },
  { text: 'Долина Энгадин', image: 'https://www.kinggoya.com/wp-content/uploads/2015/09/St.-Moritz-Dorf-Lake-St.-Moritz-the-Piz-Albris-3166m-and-the-Piz-Mezdi-2992m-in-the-background.-1673x840.jpg' },
  { text: 'Подвесные мосты Канопи', image: 'https://im0-tub-ru.yandex.net/i?id=fc31eaa0f3f049f9b4376b2618e06b23-l&ref=rim&n=13&w=640&h=640https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.circle__text');
let advice = document.querySelector('.advice');
let image = document.querySelector('.circle__image');


button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src',randomElement.image);
 
  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

