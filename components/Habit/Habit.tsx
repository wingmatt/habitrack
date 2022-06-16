import { WiSunrise, WiDaySunny } from "react-icons/wi";
import { BsMoonStars } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

export default function Habit() {
  return (
    <li>
      <WiSunrise />
      <span>Water Plants</span>
      <span>Next: 6/16/22</span>
      <FaEdit />
    </li>
  );
}
