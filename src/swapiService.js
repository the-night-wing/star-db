class SwapiService {

    async getResource(url) {
        const res = fetch(url);

        if(!res.ok){
            throw new Error(`
            Couldn't fetch ${url}, recieved ${res.status}
            `)
        }

        return await res.json()
    }

    getAllPeople(){
        const res = fetch()
    }
}