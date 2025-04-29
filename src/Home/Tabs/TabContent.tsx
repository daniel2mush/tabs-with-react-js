import {
  Album,
  Cigarette,
  Contact,
  Home,
  Info,
  List,
  Phone,
} from "lucide-react";
import { ReactNode } from "react";
import MyHome from "./TabPages/MyHome";

interface TabContentType {
  id: number;
  name: string;
  icon: ReactNode;
  content: ReactNode;
}

export const TabContent: TabContentType[] = [
  {
    id: 1,
    name: "Home",
    icon: <Home size={15} />,
    content: <MyHome />,
  },
  {
    id: 2,
    name: "About",
    icon: <Info size={15} />,
    content: "Hello",
  },
  {
    id: 3,
    name: "Projects",
    icon: <List size={15} />,
    content: [],
  },
  {
    id: 4,
    name: "Course",
    icon: <Album size={15} />,
    content: [],
  },
  {
    id: 5,
    name: "Contact",
    icon: <Phone size={15} />,
    content: [],
  },
];
