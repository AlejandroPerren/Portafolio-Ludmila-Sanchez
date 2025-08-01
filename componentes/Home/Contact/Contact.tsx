"use client";

import { useState, useEffect, FormEvent } from "react";

const mailURL = process.env.NEXT_PUBLIC_FORMSPREE_URL as string;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submitted || error) {
      const timeout = setTimeout(() => {
        setSubmitted(false);
        setError(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [submitted, error]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    try {
      const response = await fetch(mailURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error al enviar:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg p-6 sm:p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Contacto
        </h2>

        {submitted && (
          <p className="text-green-600 text-center font-medium mb-4">
            ¡Gracias por tu mensaje! Te responderé pronto.
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center font-medium mb-4">
            No se pudo enviar. Intenta nuevamente más tarde.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
