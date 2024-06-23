# Orders API

NodeJS API to create, list and delete orders.

# How to install

Run the command bellow in the project's folder:

    npm install

# How to use

After the dependencies are installed, run the command `nodemon src/index.js` or `npm run dev` as defined in package.json. You can fetch the requests using Insomnia, using the URL http://localhost:3000 with the required Endpoint.

# Endpoints

Create new order: POST /order

Get order data using the order id: GET /order/:orderId

List all orders: GET /order/list

Update order: PUT /order/:orderId
(TO BE IMPLEMENTED)

Delete order: DELETE /order/:orderId

# JSON Body example

# JSON Body example

{

    "numeroPedido": "v10089015vdb-01",

    "valorTotal": 10000,

    "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",

    "items": [

        {

        "idItem": "2434",

        "quantidadeItem": 1,

        "valorItem": 1000

        }

    ]

}
