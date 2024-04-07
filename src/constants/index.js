import aboutUs1 from "../assets/aboutUs1.png";
import aboutUs2 from "../assets/aboutUs2.png";
import handballFederation from "../assets/bulgarian_handball_federation.png";
import ministry from "../assets/Ministry.png";
import sofiaMunicipality from "../assets/СТОЛИЧНА ОБЩИНА.png";
import municipality from "../assets/municipality.jpeg";

const bulgarian = false;

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
        img: "https://randomuser.me/api/portraits/lego/6.jpg"
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
    {
        name: bulgarian ? "" : "",
        img: municipality
    }
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
]