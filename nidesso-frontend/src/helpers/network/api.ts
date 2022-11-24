class Api {
    private apiUrl = process.env.REACT_APP_API_ENDPOINT;

    test(): void {
        console.log(this.apiUrl);
    }
}

const api = new Api();

export default api;