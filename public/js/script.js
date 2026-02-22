/**
 * Alpine.js + Swiper.js: Users Reviews section
 * Requires: Swiper (loaded before this), Alpine.js (loaded after this)
 */
document.addEventListener("alpine:init", () => {
  Alpine.data("reviewsSwiper", () => ({
    swiper: null,
    isBeginning: true,
    isEnd: false,
    reviews: [
      {
        title: "Подключал газ",
        text: "Долго искал организацию которая сможет выполнить весь комплекс услуг по подключению газа. Платформа помогла найти компетентных специалистов. Рекомендовал друзьям - остались довольны подбором нужной организации",
        author: "Александр П.",
        subtitle: "Строю дом",
      },
      {
        title: "Ищу новых клиентов",
        text: "Интересная площадка как для профессионалов, так и для тех кто ищет надежную компанию для строительства. После регистрации на платформе работы прибавилось. Также нашли компетентных подрядчиков",
        author: "Евгений И.",
        subtitle: "Директор компании",
      },
      {
        title: "Нашел подрядчика",
        text: "С помощью платформы быстро нашел квалифицированного подрядчика для выполнения работ по подключению инженерных сетей. В целом интересная, удобная и полезная платформа, но хотелось бы большей территории охвата",
        author: "Сергей Г.",
        subtitle: "Строительная компания",
      },
      {
        title: "Подключение электричества",
        text: "Оформил заявку на подключение электричества через платформу. Менеджер связался в тот же день, все документы подготовили быстро. Очень удобный сервис для частных застройщиков.",
        author: "Дмитрий К.",
        subtitle: "Владелец участка",
      },
      {
        title: "Ремонт сетей",
        text: "Искали подрядчика на ремонт инженерных сетей в коттеджном поселке. Платформа позволила сравнить несколько компаний и выбрать оптимальный вариант по срокам и цене.",
        author: "Ольга М.",
        subtitle: "Управляющая компания",
      },
      {
        title: "Проектирование и монтаж",
        text: "Заказывали полный цикл: проект и монтаж водоснабжения и канализации. Нашли исполнителя с хорошими отзывами. Работы выполнены в срок, претензий нет.",
        author: "Андрей В.",
        subtitle: "Строю дом",
      },
      {
        title: "Консультация по подключениям",
        text: "Получил подробную консультацию по порядку подключения к сетям. Понятно объяснили, какие документы нужны и в какой последовательности обращаться. Рекомендую новичкам.",
        author: "Михаил С.",
        subtitle: "Частный заказчик",
      },
    ],
    initSwiper() {
      const el = this.$el.querySelector(".reviews-swiper");
      if (!el) return;
      this.swiper = new Swiper(el, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 24,
        navigation: {
          nextEl: this.$el.querySelector(".reviews-swiper-next"),
          prevEl: this.$el.querySelector(".reviews-swiper-prev"),
        },
        breakpoints: {
          640: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 1 },
          1024: { slidesPerView: 3, slidesPerGroup: 1 },
        },
        loop: false,
        on: {
          init: (s) => {
            this.isBeginning = s.isBeginning;
            this.isEnd = s.isEnd;
          },
          slideChange: (s) => {
            this.isBeginning = s.isBeginning;
            this.isEnd = s.isEnd;
          },
        },
      });
    },
  }));
});
