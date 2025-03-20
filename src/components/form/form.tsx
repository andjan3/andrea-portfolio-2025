"use client";

import { useState } from "react";

export const Form = ({ settings }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { content: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: "", number: "", email: "", message: "" });
      }
    } catch {
      throw new Error("failed");
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label
        htmlFor="fullname"
        className="text-white text-[20px] font-light mb-4"
      >
        {settings.input_name}
      </label>
      <input
        id="fullname"
        name="name"
        className="rounded-[10px] p-6 "
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <label
        htmlFor="email"
        className="text-white text-[20px] font-light mb-4 mt-4"
      >
        {settings.input_email}
      </label>
      <input
        id="email"
        name="email"
        className="rounded-[10px] p-6"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <label
        htmlFor="phonenumber"
        className="text-white text-[20px] font-light mb-4 mt-4"
      >
        {settings.input_phone}
      </label>
      <input
        id="phonenumber"
        className="rounded-[10px] p-6"
        name="number"
        value={formData.number}
        onChange={handleInputChange}
        required
      />

      <label
        htmlFor="message"
        className="text-white text-[20px] font-light mb-4 mt-4"
      >
        {settings.input_message}
      </label>
      <textarea
        className="rounded-[10px] h-[40vh]"
        value={formData.message}
        name="message"
        onChange={handleInputChange}
      />

      <button className="send-btn mt-10 uppercase">{settings.button}</button>
    </form>
  );
};
