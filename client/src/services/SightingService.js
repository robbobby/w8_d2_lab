const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  async getSightings(){
    const res = await fetch(baseURL)
    return await res.json()
  },

  async postSighting(payLoad){
    const res = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
    return await res.json()
  }
}
