import FormfacadeEmbed from "@formfacade/embed-react";


const RegistrationForm = () => {


    return ( 
        <section className="w-[80%] md:w-full mt-10 flex justify-center items-center bg-black min-h-screen py-10">
            <FormfacadeEmbed

            formFacadeURL="https://formfacade.com/include/118017264615350767097/form/1FAIpQLSeWaY_5l00njs5sogs08sjdnI1D1DJRGRZZP1cAHK7vHQksJw/classic.js/?div=ff-compose"
            
            onSubmitForm={() => console.log('Form submitted')}
            
            />
        </section>
     );
}
 
export default RegistrationForm;