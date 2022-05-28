// https://github.com/jsoto007/phase-1-sending-data-with-fetch

// Add your code here
// const submitData = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Bryron",
//         dogBreed: " Poodle",
//     }), // data goes here
// };


function submitData(name, email) {
    const postConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email
        }),
    };

    return fetch('http://localhost:3000/users', postConfig)
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (object) {
            console.log(object);
        })
        .catch(function (error) {
            alert("something went wrong: check your code!")
        })

}


// <
// input class = "vector-search-box-input"
// type = "search"
// name = "search"
// placeholder = "Search Wikipedia"
// aria - label = "Search Wikipedia"
// autocapitalize = "sentences"
// title = "Search Wikipedia [ctrl-option-f]"
// accesskey = "f"
// id = "searchInput" > < /input>