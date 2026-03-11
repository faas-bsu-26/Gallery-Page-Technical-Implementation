import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  photos: [],
  fetchData: async function() {
    try {
      const response = await fetch('data.json');
      var loadedData = await response.json();
      this.photos = loadedData.photos;
      this.overview = loadedData.overview;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
})