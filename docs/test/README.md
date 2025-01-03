# Тестування системи

- Тестування працездатності системи
    - [Основний сценарій для Data](#основний-сценарій-для-data)
        - [GET](#get-data)
        - [POST](#post-data)
        - [PUT](#put-data)
        - [DELETE](#delete-data)
    - [Основний сценарій для Access](#основний-сценарій-для-access)
        - [GET](#get-access)
        - [POST](#post-access)
        - [PUT](#put-access)
        - [DELETE](#delete-access)
    - [Виключні ситуації для Data](#виключні-ситуації-для-data)
        - [GET](#get-data-error)
        - [POST](#post-data-error)
        - [DELETE](#delete-data-error)
    - [Виключні ситуації для Access](#виключні-ситуації-для-access)
        - [GET](#get-access-error)
        - [POST](#post-access-error)
        - [DELETE](#delete-access-error)

## Основний сценарій для Data
### GET Data
Get-запит на отримання всіх даних
![](./images/getData.png)

Get-запит на отримання даних за id
![](./images/getDataById.png)

### POST Data
Post-запит для додавання даних 
![](./images/postData.png)

### PUT Data
Put-запит на оновлення name
![](./images/putData.png)

### DELETE Data
Delete-запит на видалення даних
![](./images/deleteData.png)

## Основний сценарій для Access
### GET Access
Get-запит на отримання всіх доступів
![](./images/getAccess.png)

Get-запит на отримання доступу за id
![](./images/getAccessById.png)

### POST Access
Post-запит на додавання доступу
![](./images/postAccess.png)

### PUT Access
Put-запит на оновлення access_type
![](./images/putAccess.png)

### DELETE Access
Delete-запит на видалення категорії
![](./images/deleteAccess.png)

## Виключні ситуації для Data
### GET Data Error
Немає даних із заданим id
![](./images/getData1.png)

### POST Data Error
Введено не всі дані, що є обов’язковими для заповнення
![](./images/postData1.png)

### DELETE Data Error
Немає даних із заданим id
![](./images/deleteData1.png)

## Виключні ситуації для Access
### GET Access Error
Немає доступу із заданим id
![](./images/getAccess1.png)

### POST Access Error
Введено не всі дані, що є обов’язковими для заповнення
![](./images/postAccess1.png)

### DELETE Access Error
Немає доступу із заданим id
![](./images/deleteAccess1.png)
