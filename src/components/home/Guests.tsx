import { Tab } from "@headlessui/react";
import {
  HiOutlineCamera,
  HiOutlineLightningBolt,
  HiOutlineVideoCamera,
} from "react-icons/hi/index.js";
import GuestCard from "./GuestCard";

type Props = {
  className?: string;
};

export default function Guests({ className = "" }: Props) {
  return (
    <Tab.Group
      as="div"
      className={`overflow-visible lg:flex lg:gap-10 ${className}`}
    >
      <Tab.List
        className={
          "flex w-auto gap-5 overflow-x-auto px-1 py-4 lg:shrink-0 lg:flex-col lg:gap-10 lg:p-0"
        }
      >
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left outline-none transition-colors duration-200"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left outline-none transition-colors duration-200 hover:bg-gray-700/30"
          }
        >
          <HiOutlineCamera className="text-3xl text-primary lg:text-4xl" />
          <span className="text-2xl font-bold">Fotka</span>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </span>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left outline-none transition-colors duration-200"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left outline-none transition-colors duration-200 hover:bg-gray-700/30"
          }
        >
          <HiOutlineVideoCamera className="text-3xl text-primary lg:text-4xl" />
          <span className="text-2xl font-bold">Video</span>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </span>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left outline-none transition-colors duration-200"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left outline-none transition-colors duration-200 hover:bg-gray-700/30"
          }
        >
          <HiOutlineLightningBolt className="text-3xl text-primary lg:text-4xl" />
          <span className="text-2xl font-bold">Ostatní</span>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            dolorum.
          </span>
        </Tab>
      </Tab.List>
      <Tab.Panels className={"w-full py-10 lg:py-0 lg:px-5"}>
        <Tab.Panel
          className={
            "grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 md:gap-x-12 md:gap-y-20 xl:grid-cols-3"
          }
        >
          <GuestCard className="xs:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-200" />
          <GuestCard className="xs:reveal-delay-100 xl:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-100 xl:reveal-delay-200" />
          <GuestCard className="xs:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-200" />
        </Tab.Panel>
        <Tab.Panel
          className={
            "grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 md:gap-x-12 md:gap-y-20 xl:grid-cols-3"
          }
        >
          <GuestCard className="xs:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-200" />
          <GuestCard className="xs:reveal-delay-100 xl:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-100 xl:reveal-delay-200" />
          <GuestCard className="xs:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-200" />
        </Tab.Panel>
        <Tab.Panel
          className={
            "grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 md:gap-x-12 md:gap-y-20 xl:grid-cols-3"
          }
        >
          <GuestCard className="xs:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-200" />
          <GuestCard className="xs:reveal-delay-100 xl:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-100 xl:reveal-delay-200" />
          <GuestCard className="xs:reveal-delay-0" />
          <GuestCard className="xs:reveal-delay-100" />
          <GuestCard className="xs:reveal-delay-0 xl:reveal-delay-200" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
