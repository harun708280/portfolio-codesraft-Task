import { Marquee } from "@/components/magicui/marquee";
import { ShineBorder } from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils";


const reviews = [
  {
    body: "html",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746199960/html-5-svgrepo-com_ohq6yu.svg",
  },
  {
    body: "css",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200067/css-3-svgrepo-com_m8hvlz.svg",
  },
  {
    body: "Bootstrap",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200065/bootstrap-svgrepo-com_czo1di.svg",
  },
  {
    body: "tailwind css",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200065/tailwindcss-icon-svgrepo-com_qqyqku.svg",
  },
  {
    body: "javascript",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200065/javascript-svgrepo-com_p1d06g.svg",
  },
  {
    body: "react",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200065/react-svgrepo-com_cjuhef.svg",
  },
  {
    body: "redux",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200067/redux-svgrepo-com_zd0hvw.svg",
  },
  {
    body: "typescript",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200065/typescript-official-svgrepo-com_wfndsv.svg",
  },
  {
    body: "next js",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200065/next-js-svgrepo-com_sbzzlx.svg",
  },
  {
    body: "node js",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200070/node-js-svgrepo-com_wc1uqm.svg",
  },
  {
    body: "express js",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200070/express-svgrepo-com_lucuds.svg",
  },
  {
    body: "mongodb",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200070/mongo-svgrepo-com_szq9t4.svg",
  },
  {
    body: "mongoose",
    img: "https://res.cloudinary.com/dowpaz8fo/image/upload/v1746200730/mongoose_y18rc5.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, body }) => {
  return (
    <div
      className={cn(
        "relative z-50 cursor-pointer overflow-hidden rounded-xl border mt-8 mb-2",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
      style={{
        backgroundColor: "#0e051a",
        width: "109px",
        height: "101px",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <ShineBorder shineColor={["#A07CFE", "#bdacff"]} />
        <img
          className="rounded-full h-10"
          
          src={img}
        />
        <h4 className="text-base text-center">{body}</h4>
      </div>
    </div>
  );
};

export function SkillCard() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-4">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
