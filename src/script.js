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
        })(t, "all 0.5s ease-in-out"), e.has(t) || e.set(t, {
            prop: n,
            contents: [],
            timer: null
        });
        const c = e.get(t);
        c.contents.push(r), c.timer || (c.timer = setTimeout(() => {
            if (c.contents.length > 1) return i(t);
            c.timer = null, (t => o(t).then(() => {
                const n = e.get(t);
                return t[n.prop] = n.contents.shift(), s(t)
            }))(t)
        }, 0))
    })
}(window);

let phrases = [
    /*{
            text: 'отправиться на пробежку ',
            image: 'src/images/1-pr.png',
        },*/
    {
        text: 'сделать физ разминку. Жизнь требует движения!',
        image: 'src/images/2-pr.png'
    },
    {
        text: 'посмотреть скидки на авиабилеты и отели',
        image: 'src/images/3-pr.png'
    },
    // {
    //     text: 'читать про зарплаты в Сан-Франциско',
    //     image: 'src/images/4-pr.png'
    // },
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
    // {
    //     text: 'купить сложный пазл и вступить в схватку с ним',
    //     image: 'src/images/13-pr.png'
    // },
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
    // {
    //     text: 'погрузиться в исследования мира вместе с National Geographic',
    //     image: 'src/images/19-pr.png'
    // },
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
    // {
    //     text: 'поставить собственный рекорд по количеству приготовленных блинов за один вечер',
    //     image: 'src/images/27-pr.png'
    // },
    {
        text: 'попробовать себя в медитации или йоге, чтобы найти внутренний покой и гармонию',
        image: 'src/images/28-pr.png'
    },
    {
        text: 'стать блогером! Записать блог о своем увлечении и поделиться им с друзьями в соц сетях',
        image: 'src/images/29-pr.png'
    },
    // {
    //     text: 'открыть старый альбом с фотографиями и погрузиться в пленительный мир прошлого',
    //     image: 'src/images/30-pr.png'
    // },
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
    // {
    //     text: 'сделать много селфи, выбрать лучшие и обновить аватарки в мессенджерах и соцсетях',
    //     image: 'src/images/39-pr.png'
    // },
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
    // {
    //     text: 'провести час смотря на облака и придумывая свои формы - прямо как в детстве!',
    //     image: 'src/images/46-pr.png'
    // },
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
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}
let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
    if (randomElement.text.length > 48) {
        // advice.style.fontSize = '33px';
        advice.classList.add('small-text');
        advice.classList.remove('big-text');
    } else {
        // advice.style.fontSize = '42px';
        advice.classList.add('big-text');
        advice.classList.remove('small-text');
    }
});
for (i = 0; i <= 1; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
}

