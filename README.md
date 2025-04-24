# aqa_playwright_my_hw

## ✅ Task 1 HW-18: REGISTER — demo-login-form

### 📄 Description

Разработайте смоук тест-сьют с тестами на REGISTER на странице:  
https://anatoly-karpovich.github.io/demo-login-form/

#### Requirements:
- **Username**
  - Required field
  - From 3 to 40 characters (inclusive)
  - Leading and trailing spaces are not allowed
  - Username consisting only of spaces is not allowed
- **Password**
  - Required field
  - From 8 to 20 characters (inclusive)
  - Must include at least one **uppercase** and one **lowercase** letter
  - Password consisting only of spaces is not allowed

### 📁 File structure

- `register.smoke.spec.ts` — smoke tests
- `register.validation.spec.ts` — validation & negative tests

### 🐞 Known Issues

❗️ **Password**: validation for uppercase letters is missing  
- Password like `"lowercase123"` is accepted  
- According to requirements, at least one uppercase letter is required  
- **Cause**: check in `script.js` is commented out:
  ```js
  // else if(value == value.toLowerCase()) {
  //     return "Password should contain at least one character in upper case"
  // }
- Password without uppercase test is intentionally left and marked as [KNOWN ISSUE]

## ✅ Task_2 HW-18: REGISTER — demo-registration-form

### 📄 Description
Создайте ОДИН смоук тест со следующими шагами:

1. Переход на страницу https://anatoly-karpovich.github.io/demo-registration-form/
2. Заполните форму регистрации
3. Проверьте, что пользователь успешно зарегистрирован

### 📁 File structure
- `smoke.spec.ts` — smoke test
  
## ✅ Task 1 HW-19: Dynamic Controls — herokuapp

### 📄 Description

Разработать тест со следующими шагами:
  - открыть https://the-internet.herokuapp.com/
  - перейти на страницу Dynamic Controls
  - Дождаться появления кнопки Remove
  - Завалидировать текста в заголовке страницы
  - Чекнуть чекбокс
  - Кликнуть по кнопке Remove
  - Дождаться исчезновения чекбокса
  - Проверить наличие кнопки Add
  - Завалидировать текст It's gone!
  - Кликнуть на кнопку Add
  - Дождаться появления чекбокса
  - Завалидировать текст It's back!

### 📁 File structure
- `dynamic-controls.spec.ts`

## ✅ Task 2 HW-19: Login and UI verification — aqa-course-project

### 📄 Description

Разработать тест со следующими шагами:
 - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
 - Войти в приложения используя учетные данные test@gmail.com / 12345678 при этом:
 - дождаться исчезновения спиннеров
 - проверить действительно ли пользователь с логином Anatoly вошел в систему
 - Проверить скриншотом боковое навигационное меню с выбранной страницей Home

### 📁 File structure
- `login.spec.ts`
- `login.spec.ts-snapshots`


## ✅ Task 1 HW-20: REGISTER — demo-login-form

### 📄 Description

Создать тест сьют используя DDT подход с негативными тест-кейсами по регистрации на сайте
https://anatoly-karpovich.github.io/demo-login-form/

Требования:
Страница регистрации:
  Username: обязательное, от 3 до 40 символов включительно, запрещены префиксные/постфиксные пробелы, как и имя состоящее из одних пробелов
  Password: обязательное, от 8 до 20 символов включительно, необходима хотя бы одна буква в верхнем и нижнем регистрах, пароль из одних пробелов запрещен

Страница логина:
  Username: обязательное
  Password: обязательное
  
### 📁 File structure


## ✅ Task 2 HW-20: demo-shopping-cart/

### 📄 Description

Разработать тест со следующими шагами:
https://anatoly-karpovich.github.io/demo-shopping-cart/
  - добавить продукты 2,4,6,8,10
  - завалидировать бейдж с количеством
  - открыть чекаут
  - завалидировать сумму и продукты
  - ввести все найденные вами промокоды (вспоминаем первую лекцию)
  - завалидировать конечную сумму
  - зачекаутиться
  - завалидировать сумму

### 📁 File structure


## ✅ Task 1 HW-21: Page Object for Sign In page

### 📄 Description

Написать Page Object класс для страницы Sign In:
  - email input
  - password input
  - login button
  - fillCredentials method
  - click on login button method

### 📁 File structure



## ✅ Task 2 HW-21: e2e tests aqa-course-project

### 📄 Description

Разработать е2е теста со следующими шагами:
 - Открыть url https://anatoly-karpovich.github.io/aqa-course-project/#
 - Войти в приложения используя ваши учетные данные 
 - Создать покупателя (модуль Customers)
 - Верифицировать появившуюся нотификацию
 - Верифицировать созданного покупателя в таблице (сравнить все имеющиеся поля, покупатель должен быть самым верхним)

### 📁 File structure

