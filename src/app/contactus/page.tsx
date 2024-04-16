import ContactUsPage from "@/components/contactus";

const ContactUs = () => {
  const API_KEY = process.env.MESSAGE_ADD_SECRET_KEY;
  //   console.log(API_KEY);

  return (
    <div>
      <ContactUsPage API_KEY={API_KEY} />
    </div>
  );
};

export default ContactUs;
