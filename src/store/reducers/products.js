import database from '../../assets/data/Menu/dataBase';

const products = [];

const getProducts = () => {
  Object.keys(database).map(header => {
    return database[header].map(name => {
      Object.values(name).map(item => {
        return item.map(item => {
          return products.push(item)
        })
      })
    })
  })
}

getProducts()

export default products