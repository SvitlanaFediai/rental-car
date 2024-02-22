import img01 from "../../img/blog-img/drive.jpg";
import img02 from "../../img/blog-img/pexels-pixabay-104836.jpg";
import img03 from "../../img/blog-img/trip.jpg";
import img04 from "../../img/blog-img/licence.jpg";
import img05 from "../../img/blog-img/insurance.jpg";
import img06 from "../../img/blog-img/rent.jpg";

import ava1 from "../../img/expert/2exp.jpg";
import ava2 from "../../img/expert/3exp.jpg";
import ava3 from "../../img/reviews/ava-3.jpg";
import ava4 from "../../img/ava-4.jpg";
import ava5 from "../../img/ava-5.jpg";
import ava6 from "../../img/ava-6.jpg";
import ava7 from "../../img/ava-7.jpg";
import ava8 from "../../img/ava-8.jpg";

const blogData = [
  {
    id: 1,
    title: "The best way to drive cars",
    author: "Oliver",
    date: "12 Dec, 2022",
    time: "9pm",
    imgUrl: img01,
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    quote:
      "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
    comments: [
      {
        id: 1,
        name: "Mary Kay",
        date: "01 Jan 2023",
        comment:
          "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. ",
        ava: ava6,
        childrenComments: [],
      },
      {
        id: 2,
        name: "Dionis Mark",
        date: "16 March 2023",
        comment:
          "Dolor labore lorem no accusam sit justo sadipscing labore invidunt.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua. At diam. ",
        ava: ava1,
        childrenComments: [],
      },
      {
        id: 3,
        name: "Cris Moongoose",
        date: "07 Jun 2023",
        comment:
          "Dolor labore lorem no accusam sit justo. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua. lorem no accusam sit justo sadipscing labore invidunt voluptua",
        ava: ava2,
        childrenComments: [],
      },
    ],
  },

  {
    id: 2,
    title: "If your car battery is down",
    author: "Chirstopher",
    date: "16 March, 2023",
    time: "6pm",
    imgUrl: img02,
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    quote:
      "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
    comments: [
      {
        id: 1,
        name: "Maria Dolores",
        date: "25 Jul 2023",
        comment:
          "Dolor labore lorem no accusam sit justo sadipscing. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua",
        ava: ava7,
        childrenComments: [],
      },
      {
        id: 2,
        name: "Mattew Crop",
        date: "08 Oct 2023",
        comment:
          "At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua. lorem no accusam sit justo sadipscing labore invidunt voluptua",
        ava: ava4,
        childrenComments: [],
      },
      {
        id: 3,
        name: "Lui Sanches",
        date: "21 Oct 2023",
        comment:
          "Dolor labore lorem no accusam sit voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
        ava: ava5,
        childrenComments: [
          {
            id: 4,
            name: "Dolly Moris",
            date: "31 Dec 2023",
            comment:
              "Dolor labore lorem no accusam sit justo. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua",
            ava: ava8,
            childrenComments: [],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "The best way to give trip",
    author: "Oliver",
    date: "07 Nov, 2023",
    time: "4pm",
    imgUrl: img03,
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    quote:
      "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
    comments: [
      {
        id: 1,
        name: "Karen Simpson",
        date: "12 Jul 2023",
        comment:
          "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua",
        ava: ava7,
        childrenComments: [],
      },
      {
        id: 2,
        name: "Harry Calambet",
        date: "23 Dec 2023",
        comment:
          "At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua",
        ava: ava3,
        childrenComments: [],
      },
    ],
  },

  {
    id: 4,
    title: "How to obtain a new Spanish driving licence",
    author: "Miley",
    date: "10 Jan, 2023",
    time: "10am",
    imgUrl: img04,
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    quote:
      "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
    comments: [
      {
        id: 1,
        name: "Mike Li",
        date: "11 Jan 2023",
        comment:
          "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore.",
        ava: ava5,
        childrenComments: [],
      },
      {
        id: 2,
        name: "Mattew Crop",
        date: "28 Oct 2023",
        comment:
          "At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua",
        ava: ava1,
        childrenComments: [],
      },
      {
        id: 3,
        name: "Harry Calambet",
        date: "03 Dec 2023",
        comment:
          "At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua. lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor.",
        ava: ava4,
        childrenComments: [],
      },
    ],
  },

  {
    id: 5,
    title: "Travel Insurance: How to Find the Best",
    author: "Rick",
    date: "11 Nov, 2023",
    time: "09am",
    imgUrl: img05,
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    quote:
      "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
    comments: [],
  },

  {
    id: 6,
    title: "Car Rental. Search, Compare and Save",
    author: "Oliver",
    date: "22 Nov, 2022",
    time: "04pm",
    imgUrl: img06,
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    quote:
      "Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.",
    comments: [
      {
        id: 1,
        name: "Cris Moongoose",
        date: "17 Jun 2023",
        comment:
          "Dolor labore lorem no accusam sit justo. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua",
        ava: ava2,
        childrenComments: [],
      },
      {
        id: 2,
        name: "Dionis Mark",
        date: "16 May 2023",
        comment:
          "Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua. Dolor labore lorem invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing dolor. At diam.",
        ava: ava4,
        childrenComments: [],
      },
    ],
  },
];

export default blogData;
