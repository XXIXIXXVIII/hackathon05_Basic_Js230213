import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [menuItem, setMenuItem] = useState();
  const [nametodo, setNametodo] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    let fetchData = async () => {
      let data = await axios.get("http://localhost:4000");
      setMenuItem(data.data);
    };
    fetchData();
  }, [menuItem]);

  let handleSubmit = () => {
    console.log(menuItem);
    let postData = async () => {
      let result = await axios.post("http://localhost:4000", { nametodo })
      setError(result);
    };
    
    setNametodo('')
    postData();
  };
 
  let handleDelete = async(id)=>{
    await axios.delete(`http://localhost:4000/${id}`)
  }


  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="text-3xl text-white font-bold bg-yellow-600 py-6">
        <h1 className="ml-5">Note App</h1>
      </div>
      <div className="w-1/3 mx-auto relative  mt-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 absolute top-2 left-2 dark:text-gray-400"
        >
          Title
        </label>
        <textarea
          onChange={(e) => setNametodo(e.target.value)}
          id="message"
          rows="4"
          value={nametodo}
          className="block px-2.5 pt-7 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
        ></textarea>
        <div className="absolute -bottom-3 right-4">
          <button
            onClick={(e) => handleSubmit(e)}
            className="py-1 hover:bg-yellow-400 active:bg-yellow-600 px-3 rounded-full bg-yellow-300"
          >
            +
          </button>
        </div>
      </div>

      <div className="w-[96%] mx-auto mt-10 overflow-auto flex gap-5 flex-wrap">
        {menuItem?.map((item) => (
          <div
            key={item.todoid}
            className="relative w-[23%] h-40 rounded-lg bg-white"
          >
            <div className="p-4 w-full h-full overflow-hidden">
              <span style={{ wordWrap: "break-word" }} className="whitespace-normal">{item.nametodo}</span>
            </div>
            <div onClick={()=>handleDelete(item.todoid)} className="absolute text-xl cursor-pointer bottom-2 right-2">
              <i className="fa-solid fa-trash-can hover:text-red-500"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
