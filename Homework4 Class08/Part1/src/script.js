$(document).ready(() => {
    const URL = "https://jsonplaceholder.typicode.com/"

    const getPost = (url, id) => {
        return $.ajax(`${url}posts/${id}/`)
    }

    const getUser = (url, id) => {
        return $.ajax(`${url}users/${id}/`)
    }

    const renderHelper = (postInfo, userInfo) => {
        console.log(postInfo);
        console.log(userInfo);

        let postDiv = $('<div></div>')
        let postID = $(`<h2>POST: ${postInfo.id}</h2>`)
        let postTitle = $(`<h3>Title: ${postInfo.title}</h3>`)
        let postBody= $(`<p>${postInfo.body}</p>`)


        let authorName = $(`<h2>Author: ${userInfo.name}</h2>`)
        let username= $(`<p>Username: ${userInfo.username}</p>`)
        let email= $(`<p>Email: ${userInfo.email}</p>`)
        let phone= $(`<p>Phone Number: ${userInfo.phone}</p>`)
        let website= $(`<p>Website: ${userInfo.website}</p>`)
        let address= $(`<p>Address: ${userInfo.address.street} ${userInfo.address.suite} ${userInfo.address.city}</p>`)
        let company= $(`<p>Company: ${userInfo.company.name}</p>`)


        postDiv.append(postID);
        postDiv.append(postTitle);
        postDiv.append(postBody);
        postDiv.append(authorName);
        postDiv.append(username);
        postDiv.append(email);
        postDiv.append(phone);
        postDiv.append(website);
        postDiv.append(address);
        postDiv.append(company);

        $('.container').append(postDiv)

    }


    const render = async () => {
        try {
            const post = await getPost(URL, 1)
            const user = await getUser(URL, post.userId)
            renderHelper(post, user)
        } catch (error) {
            console.log(error)
        }
    }

    render()



});




 
