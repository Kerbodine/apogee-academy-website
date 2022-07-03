import React, { useState } from "react";
import { BiLoaderAlt, BiPlus } from "react-icons/bi";
import Tag from "../../components/course/Tag";
import Navbar from "../../components/Navbar";
import { nanoid } from "nanoid";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function NewCourse() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = () => {
    if (tagInput.length > 0 && tags.length < 5) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const course = {
        title,
        url: title.split(" ").join("-"),
        description,
        author,
        language,
        thumbnailUrl,
        tags,
        students: 0,
        videos: 0,
        resources: 0,
        lastUpdated: new Date(),
      };
      // add course as new document in Courses collection
      await setDoc(doc(getFirestore(), "Courses", nanoid()), course);
      setLoading(false);
      toast.success("Course added successfully!");
      router.push("/admin");
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <>
      {loading ? (
        <div className="grid h-screen w-full place-items-center">
          <span className="animate-spin text-2xl text-gray-500">
            <BiLoaderAlt />
          </span>
        </div>
      ) : (
        <div className="flex h-screen w-full flex-col">
          <Navbar />
          <div className="mx-auto mt-8 w-full max-w-6xl px-8 pb-32">
            <h1 className="text-2xl font-bold">Create A New Course:</h1>
            <div className="flex w-full">
              <form onSubmit={submitHandler} className="mt-4 flex-1 space-y-2">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Course title*"
                  className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 focus:border-accent focus:outline-none"
                  required
                />
                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Course description*"
                  className="block w-full resize-none rounded-lg border-2 border-gray-200 px-3 py-2 focus:border-accent focus:outline-none"
                  required
                ></textarea>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author / Instructor*"
                    className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 focus:border-accent focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    placeholder="Language"
                    className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 focus:border-accent focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  value={thumbnailUrl}
                  onChange={(e) => setThumbnailUrl(e.target.value)}
                  placeholder="Thumbnail URL"
                  className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 focus:border-accent focus:outline-none"
                />
                <div className="flex gap-2">
                  <input
                    id="tags"
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Tags"
                    className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 focus:border-accent focus:outline-none"
                  />
                  <button
                    onClick={addTag}
                    className="grid h-[2.75rem] w-[2.75rem] flex-none place-items-center rounded-lg border-2 border-gray-200 text-2xl text-gray-600 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <BiPlus />
                  </button>
                </div>
                {tags.length > 0 && (
                  <div className="flex gap-1">
                    <p className="font-medium text-gray-600">Tags: </p>
                    {tags.map((tag, index) => (
                      <Tag key={index} text={tag} />
                    ))}
                  </div>
                )}
                <button
                  type="submit"
                  className="rounded-lg border-2 border-accent px-3 py-2 font-semibold text-accent hover:bg-accent hover:text-white"
                >
                  Add Course
                </button>
              </form>
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
