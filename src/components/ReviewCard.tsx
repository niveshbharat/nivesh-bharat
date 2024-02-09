"use client";
import Image from "next/image";

type Props = {
  name: string;
  designation: string;
  desc: string;
  imageURL: any;
  linkedin?: string;
  instagram?: string;
};

const ReviewCard = ({
  name,
  designation,
  desc,
  imageURL,
  linkedin,
  instagram,
}: Props) => {
  return (
    <div className="shadow-lg bg-p_green-100 py-10 md:px-10 flex flex-col md:flex-row md:justify-between md:divide-x-2 space-x-2 items-center max-w-[640px] flex-shrink-0 snap-center rounded-xl divide-y-2 divide-neutral-200 md:divide-y-0">
      <div className="relative pb-5 md:pb-0 md:pr-5">
        <Image
          width={200}
          height={200}
          src={imageURL}
          alt={name}
          className="object-cover rounded-full aspect-square"
        />
      </div>
      <div className="md:pl-10 w-[75%] pt-5 md:pt-0 ">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{designation}</p>
        <p className="mt-2 max-w-[75vw] md:max-w-full text-sm text-zinc-700">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
