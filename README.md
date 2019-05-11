# Reactive-Splurty

Reactive-Splurty is built using React. If you've seen my previous [Splurty](https://github.com/pawptart/splurty) project, this app is designed to use that app to supply an API to be able to access quote data. 

See Reactive-Splurty in action [here](https://reactive-splurty-tp.herokuapp.com).

## Calling the API

### Retrieving Quotes
If you'd like to use the API to retrieve quotes, send a GET request to

```https://splurty-tyler-porter.herokuapp.com/quotes.json```

It will return a JSON object that looks similar to the following example:

```
{
    "id": 1,
    "saying": "A bicycle ride around the world begins with a single pedal stroke.",
    "author": "Scott Stoll",
    "created_at": "2019-03-07T03:19:17.780Z",
    "updated_at": "2019-03-07T03:19:17.780Z"
}
``` 
### Creating Quotes
Similarly, if you'd like to create a new quote, use a POST request including the `saying` and `author` keys, and Splurty does the rest. 
