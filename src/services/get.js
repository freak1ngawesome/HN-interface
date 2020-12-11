import { baseURL } from './url'
// добавляем к базовому URL запрос на 500 новых записей, ограничивая прием на 100 записей
const newsURL = baseURL + 'newstories.json?print=pretty&orderBy="$key"&limitToFirst=100';
const preloader = document.getElementById('preloader');//находим прелоадер
// запрос 100 последних новостей
export async function getNewsIds(){
  const response = await fetch(newsURL);
  // если статус HTTP-запроса в диапазлне 200-299
  if (response.ok){
    const result = await response.json();
    return result; //возвращаем результат в виде промиса
  } else {
    // иначе, если онибка запроса, то добавляем сообщение об ошибке
    const warning = document.createElement('div');
    warning.textContent = 'Ошибка загрузки';
    preloader.appendChild(warning);
  };
};
// запрос новости(комментария) по id
export async function getNewsById(id){
  const idURL = baseURL + `item/${id}.json?print=pretty`;
  const response = await fetch(idURL);
  // если статус HTTP-запроса в диапазлне 200-299
  if (response.ok){
    const result = await response.json();
    return result;
  } else {
    // иначе, если онибка запроса, то добавляем сообщение об ошибке
    const warning = document.createElement('div');
    warning.textContent = 'Ошибка загрузки';
    preloader.appendChild(warning);
  };
}

