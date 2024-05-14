! function (t) {
    const e = new WeakMap,
        n = (t, e, n) => new Promise(o => {
            const s = () => {
                t.removeEventListener("transitionend", s), o()
            };
            t.style[e] = n, t.addEventListener("transitionend", s)
        }),
        o = t => n(t, "opacity", 0),
        s = t => n(t, "opacity", 1),
        i = t => (t => new Promise(e => setTimeout(e, t)))(1e3).then(() => o(t)).then(() => {
            const n = e.get(t);
            return t[n.prop] = n.contents.shift(), s(t)
        }).then(() => e.get(t).contents.length ? i(t) : (t => {
            e.get(t).timer = null
        })(t));

    t.smoothly = ((t, n, r) => {
        ((t, n) => {
            e.has(t) || (t.style.transition = n)
        })(t, "opacity 0.3s ease-in-out");

        e.has(t) || e.set(t, {
            prop: n,
            contents: [],
            timer: null
        });

        const c = e.get(t);
        c.contents.push(r);

        // Если анимация уже запущена, не запускаем её снова
        if (c.timer) return;

        c.timer = setTimeout(() => {
            if (c.contents.length > 1) return i(t);
            c.timer = null;
            o(t).then(() => {
                const n = e.get(t);
                t[n.prop] = n.contents.shift();
                s(t);
            });
        }, 0);
    })
}(window);

let phrases = [{
    text: 'отправиться на пробежку и насладиться свежим воздухом!',
    image: 'src/images/1-pr.png',
},
{
    text: 'сделать физ разминку. Жизнь требует движения!',
    image: 'src/images/2-pr.png'
},
{
    text: 'посмотреть скидки на авиабилеты и отели',
    image: 'src/images/3-pr.png'
},
{
    text: 'читать про зарплаты в Сан-Франциско',
    image: 'src/images/4-pr.png'
},
{
    text: 'отправиться в виртуальное путешествие по Google Maps',
    image: 'src/images/5-pr.png'
},
{
    text: 'прочитать новости и ужаснуться в комментариях',
    image: 'src/images/6-pr.png'
},
{
    text: 'попасть в поток грустных песен и вспомнить все ошибки молодости',
    image: 'src/images/7-pr.png'
},
{
    text: 'посмотреть трейлер сериала и заодно первый сезон',
    image: 'src/images/8-pr.png'
},
{
    text: 'проверить непрочитанное в Telegram-каналах. Ты точно не пропустили ничего интересно?',
    image: 'src/images/9-pr.png'
},
{
    text: 'прогуляться по парку или лесу, насладиться свежим воздухом и природой',
    image: 'src/images/10-pr.png'
},
{
    text: 'отправится в велопутешествие, где каждый поворот - это новое приключение',
    image: 'src/images/11-pr.png'
},
{
    text: 'погладить котика. Мур-мурр^^',
    image: 'src/images/12-pr.png'
},
{
    text: 'устроить дегустацию чая в уютной домашней обстановке ',
    image: 'src/images/13-pr.png'
},
{
    text: 'купить сложный пазл и вступить в схватку с ним',
    image: 'src/images/14-pr.png'
},
{
    text: 'выучить 10 новых фраз на английском. Do you speak English?',
    image: 'src/images/15-pr.png'
},
{
    text: 'пригласить себя на мини-пикник на балконе. Почему бы и Да?',
    image: 'src/images/16-pr.png'
},
{
    text: 'забыть о заботах и погрузиться в расслабляющую ванну с ароматной пеной',
    image: 'src/images/17-pr.png'
},
{
    text: 'включить музыку и  вспомнить моменты своей жизни, саундтреками к которым они были',
    image: 'src/images/18-pr.png'
},
{
    text: 'погрузиться в исследования мира вместе с National Geographic',
    image: 'src/images/19-pr.png'
},
{
    text: 'отправить сообщение близкому человеку, чтобы поделиться радостью и улыбками',
    image: 'src/images/20-pr.png'
},
{
    text: 'провести минутку веселья, включив музыку и танцуя под неё на месте',
    image: 'src/images/21-pr.png'
},
{
    text: 'Сделать уборку. Например, по японским принципам кайдзен',
    image: 'src/images/22-pr.png'
},
{
    text: 'продумать план идеального отпуска. Мечты сбываются!',
    image: 'src/images/23-pr.png'
},
{
    text: 'создать плейлист для пробежек',
    image: 'src/images/24-pr.png'
},
{
    text: 'почитать стихи и прикоснуться к вечным истинам',
    image: 'src/images/25-pr.png'
},
{
    text: 'получить заряд бодрости и вдохновения, наслаждаясь ароматным кофе',
    image: 'src/images/26-pr.png'
},
{
    text: 'поставить собственный рекорд по количеству приготовленных блинов за один вечер',
    image: 'src/images/27-pr.png'
},
{
    text: 'попробовать себя в медитации или йоге, чтобы найти внутренний покой и гармонию',
    image: 'src/images/28-pr.png'
},
{
    text: 'стать блогером! Записать блог о своем увлечении и поделиться им с друзьями в соц сетях',
    image: 'src/images/29-pr.png'
},
{
    text: 'открыть старый альбом с фотографиями и погрузиться в пленительный мир прошлого',
    image: 'src/images/30-pr.png'
},
{
    text: 'покорить кулинарные вершины и создать что-то волшебное на кухне для себя или близких',
    image: 'src/images/31-pr.png'
},
{
    text: 'оторваться от реальности и погрузиться в захватывающий мир своей любимой книги',
    image: 'src/images/32-pr.png'
},
{
    text: 'попробовать новое хобби: дать волю креативу и рисовать что угодно - от котиков до космических кораблей!',
    image: 'src/images/33-pr.png'
},
{
    text: 'устроить домашний спа-день с масками для лица и ароматерапией',
    image: 'src/images/34-pr.png'
},
{
    text: 'поговорить с растениями и дать им воды - это не только разговор с природой, но и вклад в их здоровье!',
    image: 'src/images/36-pr.png'
},
{
    text: 'организовать тайный показ мод перед зеркалом - только ты и твоя модная фантазия!',
    image: 'src/images/37-pr.png'
},
{
    text: 'отправиться в путешествие по страницам интернета - открыть новые миры без выхода из дома',
    image: 'src/images/38-pr.png'
},
{
    text: 'превратить вечер в мини-праздник и устроить вечеринку с пледами, фильмами и вкусняшками',
    image: 'src/images/39-pr.png'
},
{
    text: 'превратить вечер в мини-праздник и устроить вечеринку с пледами, фильмами и вкусняшками',
    image: 'src/images/39-pr.png'
},
{
    text: 'попробовать себя в роли тестироващика и протестировать новую видео-игру',
    image: 'src/images/40-pr.png'
},
{
    text: 'сесть перед окном с чашечкой кофе и наблюдать за прохожими, листьями и облаками',
    image: 'src/images/41-pr.png'
},
{
    text: 'выбрать интересный онлайн-курс и прослушать его. Знание - сила!',
    image: 'src/images/42-pr.png'
},
{
    text: 'выбрать интересный онлайн-курс и прослушать его. Знание - сила!',
    image: 'src/images/42-pr.png'
},
{
    text: 'сфоткать ненужные вещи и выложить их на Avito. Давно пора!',
    image: 'src/images/43-pr.png'
},
{
    text: 'почувствовать мягкое объятие подушки и отправься в увлекательное путешествие в мир сновидений',
    image: 'src/images/44-pr.png'
},
{
    text: 'придумать планы на ближайший месяц, полгода и год - даже котейка знает, что мечты должны быть крутыми!',
    image: 'src/images/45-pr.png'
},
{
    text: 'построить замок из книг и погрузиться в мир фантазии - теперь ты король книжного царства!',
    image: 'src/images/47-pr.png'
},
{
    text: 'сделать альбом с идеальными планами на будущее - кто сказал, что мечтать плохо?',
    image: 'src/images/48-pr.png'
},
{
    text: 'устроить фотосессию для своего пушистого друга - покажу миру, насколько стильный мой питомец!',
    image: 'src/images/49-pr.png'
},
{
    text: 'провести время, изучая случайные статьи в Википедии - волна знаний ждёт своего исследователя!',
    image: 'src/images/50-pr.png'
},
{
    text: 'погрузиться в атмосферу любимой кофейни',
    image: 'src/images/51-pr.png'
},
{
    text: 'порадовать себя мини-шопингом онлайн',
    image: 'src/images/52-pr.png'
},
{
    text: 'провести вечер в компании своего любимого котика или пушистого друга',
    image: 'src/images/53-pr.png'
},
{
    text: 'поиграть на музыкальном инструменте. А если не умеешь — самое время научиться!',
    image: 'src/images/54-pr.png'
},
{
    text: 'порадовать себя пиццей! Ананасы, салями или оба варианта — выбирай по вкусу и наслаждайся!',
    image: 'src/images/55-pr.png'
},
{
    text: 'сделать вечернюю прогулку по району и открыть для себя новые уютные места или красивые виды в своем городе',
    image: 'src/images/57-pr.png'
},
{
    text: 'пообщаться со старым другом и вспомнить моменты из прошлого',
    image: 'src/images/58-pr.png'
},
{
    text: 'провести вечер с бокалом вина. Открыть новые вкусы и насладиться атмосферой уюта',
    image: 'src/images/61-pr.png'
},
{
    text: 'погрузиться в мир горных пейзажей, изучая туры и маршруты для будущих приключений в горах',
    image: 'src/images/38-pr.png'
},
{
    text: 'продегустировать легкое шампанское и насладиться игривыми нотками фруктов и ягод в каждом глотке',
    image: 'src/images/62-pr.png'
},
{
    text: 'сесть за руль и открыть новые дороги, наслаждаясь свободой движения',
    image: 'src/images/64-pr.png'
},
{
    text: 'отправиться на поиски лучшего мороженого в городе! А затем насладиться вкусом и радостью прохладного лакомства!',
    image: 'src/images/65-pr.png'
},
{
    text: 'погрузиться в мир новых знаний и идей, послушав новый увлекательный подкаст!',
    image: 'src/images/66-pr.png'
},
{
    text: 'насладиться тишиной и красотой природы, погружаясь в мир захватывающей книги',
    image: 'src/images/68-pr.png'
},
{
    text: 'почувствовать себя барменом и создать свой неповторимый коктейль, вдохновляясь летними ароматами и фантазией',
    image: 'src/images/69-pr.png'
},
{
    text: 'сделать вечер ярче и заказать билет в театр, чтобы окунуться в море эмоций!',
    image: 'src/images/70-pr.png'
},
{
    text: 'устроить вечер уюта: взять любимую книгу, завернуться в мягкий плед и погрузиться в мир приключений до самого утра',
    image: 'src/images/71-pr.png'
},
{
    text: 'погрузиться в поиски идеальных подарков для близких людей, чтобы увидеть их улыбки и радость',
    image: 'src/images/72-pr.png'
},
{
    text: 'расширить свой кругозор и почитать что-то по психологии, истории или науке, чтобы узнать что-то новое и удивительное',
    image: 'src/images/73-pr.png'
},
{
    text: 'устроить марафон игр и развлечений для котика, чтобы обеспечить ему день полный веселья и активности',
    image: 'src/images/74-pr.png'
},
{
    text: 'сделать маленький жест внимания – позвонить родителям и поинтересоваться, как прошел их день',
    image: 'src/images/75-pr.png'
},
{
    text: 'провести время в кругу семьи настольными играми и окунуться в мир веселья, соперничества и смеха',
    image: 'src/images/76-pr.png'
},
{
    text: 'позволить себе малую шалость и насладиться вкусом нежного пирожного. Ням-ням',
    image: 'src/images/77-pr.png'
},
{
    text: 'расскрыть магию фокусов, изучая их тайны и техники, чтобы потом удивить друзей',
    image: 'src/images/78-pr.png'
},
{
    text: 'полистать ленту новостей в соц сетях и посмотреть что там нового происходит у друзей',
    image: 'src/images/79-pr.png'
},
{
    text: 'включить свой любимый канал на YouTube! Видео про котиков? Кулинарные рецепты? А может новинки технологий?',
    image: 'src/images/81-pr.png'
},
{
    text: 'погрузитесь в атмосферу свободы и приключений за рулём авто! Включить музыку и отправиться в увлекательное путешествие',
    image: 'src/images/82-pr.png'
},
{
    text: 'погрузиться в захватывающий мир онлайн-игры и отправься в приключения вместе с друзьями или новыми союзниками!',
    image: 'src/images/83-pr.png'
},
{
    text: 'поговорить с друзьями в соцсетях – разговоры, которые дарят улыбки!',
    image: 'src/images/84-pr.png'
},
{
    text: 'погрузиться в атмосферу любимой музыки и насладиться каждой нотой!',
    image: 'src/images/85-pr.png'
},
{
    text: 'организовать порядок вокруг и создать пространство для творчества и продуктивности!',
    image: 'src/images/86-pr.png'
},
{
    text: 'запланировать отдых на ближайший уикенд: составь маршрут и продумать все детали для незабываемых приключений!',
    image: 'src/images/87-pr.png'
},
{
    text: 'создать атмосферу уюта: завернуться в плед, наслаждаясь теплом и спокойствием',
    image: 'src/images/88-pr.png'
},
{
    text: 'насладиться атмосферой уюта, окунувшись в мир книжных приключений',
    image: 'src/images/90pr.png'
},
{
    text: 'устроить домашнюю тренировку, чтобы зарядиться энергией на весь день!',
    image: 'src/images/91-pr.png'
},
{
    text: 'попробовать новый вид спорта! Может быть, это будет йога на свежем воздухе или зумба в домашнем интерьере?',
    image: 'src/images/96-pr.png'
},
{
    text: 'провести день на открытом воздухе, организовав пикник с семьей или друзьями',
    image: 'src/images/95-pr.png'
},
{
    text: 'Проведите вечер в уютной атмосфере, слушая любимую музыку и разговаривая с близкими',
    image: 'src/images/100-pr.png'
},
{
    text: 'устроить день космического исследователя, изучая факты о космосе - отправиться в захватывающее путешествие сквозь бесконечные просторы Вселенной!',
    image: 'src/images/98-pr.png'
},
{
    text: 'провести день в роли сомелье, проводя дегустацию различных видов вин или сыров и изучая их особенности и вкусовые качества ',
    image: 'src/images/61-pr.png'
},
{
    text: 'устроить мини-путешествие по виртуальным музеям и галереям, погрузившись в мир истории и красоты!',
    image: 'src/images/92-pr.png'
},
{
    text: 'провести вечер в режиме саморазвития, читая книги, слушая аудиокниги или смотря образовательные видеоуроки',
    image: 'src/images/101-pr.png'
}
];


function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}
let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

let lastClickTime = 0;
const minClickInterval = 1000;

button.addEventListener('click', function () {
    const currentTime = new Date().getTime();
    // Проверяем, прошло ли достаточно времени с момента последнего клика
    if (currentTime - lastClickTime < minClickInterval) {
        event.preventDefault();
        return false;
    }
    lastClickTime = currentTime;


    let randomElement = getRandomElement(phrases);

    if (randomElement.text.length > 50) {
        advice.classList.add('small-text');
        advice.classList.remove('big-text');
        advice.classList.remove('mini-text');
    } else if (randomElement.text.length > 66) {
        advice.classList.add('mini-text');
        advice.classList.remove('small-text');
        advice.classList.remove('big-text');
    } else {
        advice.classList.add('big-text');
        advice.classList.remove('small-text');
        advice.classList.remove('mini-text');
    }

    smoothly(phrase, 'textContent', randomElement.text);
    // smoothly(image, 'src', randomElement.image);

    // Создаем новый объект Image
    let newImage = new Image();
    // Устанавливаем путь к изображению
    newImage.src = randomElement.image;
    // Добавляем обработчик загрузки изображения
    newImage.onload = function () {
        // Применяем анимацию smoothly к смене изображения
        smoothly(image, 'src', newImage.src);
    };
});

// for (i = 0; i <= 1; i = i + 1) {
//     smoothly(phrase, 'textContent', phrases[i].text);
//     smoothly(image, 'src', phrases[i].image);
// }
