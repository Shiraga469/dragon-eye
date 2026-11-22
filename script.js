// 1. Логика переключения темы
const themeBtn = document.getElementById('theme-btn');
const themeText = document.getElementById('theme-text');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Проверяем, сохранена ли тема в памяти браузера
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    themeText.innerText = 'Светлая';
    themeIcon.innerText = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        themeText.innerText = 'Светлая';
        themeIcon.innerText = '☀️';
        localStorage.setItem('theme', 'light'); // Запоминаем выбор
    } else {
        themeText.innerText = 'Темная';
        themeIcon.innerText = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

// 2. Логика переключения языка (RU / EN)
const langBtn = document.getElementById('lang-btn');
let currentLang = 'ru';

langBtn.addEventListener('click', () => {
    if (currentLang === 'ru') {
        // Переключаем на английский
        langBtn.innerText = 'EN';
        currentLang = 'en';
        
        // Меняем заголовок сайта
        document.getElementById('site-title').innerText = 'Dragon`s Eye'; // <--- НОВАЯ СТРОКА
        
        // Меняем заголовок "Главы"
        document.getElementById('chapters-title').innerText = 'Chapters';
        
        // Меняем названия глав (ищем все элементы с data-en)
        const chapters = document.querySelectorAll('.chapter-number');
        chapters.forEach(chapter => {
            chapter.innerText = chapter.getAttribute('data-en');
        });
        
    } else {
        // Возвращаем русский
        langBtn.innerText = 'RU';
        currentLang = 'ru';
        
        // Возвращаем название на русском
        document.getElementById('site-title').innerText = 'Глаз дракона'; // <--- НОВАЯ СТРОКА
        
        // Возвращаем заголовок "Главы"
        document.getElementById('chapters-title').innerText = 'Главы';
        
        // Возвращаем названия глав
        const chapters = document.querySelectorAll('.chapter-number');
        chapters.forEach(chapter => {
            chapter.innerText = chapter.getAttribute('data-ru');
        });
    }
});