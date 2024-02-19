"use client";
import Pagination from "@/components/Pagination";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";

type Props = {};

type Item = {
  _id: string;
  name: string;
  email: string;
  message: string;
  phone: string;
  createdAt: string;
};

const AdminPage = ({ }: Props) => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [page, setPage] = useState(1);
  const [secret, setSecret] = useState("");

  const fetchData = async (page: any) => {
    try {
      const res = await axios.post("/api/admin", { secret, page, limit: 10 });
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      alert("Error");
      setData([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setSecret(String(data.secret));

    try {
      const res = await axios.post("/api/admin", { secret: data.secret, page, limit: 10 });
      setIsActive(false);
      setData(res.data);
    } catch (error) {
      alert("Error");
      setData([]);
    }
  };

  const handleDelete = async (id: String) => {
    try {
      const res = await axios.delete(`/api/admin`, { params: { id } });
      console.log(res.data);
      fetchData(page);
    } catch (error) {
      alert("Error deleting the object!");
    }
  }

  return (
    <div className="bg-zinc-900 overflow-x-clip flex items-center justify-center h-full min-h-screen">
      <form
        onSubmit={handleSubmit}
        className={`text-white flex flex-col gap-4 bg-zinc-800 px-10 py-6 rounded-xl items-center ${isActive ? "" : "hidden"
          }`}
      >
        <p>Enter Password</p>
        <input
          id="secret"
          name="secret"
          type="text"
          className="rounded-sm h-auto text-black bg-zinc-300 outline-none border-[#8D8D8D] border-[0.5px] text-[13px] p-2"
        />
        <button className="border rounded-md px-2 py-1" type="submit">
          Submit
        </button>
      </form>

      <div className={`${isActive ? "hidden" : ""} text-white`}>
        <Link href={'/'} className="w-screen flex justify-center mt-8 text-3xl text-center  text-zinc-500"><GrHomeRounded /></Link>
        <p className="mt-6 text-5xl text-center tracking-widest text-zinc-500">
          MESSAGES
        </p>
        {data.map((item: Item, index) => (
          <div key={index} className="flex justify-between bg-zinc-800 mx-20 cursor-default p-8 rounded-xl my-8 transition-all gap-4">
            <div>
              <p className="text-zinc-500">
                <span className="font-bold ">Date:</span>{" "}
                {item.createdAt.slice(0, 10)}
              </p>
              <p className="text-zinc-500">
                <span className="font-bold ">Name:</span> {item.name}
              </p>
              {item.email && (<p className="text-zinc-500">
                <span className="font-bold ">Email:</span> {item.email}
              </p>)}
              {item.phone && (<p className="text-zinc-500">
                <span className="font-bold ">Phone:</span> {item.phone}
              </p>)}
              <p className="text-zinc-500">
                <span className="font-bold ">Message:</span> {item.message}
              </p>
            </div>

            <button className="hover:scale-125 transition-all" onClick={
              () => handleDelete(item._id)
            }><FaTrash className="text-red-400" /></button>
          </div>
        ))}
        <Pagination data={data} page={page} setPage={setPage} fetchData={()=>fetchData(page+1)} fetchData2={()=>{fetchData(page+1)}} />
      </div>
    </div>
  );
};

export default AdminPage;
