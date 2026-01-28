import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver} from '@hookform/resolvers/yup';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = yup.object({
    from_name: yup.string().required('Name is required'),
    from_email: yup.string().required('Email is required').email('Invalid email format'),
    message: yup.string().required('Message is required'),
}).required()

const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [contactInfo, setContactInfo] = useState(false);
    const form = useRef();

    const { register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            from_name: '',
            from_email: '',
            message: ''
        }
    });

    const sendEmail = () => {
        setLoading(true);
        emailjs.sendForm('service_w9n6xmg', 'template_dq8mzfu', form.current, 'KIjqwusqrxOB6STWI')
            .then(() => {
                toast.success('An email notification has been successfully sent!', {
                    position: 'top-right',
                    autoClose: 3000, // in milliseconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true
                });
                setLoading(false);
                reset();
            }, () => {
                toast.error('Could not send an email notification at the moment, please try again later.', {
                    position: 'top-right',
                    autoClose: 3000, // in milliseconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true
                });
            });
    };

  return (
    <div name="contact" className="min-h-screen w-full grid place-items-center bg-gradient-to-b from-gray-800 to-black text-white pt-20 py-16">
        <div className="bg-white rounded-md shadow-md flex flex-row">
            <div className="bg-gray-500 p-8 md:hover:scale-y-110 rounded-md transition h-96 w-96 hidden md:inline-block" id="contact_info">
                <div className="flex justify-between">
                    <h2 className="text-white text-xl">Contact Information</h2>
                    <h2 className="text-white text-xs flex flex-row md:hidden cursor-pointer" id="switch_to_contact_us" onClick={() => setContactInfo(!contactInfo)}>Contact Us
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </h2>
                </div>
                <div className="mt-6 flex flex-row">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-200 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-slate-200 text-xs">Name :</h2>
                        <p className="text-white text-xs">Tshenolo Matome</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-row">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-200 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-slate-200 text-xs">Email :</h2>
                        <p className="text-white text-xs">tbmatome@gmail.com</p>
                    </div>
                </div>

                <div className="mt-4 flex flex-row">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-200 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-slate-200 text-xs">Phone :</h2>
                        <p className="text-white text-xs">072 5170 949 / 071 0741 854</p>
                    </div>
                </div>
                
                <div className="mt-5 flex flex-row">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-200 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-slate-200 text-xs">Address :</h2>
                        <p className="text-white text-xs">214 Block Y Shoshanguve Pretoria 0152</p>
                    </div>
                </div>
            </div>
            <div className="px-6 py-8 h-96 w-96 max-w-3xl:hidden " id="contact_us">
                <div className="flex justify-between">
                    <h2 className="text-gray-800 text-xl">Get In Touch</h2>
                    <h2 className="text-blue-800 text-xs font-medium flex flex-row md:hidden cursor-pointer" id="switch_to_contact_info">Contact Info
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </h2>                    
                </div>
                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                    <div className='my-2'>
                        <input type="text" {...register('from_name')} name="from_name" placeholder="Name" className="w-full text-xs text-black px-3 h-8 outline-none rounded-md border focus:shadow-sm" />
                        { errors.from_name && (
                        <span className='text-red-500'>{errors.from_name.message}</span>
                        )}
                    </div>
                    <div className='my-2'>
                        <input type="text" {...register('from_email')} name="from_email" placeholder="Email" className="w-full text-xs text-black px-3 h-8 outline-none rounded-md border focus:shadow-sm" />
                        { errors.from_email && (
                            <span className='text-red-500'>{errors.from_email.message}</span>
                        )}
                    </div>
                    <div className='my-2'>
                        <textarea cols={10} {...register('message')} name="message" rows={10} placeholder="Write your Message..." className="w-full text-black text-xs px-3 py-2 h-20 outline-none rounded-md border focus:shadow-sm resize-none"></textarea>
                        { errors.message && (
                            <span className='text-red-500'>{errors.message.message}</span>
                        )}
                    </div>
                    <input type="submit" value="Send" className="bg-gray-800 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md" />
                </form>
            </div>
        </div>
        {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-r-2 border-b-2 border-gray-300"></div>
        </div>
        )}
     </div>
  )
}

export default Contact