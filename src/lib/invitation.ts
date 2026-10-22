import heroHome from "@/assets/hero-home.jpg";
import roomLiving from "@/assets/room-living.jpg";
import roomDining from "@/assets/room-dining.jpg";
import roomTerrace from "@/assets/room-terrace.jpg";

/**
 * All invitation content in one place — dummy data, ready to be swapped
 * with the real family, date and venue later.
 */

export const invitation = {
  family: "The Ahmed Family",
  hosts: ["Imran", "Ayesha"],
  kids: ["Zoya", "Rayan"],
  tagline: "A new door opens. A lifetime of memories begins.",
  addressLine: "No. 42, Rose Villa · Palm Grove Lane",
  city: "Indiranagar, Bengaluru 560038",

  event: {
    title: "Housewarming",
    weekday: "Sunday",
    dateLong: "6 December 2026",
    // Main ceremony time (IST) — drives the countdown
    startsAt: "2026-12-06T11:00:00+05:30",
    startTime: "11:00 AM",
    endTime: "4:00 PM",
    calendar:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Housewarming+%C2%B7+The+Ahmed+Family&dates=20261206T053000Z/20261206T103000Z&details=House+blessing+ceremony+and+lunch+at+Rose+Villa&location=No.+42,+Rose+Villa,+Palm+Grove+Lane,+Indiranagar,+Bengaluru",
  },

  schedule: [
    {
      time: "10:30 AM",
      title: "Guests Arrive & Welcome",
      note: "Coffee, sharbat and sweets at the doorstep — come in, take off your shoes, feel at home.",
    },
    {
      time: "11:15 AM",
      title: "House Blessing Ceremony",
      note: "We carry the lamp through every room and ask for blessings on this new beginning.",
    },
    {
      time: "12:30 PM",
      title: "Lunch & Celebration",
      note: "A long, loud family lunch — biryani, kebabs and Ayesha's famous sheer khurma.",
    },
    {
      time: "3:00 PM",
      title: "Open House & Tea",
      note: "The full house tour — every room, every corner. Ask to see Zoya's reading nook.",
    },
  ],

  rooms: [
    {
      image: roomLiving,
      name: "The Living Room",
      caption: "Where evenings unfold over chai, card games and half-finished conversations.",
    },
    {
      image: roomDining,
      name: "The Dining Room",
      caption: "A table built for twelve — and for every festival, feast and Friday lunch.",
    },
    {
      image: roomTerrace,
      name: "The Terrace Garden",
      caption: "Twelve pots, two lemon trees and the best sunset in the neighbourhood.",
    },
  ],

  seedWishes: [
    {
      name: "Farhan",
      message:
        "May your new home be filled with laughter louder than the doorbell. Congratulations!",
      date: "2 Dec",
    },
    {
      name: "Sana & Vikram",
      message: "First toast on your terrace is on us. So happy for you both!",
      date: "3 Dec",
    },
    {
      name: "Ammi",
      message: "A home is made of prayers and patience. You have both. Blessings always.",
      date: "4 Dec",
    },
    {
      name: "The Kapoor Cousins",
      message: "Housewarming party guests — we're already on our way. Save us the corner sofa!",
      date: "5 Dec",
    },
  ],
} as const;

export const eventDate = new Date(invitation.event.startsAt);
