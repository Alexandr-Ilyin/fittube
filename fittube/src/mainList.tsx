let result:VideoMenuItems[] = [];
let m = {
  add: (item) => {
    result.push(item);
  }
};
let arrayOf = (...arr) => {
  return arr;
};
export class VideoMenuItems {
  title:string;
  videos:string[];

  constructor(title: string, videos: string[]) {
    this.title = title;
    this.videos = videos;
  }
}
let MenuItem = (title, arr) => {
  return new VideoMenuItems(title, arr);
};

m.add(
  MenuItem(
    "Глаза",
    arrayOf("Гимнастика для глаз. Соматические упражнения.")
  )
);

m.add(
  MenuItem(
    "Лицо и челюсти",
    arrayOf(
      "Мимические мышцы и ВНЧС",
      "Височно нижнечелюстной сустав. Упражнения для челюсти")
  )
);


m.add(
  MenuItem(
    "Шея",
    arrayOf(
      "Шейный остеохондроз",
      "Шейный остеохондроз. Лечим движением.")
  )
);


m.add(
  MenuItem(
    "Руки",
    arrayOf(
      "Боль в плечах и руках. Немеют руки и пальцы.",
      "Качаем руки")
  )
);


m.add(
  MenuItem(
    "Осанка",
    arrayOf(
      "ВДОВИЙ ГОРБ. Как убрать холку.",
      "Правильная осанка. Упражнения.")
  )
);


m.add(
  MenuItem(
    "Грудной отдел",
    arrayOf(
      "Грудной остеохондроз. Лечим движением.")
  )
);

m.add(
  MenuItem(
    "Поясница",
    arrayOf(
      "Поясничный остеохондроз. Лечим движением.",
      "Боль в пояснице"
    )
  )
);

m.add(
  MenuItem(
    "Живот",
    arrayOf(
      "Плоский и здоровый живот."
    )
  )
);

m.add(
  MenuItem(
    "Боковая группа мышц",
    arrayOf(
      "Боковая группа мышц"
    )
  )
);

m.add(
  MenuItem(
    "Тазовое дно",
    arrayOf(
      "Опущение матки. Упражнения для тазового дна."
    )
  )
);
m.add(
  MenuItem(
    "Тазобедренные суставы.",
    arrayOf(
      "Тазобедренные суставы."
    )
  )
);

m.add(
  MenuItem(
    "Ноги",
    arrayOf(
      "ЯГОДИЦЫ В ДОМАШНИХ УСЛОВИЯХ",
      "Упражнения для похудения ног."
    )
  )
);

m.add(
  MenuItem(
    "Колени",
    arrayOf(
      "Боль в колене. Упражнения для коленных суставов."
    )
  )
);

m.add(
  MenuItem(
    "Стопы",
    arrayOf(
      "Плоскостопие"
    )
  )
);
m.add(
  MenuItem(
    "Варикоз",
    arrayOf(
      "Варикоз"
    )
  )
);


m.add(
  MenuItem(
    "Примитивные рефлексы",
    arrayOf(
      "Примитивные рефлексы"
    )
  )
);
m.add(
  MenuItem(
    "Дыхание",
    arrayOf(
      "Как правильно дышать. Восстанавливаем дыхание."
    )
  )
);


m.add(
  MenuItem(
    "Сила и гибкость Руки",
    arrayOf(
      "Сила и гибкость Руки"
    )
  )
);


m.add(
  MenuItem(
    "Сила и гибкость Ноги",
    arrayOf(
      "Сила и гибкость Ноги"
    )
  )
);

m.add(
  MenuItem(
    "Сила и гибкость Пресс Спина Бока",
    arrayOf(
      "Сила и гибкость Пресс Спина Бока"
    )
  )
);
m.add(
  MenuItem(
    "Метод Фельденкраза",
    arrayOf(
      "Метод Фельденкрайза",
      "М.Фельденкраз \"Осознование через движение\" Уроки"
    )
  )
);

m.add(
  MenuItem(
    "Комплекс Крокодил",
    arrayOf(
      "Комплексы Крокодил"
    )
  )
);

m.add(
  MenuItem(
    "Зарядка.",
    arrayOf(
      "Зарядка для ленивых.",
      "МАРАФОН. Здоровое тело за 8 уроков."
    )
  )
);

m.add(
  MenuItem(
    "Стабилизация тела",
    arrayOf(
      "Стабилизация тела. Глубинная цепь."
    )
  )
);
m.add(
  MenuItem(
    "Йога для начинающих",
    arrayOf(
      "Йога для начинающих"
    )
  )
);

m.add(
  MenuItem(
    "Соматика Томаса Ханны",
    arrayOf(
      "Соматика. Упражнения для спины, живота и талии.",
      "Соматика Томаса Ханны"
    )
  )
);
export const VideoList = result;
