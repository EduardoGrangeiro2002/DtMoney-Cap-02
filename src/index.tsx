import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from "miragejs"

createServer({
  models: {
    transaction : Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Salário",
          category: 'DevBack-End-NodeJS',
          number: 3500,
          type: 'deposit',
          createdAt: new Date()
        },
        {
          id: 2,
          title: "Free-lancer",
          category: 'DevBack-End-NodeJS',
          number: 9000,
          type: 'deposit',
          createdAt: new Date()
        }
      ]
    })
  },
  routes() {
    this.namespace = "api/"
    this.get("/transactions", () => {
     return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

