function App() {
  return (
    <>
      <div className="text-3xl text-white font-bold bg-yellow-600 py-6">
        <h1 className="ml-5">Note App</h1>
      </div>
      <div className="w-1/3 mx-auto relative  mt-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        <div className="absolute -bottom-3 right-4"><button className="py-1 hover:bg-yellow-400 active:bg-yellow-600 px-3 rounded-full bg-yellow-300">+</button></div>
      </div>

      <div className="w-[94%] mx-auto mt-10">
        <div className="relative w-[23%] h-40 rounded-lg bg-red-500">
          <div className="p-4">
            <span>Hello</span>
          </div>
          <div className="absolute w-7 bottom-1 right-1">
            <img src="https://cdn-icons-png.flaticon.com/512/1175/1175088.png"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
