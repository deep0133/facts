import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toast";
export default function UpdateFact(props) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [catg, setCatg] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    setAuthor(props.oldFact.author);
    setTitle(props.oldFact.title);
    setDesc(props.oldFact.desc);
    setImg(props.oldFact.imgUrl);
    setCatg(props.oldFact.category);
  }, []);

  return (
    <div
      className="col-span-full rounded-md p-5 shadow-md shadow-red-300 transition duration-300 md:col-span-5 lg:col-span-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${require("../Images/mountains.jpg")})`,
      }}>
      <h3 className="font-mulish text-4xl font-bold text-white">
        Update Your Fact
      </h3>
      <ToastContainer />
      <div className="form mx-4 my-5">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="col-span-full mt-5 md:mt-0">
            <form
              action={`http://localhost:3005/api/admin/updatefact/${props.oldFact.factId}`}
              method="post"
              encType="multipart/form-data">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-gray-100 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 shadow-lg sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <input
                          required
                          type="text"
                          name="category"
                          value={catg}
                          onChange={(e) => {
                            setCatg(e.target.value);
                          }}
                          id="company-website"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 py-2 px-3 outline-none sm:text-sm"
                          placeholder="Category"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 shadow-lg sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <input
                          required
                          type="hidden"
                          name="id"
                          value={props.admin}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 py-2 px-3 outline-none sm:text-sm"
                          placeholder="Id of Admin"
                        />
                        <input
                          required
                          type="text"
                          name="title"
                          id="title"
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 py-2 px-3 outline-none sm:text-sm"
                          placeholder="Enter Title of fact"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 shadow-lg sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700">
                        Author
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <input
                          required
                          type="text"
                          name="authorName"
                          id="author"
                          value={author}
                          onChange={(e) => {
                            setAuthor(e.target.value);
                          }}
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 py-2 px-3 outline-none sm:text-sm"
                          placeholder="Enter author name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700">
                      Content/ Description
                    </label>
                    <div className="mt-2 shadow-lg">
                      <textarea
                        required
                        name="desc"
                        value={desc}
                        onChange={(e) => {
                          setDesc(e.target.value);
                        }}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:outline-dotted sm:text-sm"
                        placeholder="Enter the content of fact"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your fact.
                    </p>
                  </div>

                  <div className="relative">
                    <label className="relative block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <img
                      src={`data:Image/jpeg;base64,${btoa(img)}`}
                      alt="Image"
                      className="absolute h-[100%]  rounded-lg pt-1 pb-5 opacity-40"
                    />

                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true">
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload "
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input
                              id="fileUpload"
                              name="uploaded_file"
                              type="file"
                              onChange={(e) => {
                                setImg(e.target.files[0]);
                              }}
                              className="sr-onlys "
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          JPEG, JPG up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Update Fact
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
