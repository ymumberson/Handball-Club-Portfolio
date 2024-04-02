import aboutUs1 from "../assets/aboutUs1.png";
import aboutUs2 from "../assets/aboutUs2.png";

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
