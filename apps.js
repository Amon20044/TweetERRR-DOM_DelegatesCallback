// taking reference from the document by selecting queries by ID # , for class we can use .
const tweetForm =  document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
    // prevent the default behavior of the form - because it will otherwise refresh the page and do the **action** of the form 
    e.preventDefault();

    // initialize variable to store the value of the input fields - called as name fields
    const usernameInput = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;
    
    // create a new tweet function                        |
    createTweet(usernameInput.value, tweet.value);   //   |
                                                     //   |
    usernameInput.value='';                          //   |  default values of the input fields
    tweet.value='';                                  //   |
                                                     //   |
});                                                  //   |
                                                     //   | 
const createTweet = (username, tweet) => {      //   <-----  arrow pointer function to create Tweet
    const newtweet = document.createElement('li');   // create a new list item
    const nameTag = document.createElement('b'); // create a bold tag

    nameTag.append(username); // append the username to the bold tag
    newtweet.append(nameTag); // append the tweet to the new list item

    newtweet.append(`- ${tweet}`); // append the tweet to the new list item

    tweetsContainer.append(newtweet); // append the new list item to the tweets container

}

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove(); // remove the list item if the target is a list item
    console.log(e.target.nodeName);
})

