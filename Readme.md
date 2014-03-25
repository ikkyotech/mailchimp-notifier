# Simple mailchimp & sendgrid setup for notifications

Mailchimp doesn't offer easy notifications if someone subscribes/unsubscribes your mailing list.
This is a fast and small setup that allows you to be instantly notified when that happens.

## Installation

Clone this repository to a server.

```bash
$ git clone https://github.com/ikkyotech/mailchimp-notifier.git .
```

Create a config.json file that contains all your basic config:

```json
{
    "port": 8083,
    "secret": "a-secret-key-of-your-choice", 
    "sendgrid": {
        "user": "sendgrid-user",
        "password": "sendgrid-password"
    },
    "receipients": ["a@your-domain.com", "b@your-domain.com"],
    "sender": "your-choice@your-domain.com",
    "list": {
        "name": "name-of-your-list-as-shown-in-the-mails",
        "url": "http://url-to-manage-your-list"
    }
}
```

## Starting

Start the server either using

```
$ npm start
```

or 

```
$ node server.js
```

If you want your server to run longer we recommend to use [pm2](https://github.com/Unitech/pm2).

That's it, cheers! 
