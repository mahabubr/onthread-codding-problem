# OneThread NodeJS Developer [ Coding Problem ]

### This is a crud operation in the orders section. I use the MVC pattern to do this backend with an organized code structure. There is a validation guard with route control.

## Technologies
1. Node
2. Express
3. Mongoose/Mongodb
4. Typescript
5. Zod

## live link : https://onethread-codding-problem.vercel.app/
### Endpoints
1. /orders [ POST ] to create orders
2. /orders [ GET ] to get all data also filter by (product_id, quantities, user_id)
3. /orders/:id [ GET ] to get single data
4. /orders/:id [ PATCH ] to update order
5. /orders/:id [ DELETE ] to delete order

### Create json 
```
{
    "user_id": "adfvc@#",
    "product_id": 140,
    "quantities": 50,
    "payments": "636fb270d368236db763481d"
}
```
### Get response
```
{
    "message": "Orders placed Successful",
    "data": {
        "user_id": "adfvc@#",
        "product_id": 140,
        "quantities": 50,
        "payments": "636fb270d368236db763481d",
        "_id": "6612f7b1dcdd105843616660",
        "createdAt": "2024-04-07T19:44:49.680Z",
        "updatedAt": "2024-04-07T19:44:49.680Z",
        "__v": 0
    }
}
```

## How to setup in local machine
1. Clone the repository
```
git clone https://github.com/mahabubr/onthread-codding-problem.git
```
2. Open the folder in code editor and install dependencies
```
npm install
```
3. Run the Server
```
npm run dev
```
4. For build
```
npm run build
```

ensure that you have install nodejs