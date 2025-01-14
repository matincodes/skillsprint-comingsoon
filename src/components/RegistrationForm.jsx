import  { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    educationLevel: '',
    educationLevelOther: '',
    fieldOfStudy: '',
    course: '',
    courseOther: '',
    learningMode: '',
    paymentMethod: '',
    scholarship: '',
    careerGoals: '',
    internship: '',
    referralSource: '',
    referralCode: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError(''); // Clear previous errors

    const sheetdbUrl = 'https://sheetdb.io/api/v1/5x2nzix6na6kg';

    try {
      // 1. Fetch all emails from SheetDB
      const response = await axios.get(sheetdbUrl);
      const existingEmails = response.data.map((item) => item.email);

      // 2. Check if the email already exists
      if (existingEmails.includes(formData.email)) {
        setEmailError('This email is already registered.');
        return; // Stop submission
      }

      await axios.post(sheetdbUrl, { data: formData });
      setSubmitted(true);
      setFormData({ // Reset form data on successful submission
        fullName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        educationLevel: '',
        educationLevelOther: '',
        fieldOfStudy: '',
        course: '',
        courseOther: '',
        learningMode: '',
        paymentMethod: '',
        scholarship: '',
        careerGoals: '',
        internship: '',
        referralSource: '',
        referralCode: '',
        consent: false,
      });
    } catch (error) {
      console.error('Error submitting form', error);
      setEmailError('An error occurred during submission.');
    }
  };

  return (
    <div id='Waitlist' className="md:w-[60%] w-[95%] mx-auto h-auto my-20">
      <form onSubmit={handleSubmit} className="w-full">
        <h2 className="text-[30px] font-bold font-Montserrat text-white text-center pb-5">Skill Sprint Program Registration</h2>
        <p className='text-gray font-Inter font-semibold text-center leading-7'>You are registering for our  <strong className='text-white'>one-month FREE intensive tech and non-tech program</strong>  designed to equip you with foundational skills in various high-demand fields. This free program serves as an introduction to our comprehensive curriculum, preparing you for real-world projects and career opportunities.
        </p>
        <p className='text-gray font-Inter font-semibold text-center leading-7'>
        🚀<strong className='text-white'> After the One-Month Free Program: </strong>Participants can choose to continue with our <strong className='text-white'>paid advanced courses</strong> , offering in-depth learning, advanced projects, career support, and direct access to internship and job opportunities.
        </p>
        <p className='text-gray font-Inter font-semibold text-center leading-7'><strong className='text-white'>Paid Program Details:</strong>  - Duration: 6 to 15 months (varies by course), - Flexible installment payment options, - Discounts for early sign-ups</p>
        {/* Personal Information */}
        <div className='flex flex-col md:flex-row gap-10 mb-6 mt-5'>
            <div className="w-full">
              <label className="block font-medium text-white font-Inter">
                Full Name  
                <span className='text-red-700 font-black pl-2'>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border font-Inter border-white/15 rounded bg-darkGray text-white outline-none"
                required
              />
            </div>
    
            <div className="w-full">
                <label className="block font-medium text-white font-Inter">
                    Email Address
                    <span className='text-red-700 font-black pl-2'>*</span>
                </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border font-Inter border-white/15 bg-darkGray text-white rounded outline-none"
                required
              />
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-10 mb-6'>
            <div className=" w-full">
              <label className="block font-Inter font-medium text-white">
                Phone Number (WhatsApp preferred)
                <span className='text-red-700 font-black pl-2'>*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 w-full border font-Inter border-white/15 bg-darkGray rounded text-white outline-none"
                required
              />
            </div>
    
            <div className="w-full">
              <label className="block font-Inter font-medium text-white">
                Date of Birth
                <span className='text-red-700 font-black pl-2'>*</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 p-2 w-full border font-Inter border-white/15 bg-darkGray text-white rounded"
                required
              />
            </div>
        </div>

        <div className="mb-8">
          <label className="block font-medium text-white">
            Gender
            <span className='text-red-700 font-black pl-2'>*</span>
          </label>
          <div className="mt-1">
            {['Male', 'Female', 'Prefer not to say'].map((option) => (
              <label key={option} className={`${formData.gender === option ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={formData.gender === option}
                  onChange={handleChange}
                  className="peer"
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Educational Background */}
        <div className="mb-8">
          <label className="block font-medium text-white font-Inter">
            Highest Level of Education Completed
            <span className='text-red-700 font-black pl-2'>*</span>
          </label>
          <div className="mt-1">
            {['Secondary School', 'Undergraduate Student', 'Graduate', 'Postgraduate', 'Others'].map((option) => (
              <label key={option} className={`${formData.educationLevel === option ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="radio"
                  name="educationLevel"
                  value={option}
                  checked={formData.educationLevel === option}
                  onChange={handleChange}
                  className="peer"
                  required
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">{option}</span>
              </label>
            ))}
            {formData.educationLevel === 'Others' && (
                <input
                  type="text"
                  name="educationLevelOther"
                  placeholder="Please specify"
                  value={formData.educationLevelOther || ''}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border font-Inter border-white/15 bg-darkGray rounded text-white outline-none"
                />
              )}
          </div>

        </div>

        <div className="mb-8">
          <label className="block font-Inter font-medium text-white">Field of Study/Professional Background</label>
          <input
            type="text"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            className="mt-1 p-2 w-full font-Inter border border-white/15 bg-darkGray rounded text-white outline-none"
          />
        </div>

        {/* Course Selection - Single Choice */}
        <div className="mb-8">
          <label className="block font-medium text-white">
            Which course are you interested in?
            <span className='font-black text-red-700 pl-2'>*</span>
          </label>
          <div className="mt-1 ">
            {[
              'Frontend Development',
              'Backend Development',
              'Full-Stack Development',
              'UI/UX Design',
              'Graphics Design',
              'Cloud Computing (AWS)',
              'Digital Marketing',
              'Virtual Assistant',
              'Data Analytics',
              'Data Science',
              'Cybersecurity',
              'AI and Machine Learning',
              'Project Management',
              'Robotics & Embedded Systems',
              'Mobile Development (React Native)',
              'Others'
            ].map((course) => (
              <label key={course} className={`${formData.course === course ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="radio"
                  name="course"
                  value={course}
                  checked={formData.course === course}
                  onChange={handleChange}
                  className="peer"
                  required
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">{course}</span>
              </label>
            ))}
            {formData.course === 'Others' && (
                <input
                  type="text"
                  name="courseOther"
                  placeholder="Please specify"
                  value={formData.courseOther || ''}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border font-Inter border-white/15 bg-darkGray rounded text-white outline-none"
                />
              )}
          </div>
        </div>

        <div className="mb-8">
          <label className="block font-medium text-white font-Inter">
            Preferred Learning Mode 
            <span className='text-red-700 font-black pl-2'>*</span>
          </label>
          <div className="mt-1">
            {['Live Interative Class', 'Self-Paced with Recorded Sessions', 'Hybrid (Live + Recorded)'].map((option) => (
              <label key={option} className={`${formData.learningMode === option ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="radio"
                  name="learningMode"
                  value={option}
                  checked={formData.learningMode === option}
                  onChange={handleChange}
                  className="peer"
                  required
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block font-medium text-white font-Inter">
            Payment Preference (For Paid Program)
            <span className='text-red-700 font-black pl-2'>*</span>
          </label>
          <div className="mt-1">
            {['Card Payment', 'Bank Transfer', 'Installment Payment'].map((option) => (
              <label key={option} className={`${formData.paymentMethod === option ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option}
                  checked={formData.paymentMethod === option}
                  onChange={handleChange}
                  className="peer"
                  required
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <label className="block font-medium text-white font-Inter">
            Would you like to apply for a scholarship or discount?
            <span className='text-red-700 font-black pl-2'>*</span>
          </label>
          <div className="mt-1">
            {['Yes', 'No'].map((option) => (
              <label key={option} className={`${formData.scholarship === option ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="radio"
                  name="scholarship"
                  value={option}
                  checked={formData.scholarship === option}
                  onChange={handleChange}
                  className="peer"
                  required
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <label className="block font-Inter font-medium text-white">
            What are your career goals after completing the program? 
          </label>
          <textarea 
            cols="25" 
            rows="3"
            name="careerGoals"
            value={formData.careerGoals}
            onChange={handleChange}
            className="mt-1 p-2 w-full border font-Inter border-white/15 bg-darkGray rounded outline-none text-white">
            </textarea>
        </div>

        <div className="mb-8">
          <label className="block font-medium text-white font-Inter">
            Do you want to be considered for internship or job opportunities   
            <span className='text-red-700 font-black pl-2'>*</span>
          </label>
          <div className="mt-1">
            {['Yes', 'No'].map((option) => (
              <label key={option} className={`${formData.internship === option ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="radio"
                  name="internship"
                  value={option}
                  checked={formData.internship === option}
                  onChange={handleChange}
                  className="peer"
                  required
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block font-medium text-white font-Inter">
            How did you hear about Skill Sprint?   
          </label>
          <div className="mt-1">
            {[' Social Media (Instagram, Facebook, LinkedIn) ', ' Friend/Family Referral', 'Campus Ambassador', 'WhatsApp Group'].map((option) => (
              <label key={option} className={`${formData.referralSource === option ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="radio"
                  name="referralSource"
                  value={option}
                  checked={formData.referralSource === option}
                  onChange={handleChange}
                  className="peer"
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-8">
            <label className="block font-Inter font-medium text-white">
                Referral Code (If any)   
            </label>
          <input
            type="text"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border font-Inter border-white/15 bg-darkGray rounded"
          />
        </div>

        {/* Consent */}
        <div className="mb-4">
            <label className="block font-medium text-white font-Inter">
                By submitting this form, you agree to our terms and conditions and consent to receive program updates
                <span className='text-red-700 font-black pl-2'>*</span>
            </label>
          <div  className='mt-1'>
              <label className={`${formData.consent ? "bg-orange-200":""} block mr-4 border border-white/15 p-2.5 rounded bg-darkGray mb-3 cursor-pointer`}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="form-checkbox peer"
                />
                <span className="ml-2 text-white font-Inter peer-checked:text-black">I consent to receive updates via email/WhatsApp.</span>
              </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitted}
          className="bg-goldenBrown font-Inter font-semibold text-white px-8 py-2.5 mt-10 rounded flex items-center text-[15px] tracking-wide"
        >
          <FaPaperPlane className='mr-2'/> {submitted ? 'SUBMITTED' : 'SUBMIT'}
        </button>

        {submitted && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
        {emailError && <p className="text-red-500 mt-4">{emailError}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
