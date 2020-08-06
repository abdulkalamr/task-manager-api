const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'abdulkalamr@zohomail.in',
    from: 'abdulkalamr@zohomail.in',
    subject: 'This is my first creation!',
    text: 'I hope this one actually gets to you.'
})