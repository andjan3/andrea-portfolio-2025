"use client";

export const Form = ({ settings }: any) => {
  return (
    <form className="flex flex-col">
      <label
        htmlFor="fullname"
        className="text-white text-[20px] font-light mb-4"
      >
        {settings.input_name}
      </label>
      <input id="fullname" className="rounded-[10px] p-6 " />
      <label
        htmlFor="email"
        className="text-white text-[20px] font-light mb-4 mt-4"
      >
        {settings.input_email}
      </label>
      <input id="email" className="rounded-[10px] p-6" />
      <label
        htmlFor="phonenumber"
        className="text-white text-[20px] font-light mb-4 mt-4"
      >
        {settings.input_phone}
      </label>
      <input id="phonenumber" className="rounded-[10px] p-6" />

      <label
        htmlFor="message"
        className="text-white text-[20px] font-light mb-4 mt-4"
      >
        {settings.input_message}
      </label>
      <textarea className="rounded-[10px] h-[40vh]" />

      <button className="send-btn mt-10 uppercase">{settings.button}</button>
    </form>
  );
};
