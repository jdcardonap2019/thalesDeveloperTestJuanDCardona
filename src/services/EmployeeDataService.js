class EmployeeDataService {
    async fetchEmployeeData(url){
        try {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error('Request failed')
          }
          const jsonData = await response.json()
          return jsonData
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
} 

export default EmployeeDataService