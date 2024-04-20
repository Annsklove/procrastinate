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
        text: 'проверить непрочитанное в Telegram-каналах',
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
        text: 'погладить котика',
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
        text: 'выучить 10 новых английских фраз',
        image: 'src/images/15-pr.png'
    },
    {
        text: 'пригласить себя на мини-пикник на балконе',
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
    // {
    //     text: 'навести идеальный порядок на столе',
    //     image: 'src/images/2-pr.png'
    // },
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
button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
    if (randomElement.text.length > 34) {
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '42px';
    }
});
for (i = 0; i <= 1; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
}

