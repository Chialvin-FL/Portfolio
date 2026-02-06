import { useState } from 'react';
import emailjs from 'emailjs-com';

const useEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async ({ fullname, email, projectType, message }) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        // Check for cooldown (5 minutes)
        const COOLDOWN_PERIOD = 5 * 60 * 1000;
        const lastSentKey = `email_last_sent_${email}`;
        const lastSentTime = localStorage.getItem(lastSentKey);

        if (lastSentTime) {
            const timeSinceLastSend = Date.now() - parseInt(lastSentTime, 10);
            if (timeSinceLastSend < COOLDOWN_PERIOD) {
                const minutesLeft = Math.ceil((COOLDOWN_PERIOD - timeSinceLastSend) / 60000);
                setError(`Please wait ${minutesLeft} minute(s) before sending another message.`);
                setLoading(false);
                return false;
            }
        }

        const serviceID = "service_wmbofyj";
        const templateID = "template_i1hctq8";
        const publicKey = "OTKcxW7tWUSp9gqQH";

        try {
            const adminParams = {
                to_email: "devduo.codes@gmail.com",
                to_name: "Dev Duo Team",
                from_name: fullname,
                from_email: email, // Useful if template uses it for Reply-To
                subject: `${projectType} inquiry from ${fullname}`,
                message: `Name: ${fullname}\nEmail: ${email}\n\n\n"${message}"`,
            };

            await emailjs.send(serviceID, templateID, adminParams, publicKey);

            // 2. Send Copy to User
            const userParams = {
                to_email: email,
                to_name: fullname,
                from_name: "Dev Duo Team",
                subject: `${projectType} inquiry for Dev Duo confirmation`,
                message: `Thank you for inquring Dev Duo for your ${projectType}  \n\n"${message}"\n\n The team will reach out to you as soon as possible.`,
            };

            await emailjs.send(serviceID, templateID, userParams, publicKey);

            // Update cooldown timestamp
            localStorage.setItem(lastSentKey, Date.now().toString());

            setSuccess(true);
            return true;
        } catch (err) {
            console.error("Email sending failed:", err);
            setError(err.text || err.message || "Failed to send email");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading, error, success, reset: () => setSuccess(false) };
};

export default useEmail;
