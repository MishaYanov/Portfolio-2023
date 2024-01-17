import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Alert, Loader } from "../components";
import { Fox } from "../models/Fox";
import useAlert from "../Hooks/useAlert";

const Contact = () => {

  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: any) => {
    setCurrentAnimation('idle')
  };

  const handleFocus = (e: any) => {
    setCurrentAnimation('walk')
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    const struct = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Misha",
      to_email: "misha.y1404@gmail.com",
    };

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        struct,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
        showAlert({show: true, type: 'success', text: 'Message sent successfully!'});

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setCurrentAnimation("idle");
        showAlert({show: true, type: 'danger', text: 'Failed to send message!'});
        setTimeout(() => {
          hideAlert();
        }, 3000);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-full">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>
        <form
          ref={formRef}
          action=""
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label htmlFor="" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              className="input"
              placeholder="example@example.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <Suspense fallback={<Loader />}>
          <ambientLight intensity={1} />
          <directionalLight intensity={2} position={[5, 4, 1]} />
            <Fox 
              currentAnimation={currentAnimation} 
              position={[0.5, 0.5, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
