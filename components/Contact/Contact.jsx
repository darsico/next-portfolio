import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import ReCAPTCHA from "react-google-recaptcha";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import Lottie from "lottie-react";
import animConnect from "../../src/lotties/connect-lottie.json";

import Section from "../Section";
import Spinner from "../Loaders/Spinner.jsx";

const Contact = () => {
  const router = useRouter();

  const captcha = useRef(null);

  const [verified, setVerified] = useState(false);
  const [validCaptcha, setValidCaptcha] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = async (values) => {
    if (!captcha.current.getValue()) return setValidCaptcha(false);
    setIsLoading(true);
    const config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        reset();
        setVerified(false);
        router.push("/thank-you", undefined, { shallow: true });
        captcha.current.reset();
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }

    setValidCaptcha(null);
  };

  const onChange = () => {
    if (captcha.current.getValue()) {
      setVerified(true);
      setValidCaptcha(true);
    }
  };
  return (
    <Section className="section contact " id="contact">
      <figure className="contact__img ">
        <Lottie animationData={animConnect} autoplay={true} loop={true} />
      </figure>
      {isLoading ? (
        <div className="flex items-center justify-center border-[1px] border-gray-300 flex-col py-16 px-10 gap-4">
          <h4 className="w-4/5 text-center leading-8 text-3xl tracking-tighter text-black font-light">
            Su mensaje se está procesando y enviando
          </h4>
          <Spinner />
        </div>
      ) : (
        <form action="/" className="form" id="form" onSubmit={handleSubmit(onSubmitForm)}>
          <h3 className="form__title">Póngase en contacto para nuevas oportunidades o solo para saludar :)</h3>
          <div className="form__input-list">
            <label htmlFor="name" className="sr-only">
              Nombre Completo
            </label>
            <input
              className={`form__input ${errors.name ? "border-red-400" : "border-[#424242]"}`}
              placeholder="Nombre completo"
              {...register("name", {
                required: {
                  value: true,
                  message: "Ingresa tu nombre completo porfavor",
                },
              })}
              type="text"
              id="name"
              name="name"
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <p className="text-red-400 text-sm py-1">{message}</p>}
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              className={`form__input ${errors.email ? "border-red-400" : "border-[#424242]"}`}
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Ingresa tu email por favor",
                },
                maxLength: {
                  value: 80,
                  message: "This is too long",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                  message: "Por favor ingresa un email válido",
                },
              })}
              name="email"
              type="text"
              id="email"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p className="text-red-400 text-sm py-1">{message}</p>}
            />

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              className={`form__input form__input--message  ${errors.message ? "border-red-400" : "border-[#424242]"}`}
              placeholder="Escribe el mensaje aquí."
              {...register("message", {
                required: {
                  value: true,
                  message: "Ingresa el mensaje por favor",
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
              })}
              name="message"
              id="message"
            />
            <ErrorMessage
              errors={errors}
              name="message"
              render={({ message }) => <p className="text-red-400 text-sm py-1 ">{message}</p>}
            />
          </div>
          <div className="flex justify-center flex-col gap-2">
            <ReCAPTCHA
              onChange={onChange}
              ref={captcha}
              className="mx-auto"
              sitekey="6LfzfckfAAAAAD92GvNz-tTfQCtBBF2kUc0wG8S9"
            />
            {validCaptcha === false && <p className="text-red-400 text-sm mx-auto">Por favor acepta el captcha</p>}
          </div>
          <button
            className={`btn border-2 
           w-fit mx-auto py-1 px-4 rounded-3xl  ${verified
                ? "hover:bg-gray-200 hover:shadow-xl   focus:shadow-xl  focus:bg-gray-200 border-black"
                : "text-gray-400 border-gray-400"
              }`}
            type="submit"
          >
            Enviar
          </button>
        </form>
      )}
    </Section>
  );
};

export default Contact;
