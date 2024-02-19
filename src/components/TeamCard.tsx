"use client";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";

type Props = {
  name: string;
  designation: string;
  education: string;
  imageURL: any;
  linkedin?: string;
  instagram?: string;
  desc: string;
};

const TeamCard = ({
  name,
  designation,
  education,
  desc,
  imageURL,
  linkedin,
  instagram,
}: Props) => {
  return (
    <div className="text-white snap-center w-[80vw] max-w-[550px] flex-shrink-0 bg-p_darkgreen flex gap-4 items-center flex-col rounded-lg p-10">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-between items-center">
        <Image
          className="object-cover rounded-full aspect-square border bg-p_green-100 border-p_green-600"
          width={150}
          height={150}
          src={imageURL}
          alt={name}
        />
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-bold sm:text-xl">{name}</h3>
          <p className="text-body ">{designation}</p>
          <p className="text-body ">{education}</p>
          <div className="flex justify-center space-x-4">
            {instagram && (
              <Link
                href={instagram}
                aria-label="Checkout Instagram"
                target="_blank"
                className="mt-4"
              >
                <BiLogoInstagramAlt className="w-[32px] h-10 text-primary" />
              </Link>
            )}
            {linkedin && (
              <Link
                href={linkedin}
                aria-label="Checkout Linkedin"
                target="_blank"
              >
                <BsLinkedin className="w-[24px] h-10 text-primary" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <p className="sm:mt-2 text-[13px]">{desc}</p>
    </div>
  );
};

export default TeamCard;
