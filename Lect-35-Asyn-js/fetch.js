async function postData() {
    try {
        let url = "https://example.org/post";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            // Automatically converted to "username=example&password=password"
            body: new URLSearchParams({ username: "example", password: "password" }),
            // …
        });

        //await responce ke sath kuya karna h

    } catch (error) {

    }


}