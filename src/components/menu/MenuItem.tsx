import {
  IconChartBar,
  IconChartLine,
  IconHistory,
  IconLogin,
  IconLogout,
  IconPlus,
} from "@tabler/icons-react";

export interface MenuItem {
  icon: React.ReactNode;
  link: string;
  mainAction?: boolean;
  authState?: "logged-in" | "logged-out";
}

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: <IconLogin />,
    link: "/login",
    authState: "logged-out",
  },
  {
    icon: <IconPlus />,
    link: "https://docs.google.com/spreadsheets/d/1chMD7-jIt8_4KSgcOZDkC_585h-DJU_VY4Z7b2vvvbk/edit#gid=822958200",
    mainAction: true,
    authState: "logged-in",
  },
  {
    icon: <IconChartBar />,
    link: "/stats",
  },
  {
    icon: <IconChartLine />,
    link: "https://docs.google.com/spreadsheets/d/1chMD7-jIt8_4KSgcOZDkC_585h-DJU_VY4Z7b2vvvbk/edit#gid=782332631",
  },
  {
    icon: <IconHistory />,
    link: "/history",
  },
  {
    icon: <IconLogout />,
    link: "/logout",
    authState: "logged-in",
  },
];
