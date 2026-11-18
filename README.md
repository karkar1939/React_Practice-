# E|C React Practice — задания 5.1–5.6

Готовый учебный проект **React + Vite (JavaScript)** для Engineering College.

## 1. Установка на Ubuntu

Открой терминал и проверь:

```bash
node -v
npm -v
```

Если Node.js не установлен, установи актуальную LTS-версию с официального сайта https://nodejs.org/ (или через nvm). Для Vite 6 требуется Node.js 18+; рекомендуется актуальная LTS.

## 2. Запуск проекта

Распакуй ZIP, открой папку `react-practice` в WebStorm или VS Code. В терминале **внутри папки проекта** выполни:

```bash
npm install
npm run dev
```

Открой адрес, показанный терминалом (обычно http://localhost:5173/). Остановить сервер: `Ctrl+C`.

## 3. Проверка сборки

```bash
npm run build
npm run preview
```

`npm run build` создаёт папку `dist/`. `npm run preview` запускает локальный просмотр сборки.

## 4. Где находятся задания

| Задание | Реализация |
|---|---|
| 5.3 Hello React | `src/App.jsx`: заголовок, описание, год в footer через JS |
| 5.4 Title, Subtitle, Paragraph, HighlightBox | `src/components/CourseComponents.jsx` |
| 5.4 StudentCard и props, `.map()` | `CourseComponents.jsx`, `src/App.jsx`, `src/data/students.js` |
| 5.5 Counter, `useState` | `src/components/Interactive.jsx` |
| 5.5 CourseInfo (показать/скрыть) | `src/components/Interactive.jsx` |
| 5.5 LivePreview (управляемый input) | `src/components/Interactive.jsx` |
| 5.6 StudentList, StudentFilter, активные | `src/components/StudentList.jsx` |

## 5. Ключевые понятия

- **JSX** — HTML-подобный синтаксис в JavaScript.
- **Component** — функция, возвращающая JSX; её можно использовать многократно.
- **Props** — данные, передаваемые компоненту извне: `<StudentCard name="Aida" />`.
- **State** — данные, изменение которых обновляет интерфейс: `useState(0)`.
- **Event** — обработчик действия пользователя: `onClick={() => ...}`.
- **`.map()`** — создание списка элементов из массива; каждому элементу нужен уникальный `key`.
- **Conditional rendering** — показывать разные элементы в зависимости от условия.

## 6. Структура

```text
react-practice/
├── index.html             # HTML с #root
├── package.json           # зависимости и команды npm
├── vite.config.js         # конфигурация Vite
├── .gitignore             # исключения Git
├── src/
│   ├── main.jsx           # подключает React к #root
│   ├── App.jsx            # основная страница
│   ├── index.css          # оформление и адаптивность
│   ├── data/students.js   # массив студентов
│   └── components/
│       ├── CourseComponents.jsx
│       ├── Interactive.jsx
│       └── StudentList.jsx
└── README.md
```

## 7. GitHub (Ubuntu, SSH)

1. Создай **пустой** репозиторий `ec-react-practice` в GitHub, без README.
2. В терминале из папки проекта выполни:

```bash
git init
git add .
git commit -m "Complete React practice tasks"
git branch -M main
git remote add origin git@github.com:karkar1939/ec-react-practice.git
git push -u origin main
```

Если Git требует имя и почту, сначала настрой `git config --global user.name "Your Name"` и `git config --global user.email "you@example.com"` (подставь свои данные). Для SSH требуется заранее добавленный в GitHub SSH-ключ. Если репозиторий назван иначе, замени имя в URL.

## 8. Vercel: публикация и автоматические обновления

1. Открой https://vercel.com/ и войди через GitHub.
2. Выбери **Add New → Project**.
3. Выбери репозиторий `ec-react-practice`, нажми **Import**.
4. Настройки: **Framework Preset: Vite**, **Build Command: `npm run build`**, **Output Directory: `dist`**. Root Directory — корень репозитория.
5. Нажми **Deploy** и дождись успешной сборки.
6. Скопируй выданную ссылку `https://...vercel.app` и отправь в Moodle.

После изменений в коде:

```bash
git add .
git commit -m "Update React app"
git push
```

Vercel автоматически развернёт новую версию при push в `main`.

## 9. Проверка перед сдачей

- [ ] `npm install` выполняется без ошибок.
- [ ] `npm run dev` показывает страницу.
- [ ] Заголовок Introduction to React и текущий год отображаются.
- [ ] Есть Title, Subtitle, Paragraph, HighlightBox и 3 StudentCard.
- [ ] Кнопки счётчика работают.
- [ ] CourseInfo скрывается и раскрывается.
- [ ] LivePreview показывает вводимый текст.
- [ ] Фильтр Active only скрывает неактивных студентов.
- [ ] `npm run build` завершается успешно.
- [ ] Проект загружен на GitHub и опубликован в Vercel.

**Важно:** `node_modules/` и `dist/` не включены в архив: зависимости устанавливаются командой `npm install`.
