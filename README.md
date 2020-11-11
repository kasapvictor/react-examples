## React Examples

### Create and export component 
`.components/Car`

### Passed props by restructured to component Car
`<Car name='Ford Mustang' year={1984} color='red'>
    <p>Description: Lorem ipsum dolor sit amet.</p>
</Car>`

### Create state and change to new state
Создание state и изменение через функцию

### Passed params to event click of component
Передача параметров через событие onClick

### onChange
Изменение состояния через onChange для input

### Map
Применен метод map() для вывода списка данных

### Тернарный оператор  
Данные выводятся в зависимости от состояния переключателя. Состояние меняется по клику на кнопку

### Динамические списки
Изменение данных путем клонирования state из данных вводимых в input.
Реализован метод удаления элементов из выводимого контента и из state. 

### Добавлены инлайн стили
Стили прописаны напрямую в компоненте

### Добавление файла стилей
Импорт файла стилей в компонент

### Переключение стилей по условию
Через условие if(...) динамически меняется класс у элемента

### Установка пакета Radium
[Raduim GitHub](https://github.com/FormidableLabs/radium) 

`npm install --save radium`

Весь компонент перед экспортом оборачивается в Radium

### Добавление препрцессора SASS,SCSS
`npm install node-sass`

Переименование файов .css в .scss

### CSS Модули
Переименование стилей в `Car.module.scss`

Импорт модуля в компонент `import classes from './Car.module.scss';`

Вывод класса в элементе `className={classes.Car}`

### Функциональный компонент в классвоый компонент