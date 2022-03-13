# vue-upswot-todolist-test

- [DEMO LINK](https://leonbohdan.github.io/vue-upswot-todolist-test/)

- [CODE](https://github.com/leonbohdan/vue-upswot-todolist-test)

## Реализовано небольшое SPA приложение на Vue.js 

- [Макет](https://www.figma.com/file/xr2XkaVlB0u98hQaRG5VmG/front-test-task?node-id=0%3A1)
## Приложение состоит из двух страниц:
    • /login − страница ввода логина и пароля;
    • /todo − страница с чек-листом.

На главной странице − форма с авторизацией пользователя. Пользователь
пытается зайти на страницу "Список дел". Если пользователь не авторизирован, то
перенаправить на страницу /login.

    Форма входа (/login) принимает "фейковые" данные:
    • username: Admin
    • password: 12345

Если введенные данные корректны, то перенаправить на страницу /todo.
Информацию об авторизации пользователя храниться в localStorage с
помощью параметра true/false.

Страница c чек-листом содержит имя пользователя и непосредственно
список задач.

## Действия с пунктами Todo:
    • добавить;
    • удалить;
    • отредактировать текст.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
