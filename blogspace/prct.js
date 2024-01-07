fetch ('https://apis.scrimba.com/jsonplaceholder/posts', {
    method: "POST",
    body: JSON.stringify({
        title: "buy milk",
        completed: false
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
.then (res=> res.json())
.then (data => console.log(data))

// what does restful api mean..... ?
// it handels request and send data back in json format or any format that is being used

// statelessness.... ?

// what does it mean for sever to be stateless .... ??
// it forgets the interaction after the resonse is sent

// in mike bike example what url u use to acccomplish this followiing
//  1. retrive a list of bikes that are sold
// GET /bikes
//  2.retrive detail information about bike with id 42
// GET /bikes/42
//  3.update price of bike with id 21
// Put /bikes/21
//  4.add new bike to list 
// POST /bikes
//  5.remove the bike with id 56 
// DELETE /bikes/56

// what is nested reqource in url /bikes/123/reviews
// /bikes/123/reviwes return array of 123 id 
// /reviws will return all array items

// describe url parameter....?
// variable inside the url that act as placeholder for real value  often times they replace id of resource

