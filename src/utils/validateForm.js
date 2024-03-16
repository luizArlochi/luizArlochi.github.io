export const validateForm = (name, email, message) => {
    let errors = {};

    // Add here any field that you want to validate.
    // You'll need to adjust the errorHandling.js file to display the error message
    // and the send-email.js file to handle the error message.

    if (!name && !email && !message) {
        errors.name = 'Name';
        errors.email = 'Email';
        errors.message = 'Message';
    } else {
        if (!name) {
            errors.name = 'Name';
        }
        if (!email) {
            errors.email = 'Email field';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email format';
        }
        if (!message) {
            errors.message = 'Message';
        }
    }

    return errors;
};
