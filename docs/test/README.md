# Тестування системи

- [Тестування працездатності системи](#тестування-працездатності-системи)
    - [Основний сценарій для Data](#основний-сценарій-для-data)
        - [GET](#get)
        - [POST](#post)
        - [PUT](#put)
        - [DELETE](#delete)
    - [Основний сценарій для Access](#основний-сценарій-для-access)
        - [GET](#get)
        - [POST](#post)
        - [PUT](#put)
        - [DELETE](#delete)
    - [Виключні ситуації для Data](#виключні-ситуації-для-data)
        - [GET](#get)
        - [POST](#post)
        - [PUT](#put)
        - [DELETE](#delete)
    - [Виключні ситуації для Access](#виключні-ситуації-для-access)
        - [GET](#get)
        - [POST](#post)
        - [PUT](#put)
        - [DELETE](#delete)

## Основний сценарій для Data
### GET
Get-запит на отримання всіх даних
![](./images/getData.png)

Get-запит на отримання даних за id
![](./images/getDataById.png)

### POST
Post-запит для додавання даних 
![](./images/postData.png)

### PUT
Put-запит на оновлення name
![](./images/putData.png)

### DELETE
Delete-запит на видалення даних
![](./images/deleteData.png)

## Основний сценарій для Access
### GET
Get-запит на отримання всіх доступів
![](./images/getAccess.png)

Get-запит на отримання доступу за id
![](./images/getAccessById.png)

### POST
Post-запит на додавання доступу
![](./images/postAccess.png)

### PUT
Put-запит на оновлення access_type
![](./images/putAccess.png)

### DELETE
Delete-запит на видалення категорії
![](./images/deleteAccess.png)

## Виключні ситуації для Data
### GET
Немає даних із заданим id
![](./images/getData1.png)

### POST
Введено не всі дані, що є обов’язковими для заповнення
![](./images/postData1.png)

### DELETE
Немає даних із заданим id
![](./images/deleteData1.png)

## Виключні ситуації для Access
### GET
Немає доступу із заданим id
![](./images/getAccess1.png)

### POST
Введено не всі дані, що є обов’язковими для заповнення
![](./images/postAccess1.png)

### DELETE
Немає доступу із заданим id
![](./images/deleteAccess1.png)
