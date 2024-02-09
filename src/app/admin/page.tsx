"use client";
import Pagination from "@/components/Pagination";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";

type Props = {};

type Item = {
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const AdminPage = (props: Props) => {
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [page, setPage] = useState(1);
  const [secret, setSecret] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.post("/api/admin", { secret, page: page + 1, limit: 10 });
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      alert("Error");
      setData([]);
    }
  };

  const fetchData2 = async () => {
    try {
      const res = await axios.post("/api/admin", { secret, page: page - 1, limit: 10 });
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
          <div key={index} className="bg-zinc-800 mx-20 cursor-default hover:scale-105 p-8 rounded-xl my-8 transition-all">
            <p className="text-zinc-500">
              <span className="font-bold ">Date:</span>{" "}
              {item.createdAt.slice(0, 10)}
            </p>
            <p className="text-zinc-500">
              <span className="font-bold ">Name:</span> {item.name}
            </p>
            <p className="text-zinc-500">
              <span className="font-bold ">Email:</span> {item.email}
            </p>
            <p className="text-zinc-500">
              <span className="font-bold ">Message:</span> {item.message}
            </p>
          </div>
        ))}
        <Pagination data={data} page={page} setPage={setPage} fetchData={fetchData} fetchData2={fetchData2} />
      </div>
    </div>
  );
};

export default AdminPage;
