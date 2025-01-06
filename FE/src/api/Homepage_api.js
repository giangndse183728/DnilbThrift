import axios from "axios";


export const fetchItems = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/items')
 
    return response;
  } catch (error) {
    console.error('Error fetching :', error);
    throw new Error('Failed to fetch Items');
  }
};