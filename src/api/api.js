import axios from 'axios';

export async function getMaterials() {
  try {
    const response = await axios.get('/materials.json');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getItems() {
  try {
    const response = await axios.get('/items.json');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// axios.all([axios.get('/items.json'), axios.get('/materials.json')]).then(
//   axios.spread((items, materials) => {
//     console.log(items.data);
//     console.log(materials.data);
//   })
// );
