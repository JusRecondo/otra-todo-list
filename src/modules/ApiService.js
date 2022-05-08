class ApiService {
    headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    getTask = async () => {
        const headers = this.headers;
        const url = "https://jsonplaceholder.typicode.com/todos";

        const response = await fetch(url, {
            method: "GET",
            headers,
        });
        const body = await response.json();
        if (response.status >= 300) throw Error(body.message);

        return body;
    };
}

export default ApiService;
