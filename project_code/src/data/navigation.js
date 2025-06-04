import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { MdDateRange, MdAddBox } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";

import { IoIosCall } from "react-icons/io";
import { MdSupportAgent, MdSettings } from "react-icons/md";

import { PiChatTeardropDotsDuotone } from "react-icons/pi";
export const navigationLinks = [
  { label: 'Dashboard', icon: RxDashboard },
  { label: 'History', icon: LuArrowDownUp },
  { label: 'Calendar', icon: MdDateRange },
  { label: 'Appointments', icon: MdAddBox },
  { label: 'Statistics', icon: FcStatistics },
  { label: 'Chat', icon: PiChatTeardropDotsDuotone },
  { label: 'Call', icon: IoIosCall },
];
