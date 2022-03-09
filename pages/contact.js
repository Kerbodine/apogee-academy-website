import Head from "next/head";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import Navbar from "../components/Navbar";
import ContactIcon from "../images/mail.svg";
import CompleteIcon from "../images/mail-complete.svg";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(true);
    setTimeout(() => {
      setComplete(true);
      setLoading(false);
    }, 2000);
    // const formData = { email, subject, message };
    // setLoading(true);
    // const response = await fetch("/api/mail", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    // });
    // console.log(response);
    // if (response.status === 200) {
    //   setComplete(true);
    // }
    // setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contact | Apogee Academy</title>
      </Head>
      <Navbar />
      <div className="mx-auto grid h-[calc(100vh-64px)] max-w-screen-lg place-items-center pt-8">
        <div className="relative mx-auto flex max-w-md flex-col-reverse gap-8 px-8 pb-16 md:max-w-none md:flex-row">
          <div className="md:max-w-[24rem]">
            <header className="mx-auto mb-8 md:text-3xl">
              <h1 className="mb-2	text-3xl font-semibold sm:text-4xl">
                Contact:
              </h1>
              <div className="text-gray-600 sm:text-lg">
                Want to collaborate? Or just have an awesome idea to share?
                Let&apos;s connect!
              </div>
            </header>
            <form
              className="relative flex flex-col gap-2"
              method="post"
              onSubmit={handleOnSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-500"
                >
                  Email address:
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border-2 border-gray-200 px-2 py-1 text-gray-600 focus:border-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-500"
                >
                  Subject:
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  autoComplete="off"
                  className="w-full rounded-lg border-2 border-gray-200 px-2 py-1 text-gray-600 focus:border-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-500"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-32 w-full resize-none rounded-lg border-2 border-gray-200 px-2 py-1 text-gray-600 focus:border-gray-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-lg bg-indigo-500 px-4 py-2 text-white ring-indigo-600 ring-offset-2 hover:bg-indigo-600 active:ring-2"
              >
                Submit
              </button>
              {loading ? (
                <div className="absolute inset-0 grid place-items-center bg-white">
                  <span className="animate-spin text-2xl">
                    <BiLoaderAlt />
                  </span>
                </div>
              ) : (
                complete && (
                  <div className="absolute inset-0 bg-white">
                    <div className="w-full rounded-lg border-2 border-emerald-400 bg-emerald-100 px-2 py-1 text-sm font-semibold text-emerald-500">
                      Message sent!
                    </div>
                  </div>
                )
              )}
            </form>
          </div>
          <div className="flex flex-auto items-center justify-center sm:min-w-[20rem]">
            {complete ? (
              <CompleteIcon className="max-w-[18rem]" />
            ) : (
              <ContactIcon className="max-w-[18rem]" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
