"use strict";

var MailChimpWebhook = require('mailchimp').MailChimpWebhook,
    config = require("./config"),
    webhook = new MailChimpWebhook({
        port: config.port,
        secret: config.secret,
    }),
    sendgrid  = require('sendgrid')(config.sendgrid.user, config.sendgrid.password),
    receipients = config.receipients,
    sender = config.sender,
    list = config.list;

function send(subject, text) {
    sendgrid.send({
        to:       receipients,
        from:     sender,
        subject:  subject,
        text:     text
    }, function(err, json) {
        if (err) { return console.error(err); }
    });
}

webhook.on('error', function (error) {
    console.log(error.message);
});

webhook.on('subscribe', function (data, meta) {
    send(data.email + " subscribed to " + list.name, "Hi, \n\n Good News!\n " + data.email + " joined your mailing list '" + list.name + "'. \n\n Isn't it the best? Cheers! \n\n Manage your list here: " + list.url);
});

webhook.on('unsubscribe', function (data, meta) {
    send(data.email + " unsubscribed from " + list.name, "Hi, \n\n So " + data.email + " left your mailing list '" + list.name + "'. \nSad story.\n\n Manage your list here: " + list.url);
});