import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

type Props = {data: any[], page: number, setPage:any, fetchData:any, fetchData2:any};

const Pagination = ({data, page, setPage, fetchData, fetchData2}: Props) => {
  return (
    <div className="mt-4 mb-8 flex justify-center space-x-4 items-center">
      <button
        onClick={() => {
          if (page > 1) {
            setPage((prev:any) => prev - 1);
            fetchData2();
          }
        }}
      >
        <GoTriangleLeft style={{ fontSize: "1.5rem", color: "#0EA5E9" }} />
      </button>
      <p className="font-lexend text-sky-500 font-semibold">{page}</p>
      <button
        onClick={() => {
          if (data && data?.length > 0) {
            setPage((prev:any) => prev + 1);
            fetchData();
          }
        }}
      >
        <GoTriangleRight style={{ fontSize: "1.5rem", color: "#0EA5E9" }} />
      </button>
    </div>
  );
};

export default Pagination;
