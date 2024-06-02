# eatly

Учебный проект в рамках [Открытой школы для разработчиков JS+React холдинга Т1](https://t1.ru/internship/item/otkrytaya-shkola-dlya-razrabotchikov-js-react/).

## Деплой: https://eatly-webapp.netlify.app/

## Стек: **React / React Router Dom / Typescript/ Redux, Redux Toolkit / CSS-modules / Jest**

## Структура

Используется подход **Atomic Design**.

## Что сделано:

- адптивная верстка,
- получение и обработка данных с API https://dummyjson.com
- роутинг (React Router): якоря на главной странице, ссылка на Блог, ссылка на Лого;
- загрузка блюд и комментариев на первой странице (HomePage);
- скрывание и раскрывание пунктов в FAQ;
- получение постов и пагинация,
- получение отдельного поста и комментариев к нему,
- плавный скролл,
- умная обрезка текста в карточке,
- слайдер (embla),
- добавил тесты

- **оптимизация картинок**:

  - добавил webp варианты для трех главных картинок
  - добавил src-set к hero image, download app
  - добавил loading="lazy" decoding="async" к download app, purchases

- **доступность**: добавил теги <main>, <header>, <footer>, <nav>, <section>

## Как развернуть локально

```sh
git clone...

cd eatly

npm install

npm run dev
```
