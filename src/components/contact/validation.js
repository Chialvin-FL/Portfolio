export const validateContactForm = ({ name, email, message }) => {
    const errors = {};

    // Name Validation
    if (!name.trim()) {
        errors.name = "Name is required";
    } else if (name.length > 120) {
        errors.name = "Name cannot exceed 120 characters";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
        errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address";
    } else if (email.length > 120) {
        errors.email = "Email cannot exceed 120 characters";
    }

    // Message Validation
    if (!message.trim()) {
        errors.message = "Message is required";
    } else if (message.length > 1000) {
        errors.message = "Message cannot exceed 1000 characters";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};
