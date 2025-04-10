"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLordsPrice } from "@/hooks/useLordsPrice";
import Album from "@/icons/album.svg";
import Bookmark from "@/icons/bookmark.svg";
import Bridge from "@/icons/bridge.svg";
import Calender from "@/icons/calendar.svg";
import Coins from "@/icons/coins.svg";
import Crown from "@/icons/crown.svg";
import Discord from "@/icons/discord.svg";
import Gamepad from "@/icons/gamepad.svg";
import LordsIcon from "@/icons/lords.svg";
import PieChart from "@/icons/pie-chart.svg";
import RealmsL3 from "@/icons/realms_l3.svg";
import RWLogo from "@/icons/rw-logo.svg";
import SideHeaderImg from "@/icons/side-header.svg";
import { Github, Twitter } from "lucide-react";

import { Button, ScrollArea } from "@realms-world/ui";

import { useUIContext } from "../providers/UIProvider";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUIContext();

  const { lordsPrice } = useLordsPrice();

  const router = useRouter();
  const menu = [
    {
      name: "Games",
      href: "/games",
      icon: <Gamepad className="w-[29px] fill-current" />,
    },
    {
      name: "Collections",
      href: "/collection",
      icon: <Album className="w-[25px]" />,
    },
    {
      name: "Tokenomics",
      href: "/tokenomics",
      icon: <PieChart className="w-[25px]" />,
    },
    {
      name: "Realms L3",
      href: "/network",
      icon: <RealmsL3 className="w-[25px] fill-current" />,
    },
    {
      name: "Events",
      href: "/events",
      icon: <Calender className="w-[25px]" />,
    },
    {
      name: "Notes",
      href: "/blog",
      icon: <Bookmark className="w-[25px]" />,
    },
    {
      name: "Bridge",
      href: "/bridge",
      icon: <Bridge className="w-[25px]" />,
    },
    {
      name: "Staking",
      href: "/staking",
      icon: <Coins className="w-[25px]" />,
    },
  ];

  const social = [
    {
      name: "Discord",
      href: "https://discord.gg/realmsworld",
      icon: <Discord className="w-8 fill-current" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/lootrealms?lang=en",
      icon: <Twitter />,
    },
    {
      name: "Github",
      href: "https://github.com/BibliothecaDAO",
      icon: <Github />,
    },
  ];

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "bg-dark-green" : "hidden"
      } z-100 group fixed bottom-0 top-0 z-20 h-screen w-screen flex-col border-r-[3px] bg-dark-green transition-all duration-500 md:flex md:w-[102px] md:hover:w-60`}
    >
      <div className="absolute mx-4">
        <SideHeaderImg className="w-full opacity-0 group-hover:opacity-100" />
      </div>
      <Link
        className="absolute z-20 mx-auto flex w-full justify-center p-4 font-sans-serif text-xl font-semibold group-hover:pt-2.5 sm:text-2xl "
        href="/"
        onClick={toggleSidebar}
      >
        <Crown className="absolute w-14 group-hover:opacity-0" />
        <RWLogo className="absolute w-[152px] fill-white opacity-0 transition-all duration-500 group-hover:opacity-100" />
      </Link>
      <div className="mt-16 h-full w-full border-t-[3px] pb-3">
        <div className="relative z-10 m-2 mt-0 h-full border-[3px] border-t-0 border-solid border-transparent group-hover:!border-medium-dark-green">
          <div className="relative flex h-full flex-col items-center">
            <ScrollArea className="w-full">
              <div className="relative z-[2] inline-flex w-full flex-[0_0_auto] flex-col items-start justify-center gap-[17px] px-4 md:mb-6 md:mt-10">
                {menu.map((item, index) => {
                  return (
                    <Button
                      className="group flex w-full justify-normal px-2 text-lg font-semibold normal-case transition-all duration-200"
                      key={index}
                      variant={"ghost"}
                      onClick={() => {
                        handleClick(item.href);
                        toggleSidebar();
                      }}
                    >
                      <span className="absolute">{item.icon}</span>

                      <span className="visible absolute pl-9 opacity-100 transition-opacity group-hover:visible group-hover:flex group-hover:opacity-100 group-hover:delay-150 group-hover:duration-500 sm:opacity-0 ">
                        {item.name}
                      </span>
                    </Button>
                  );
                })}
              </div>
            </ScrollArea>

            <div className="w-full px-2">
              <hr className="mb-4 border-b-[3px]" />
            </div>
            <Button
              href="/swap"
              variant={"outline"}
              className="mt-3 flex h-16 flex-col rounded p-2 pt-3 font-sans"
            >
              <div className="h-8">
                <LordsIcon className="mx-auto h-6 w-6 fill-bright-yellow pb-1" />
              </div>
              {lordsPrice.usdPrice}
            </Button>

            <div className=" flex pt-8 sm:mt-auto sm:flex-col sm:space-y-2">
              {social.map((item, index) => {
                return (
                  <Button
                    external
                    variant={"ghost"}
                    href={item.href}
                    key={index}
                  >
                    {item.icon}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
