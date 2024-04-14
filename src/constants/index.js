import aboutUs1 from "../assets/aboutUs1.png";
import aboutUs2 from "../assets/aboutUs2.png";
import handballFederation from "../assets/bulgarian_handball_federation.png";
import ministry from "../assets/Ministry.png";
import sofiaMunicipality from "../assets/СТОЛИЧНА ОБЩИНА.png";
import municipality from "../assets/municipality.jpeg";
import logo from "../assets/logo.png"

const bulgarian = false;

export const teamLogo = logo;

export const navLinks = [
    {
        id: "welcome",
        title: bulgarian ? "Начало" : "Welcome",
    },
    {
        id: "about",
        title: bulgarian ? "За Нас" : "About",
    },
    {
        id: "coaches",
        title: bulgarian ? "Треньори" : "Coaches",
    },
    {
        id: "services",
        title: bulgarian ? "Услуги" : "Services",
    },
    {
        id: "partners",
        title: bulgarian ? "Партньори" : "Partners",
    },
    {
        id: "achievements",
        title: bulgarian ? "Постижения" : "Achievements",
    },
    {
        id: "gallery",
        title: bulgarian ? "Галерия" : "Gallery",
    },
    // {
    //     id: "legal",
    //     title: bulgarian ? "Legal" : "Legal",
    // },
    {
        id: "goals",
        title: bulgarian ? "Цели" : "Goals",
    },
    {
        id: "contacts",
        title: bulgarian ? "Контакти" : "Contacts",
    },
]

export const aboutUs = [
    {
        title: bulgarian ? "КОИ СМЕ НИЕ" : "Who We Are",
        text: bulgarian ? `ХК “Спортист Кремиковци-2018“ е основан през 2018 година.
        Първото теоритично и практическо занимание бе проведено
        на 02.10.2018г. в спортната зала в квартал Челопечене. На
        него присъстваха повече от 40 деца момичета и момчета. С
        това започна съзнателен и целенасочен тренировъчен
        процес. Бяха сформирани два отбора момчета и момичета до
        11 години`
        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: aboutUs1 
    },
    {
        title: bulgarian ? "НАШАТА МИСИЯ" : "Our Mission",
        text: bulgarian ? `Мисията на клуба е да привлече колкото се може повече
        деца към активен начин на живот, да изберат спорта
        пред опасните изкушения на съвремието.`
        : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        image: aboutUs2
    }
]

export const coaches = [
    {
        name: bulgarian ? "Галин Лазаров" : "Galin Lazarov",
        title: bulgarian ? "председател" : "Chairman",
        img: "https://randomuser.me/api/portraits/lego/6.jpg"
    },
    {
        name: bulgarian ? "Димитър Джепков" : "Dimitar Dzhepkov",
        title: bulgarian ? "старши треньор" : "Head Coach",
        img: "https://randomuser.me/api/portraits/lego/1.jpg"
    },
    {
        name: bulgarian ? "Румяна Георгиева" : "Rumyana Georgieva",
        title: bulgarian ? "консултант" : "Consultant",
        img: "https://randomuser.me/api/portraits/lego/2.jpg"
    },
    {
        name: bulgarian ? "Емилия Самуилова" : "Emiliya Samuilova",
        title: bulgarian ? "младши треньор" : "Junior Coach",
        img: "https://randomuser.me/api/portraits/lego/4.jpg"
    }
]

export const services = [
    {
        title: bulgarian ? "НАЧАЛНО ОБУЧЕНИЕ ПО ХАНДБАЛ" : "INITIAL TRAINING IN HANDBALL",
        text: bulgarian ? "Организирани групи - момичета и момчета за начално обучение в спорта хандбал." : "Organized groups - girls and boys for elementary training in the sport of handball."
    },
    {
        title: bulgarian ? "ДЕТСКО-ЮНОШЕСКО НАПРАВЛЕНИЕ" : "CHILDREN'S AND ADOLESCENT DIRECTION",
        text: bulgarian ? "КАРТОТЕКИРАНИ СЪСТЕЗАТЕЛИ" : "CARDED COMPETITORS"
    },
    {
        title: bulgarian ? "БЕЗОПАСНОСТ" : "SAFETY",
        text: bulgarian ? "Осигуряване на безопасни условия за практикуване на спорта." : "Ensuring safe conditions for practicing the sport."
    }
] 

export const partners = [
    {
        name: bulgarian ? "" : "",
        img: handballFederation
    },
    {
        name: bulgarian ? "" : "",
        img: ministry
    },
    {
        name: bulgarian ? "" : "",
        img: sofiaMunicipality
    },
    // {
    //     name: bulgarian ? "" : "",
    //     img: municipality
    // }
]

export const partnersNoImage = [
    {
        name: "159 ОУ\"Васил Левски\""
    },
    {
        name: "162 ОбУ \"Отец Паисий\""
    },
    {
        name: "115 ОУ\"Св. Св. Кирил и Методий\""
    },
    {
        name: "85 СУ \"Отец Паисий\""
    },
    {
        name: "117 СУ\"Св. Св. Кирил и Методий\""
    },
    {
        name: "ОБЩИНА КРЕМИКОВЦИ"
    }
]

export const achievementsText = [
    {
        text: "ЗА КРАТКАТА СИ ИСТОРИЯ НА СЪЩЕСТВУВАНЕ КЛУБЪТ УСПЯ ДА ПОСТИГНЕ ЗАВИДНИ УСПЕХИ С КОИТО МАЛЦИНА ДРУГИ СЕ ГОРДЕЯТ."
    }
]

export const achievementsList = [
    {
        title: bulgarian ? "КЛАСИРАНЕ НА ЗОНАЛЕН ФИНАЛ В ЗХС ВИТОША" : "CLASSIFICATION OF THE ZONAL FINAL IN VITOSHA ZHS",
        dates: [
            {
                date: bulgarian ? "2018/2019Г." : "2018/2019",
                achievements: [
                    {
                        achievement: bulgarian ? "МЪЖЕ(М)-3ТО МЯСТО" : "МЪЖЕ(М)-3ТО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "ЖЕНИ(Ж)-3ТО МЯСТО" : "ЖЕНИ(Ж)-3ТО МЯСТО"
                    },
                ]
            },
            {
                date: bulgarian ? "2019/2020Г." : "2019/2020",
                achievements: [
                    {
                        achievement: bulgarian ? "М12-1ВО МЯСТО" : "М12-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж11-1ВО МЯСТО" : "Ж11-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж12-2РО МЯСТО" : "Ж12-2РО МЯСТО"
                    },
                ]
            },
            {
                date: bulgarian ? "2020/2021Г." : "2020/2021",
                achievements: [
                    {
                        achievement: bulgarian ? "Ж12-1ВО МЯСТО" : "Ж12-1ВО МЯСТО"
                    }
                ]
            },
            {
                date: bulgarian ? "2021/2022Г." : "2021/2022",
                achievements: [
                    {
                        achievement: bulgarian ? "М11-1ВО МЯСТО" : "М11-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "М14-1ВО МЯСТО" : "М14-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж12-1ВО МЯСТО" : "Ж12-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж14-2РО МЯСТО" : "Ж14-2РО МЯСТО"
                    },
                ]
            },
        ]
    },
    {
        title: bulgarian ? "КЛАСИРАНЕ НА ДЪРЖАВЕН ФИНАЛ" : "STATE FINAL CLASSIFICATION",
        dates: [
            {
                date: bulgarian ? "2018/2019Г." : "",
                achievements: [
                    {
                        achievement: bulgarian ? "М11-6ТО МЯСТО" : "М11-6ТО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж11-5ТО МЯСТО" : "Ж11-5ТО МЯСТО"
                    },
                ]
            },
            {
                date: bulgarian ? "2020/2021Г." : "",
                achievements: [
                    {
                        achievement: bulgarian ? "Ж12-1ВО МЯСТО" : "Ж12-1ВО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "ГАБРИЕЛА ГЕОРГИЕВА – НАЙ-ДОБЪР ВРАТАР" : "ГАБРИЕЛА ГЕОРГИЕВА – НАЙ-ДОБЪР ВРАТАР"
                    },
                    {
                        achievement: bulgarian ? "НИКОЛ ДИМИТРОВА- НАЙ-ДОБЪР ЗАЩИТНИК" : "НИКОЛ ДИМИТРОВА- НАЙ-ДОБЪР ЗАЩИТНИК"
                    },
                ]
            },
            {
                date: bulgarian ? "2021/2022Г." : "",
                achievements: [
                    {
                        achievement: bulgarian ? "М11-3ТО МЯСТО" : "М11-3ТО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "АЛЕКС ДАНАИЛОВ- НАЙ-ДОБЪР ВРАТАР" : "АЛЕКС ДАНАИЛОВ- НАЙ-ДОБЪР ВРАТАР"
                    },
                    {
                        achievement: bulgarian ? "М14-6ТО МЯСТО" : "М14-6ТО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "Ж12-2РО МЯСТО" : "Ж12-2РО МЯСТО"
                    },
                    {
                        achievement: bulgarian ? "ЕДЖЕ ЮМЕР- ГОЛМАЙСТОР НА ПЪРВЕНСТВОТО" : "ЕДЖЕ ЮМЕР- ГОЛМАЙСТОР НА ПЪРВЕНСТВОТО"
                    },
                    {
                        achievement: bulgarian ? "ЕДЖЕ ЮМЕР- НАЙ-ПОЛЕЗЕН СЪСТЕЗАТЕЛ" : "ЕДЖЕ ЮМЕР- НАЙ-ПОЛЕЗЕН СЪСТЕЗАТЕЛ"
                    },
                    {
                        achievement: bulgarian ? "Ж14-3ТО МЯСТО" : "Ж14-3ТО МЯСТО"
                    },
                ]
            },
        ]
    },
]

/* PLACEHOLDER */
export const gallaryPhotos = [
    {
        img: "https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg"
    },
    {
        img: "https://hips.hearstapps.com/hmg-prod/images/month-pure-breed-beagle-puppy-on-gray-screen-royalty-free-image-865226542-1566913909.jpg?resize=2048:*"
    },
    {
        img: "https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2021-09/Bichon%20Frise%20puppy%20running%20outside.jpg?itok=4FLM7MCl"
    },
    {
        img: "https://www.thesprucepets.com/thmb/YBO6dLNaRUrr34ra0W4KGim00q4=/6411x0/filters:no_upscale():strip_icc()/puppies-three-to-six-months-4570930-hero-bf2f59d75dcb4294991d6bd8cd51ec7c.jpg"
    },
    {
        img: "https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg"
    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/1583002816518-ZH2PH7Y8NY21KG3YYKNL/Screen+Shot+2020-02-26+at+2.33.24+PM.png"
    },
    {
        img: "https://hips.hearstapps.com/hmg-prod/images/popular-puppy-questions-1639736471.jpg?crop=0.670xw:1.00xh;0.282xw,0&resize=640:*"
    },
]

export const goals = [
    // {
    //     text: bulgarian ? "ОСНОВНИТЕ ЦЕЛИ ПРЕД НАС СА РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ, УВЕЛИЧАВАНЕ БРОЯ НА СПОРТИСТИТЕ, СЪЗДАВАНЕ НА НАЦИОНАЛНИ СЪСТЕЗАТЕЛИ И В ДВАТА ПОЛА. ПОВИШАВАНЕТО НА НИВОТО НА ВСИЧКИ СПОРТИСТИ В КЛУБА, КОЕТО ДА ДОВЕДЕ ДО УЧАСТИЕ В „А“ РЕПУБЛИКАНСКА ХАНДБАЛНА ГРУПА ЗА ЖЕНИ И МЪЖЕ. СЪЩО ТАКА С ОТБОРИТЕ ДА ВЗЕМЕМ УЧАСТИЕ В МЕЖДУНАРОДНИ ТУРНИРИ."
    //     : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // }
    {
        text: bulgarian ? "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
    {
        text: bulgarian ? "УВЕЛИЧАВАНЕ БРОЯ НА СПОРТИСТИТЕ." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
    {
        text: bulgarian ? "СЪЗДАВАНЕ НА НАЦИОНАЛНИ СЪСТЕЗАТЕЛИ И В ДВАТА ПОЛА." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
    {
        text: bulgarian ? "ПОВИШАВАНЕТО НА НИВОТО НА ВСИЧКИ СПОРТИСТИ В КЛУБА, КОЕТО ДА ДОВЕДЕ ДО УЧАСТИЕ В „А“ РЕПУБЛИКАНСКА ХАНДБАЛНА ГРУПА ЗА ЖЕНИ И МЪЖЕ." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    },
    {
        text: bulgarian ? "ДА ВЗЕМЕМ УЧАСТИЕ В МЕЖДУНАРОДНИ ТУРНИРИ С ОТБОРИТЕ." : "РАЗВИВАНЕ НА МЛАДИ ТАЛАНТИ."
    }
]

export const contact = [
    {
        name: bulgarian ? "ДИМИТЪР ДЖЕПКОВ" : "Dimitar Dzhepkov",
        title: bulgarian ? "СТАРШИ ТРЕНЬОР" : "Head Coach",
        email: "",
        phone: "0898575754"
    },
    {
        name: bulgarian ? "ГАЛИН ЛАЗАРОВ" : "Galin Lazarov",
        title: bulgarian ? "ПРЕДСЕДАТЕЛ" : "Chairman",
        email: "galinlazarov1961@abv.bg",
        phone: "0879486960"
    }
]