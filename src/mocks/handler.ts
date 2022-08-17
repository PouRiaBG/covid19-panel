import { rest } from "msw";
// import src1 from "/images/covid-image2.webp";
// import src2 from "/images/covid-image2.webp";
// import src3 from "/images/covid-image3.webp";
// import src4 from "/images/covid-image4.jpg";
// import src5 from "/images/covid-image5.jpg";

export const handlers = [
  rest.post("/login", async (req, res, ctx) => {
    console.log({ req });
    return res(
      ctx.cookie('auth-token', 'abc-123'),
    );
  }),
  // rest.get("/user", (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.set("Content-Type", "application/json"),
  //     ctx.json({ name: "pouria" })
  //   );
  // }),
  rest.get("/news", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set("Content-Type", "application/json"),
      ctx.delay(2000),
      ctx.json([
        {
          title: "IRAN",
          content: ` 
          Millions of lives are in peril, including children. US$ 123.7 million is needed for the health agency’s response until December 2022.`,
          src: '/images/covid-image1.webp',
        },
        {
          title: "USA",
          content: ` 
          Millions of lives are in peril,
          including children. US$ 123.7 million is needed for the health agency’s response until December 2022.`,
          src: '/images/covid-image2.webp',
        },
        {
          title: "ENG",
          content: ` 
          Millions of lives are in peril,
          including children. US$ 123.7 million is needed for the health agency’s response until December 2022.`,
          src: '/images/covid-image3.webp',
        },
        {
          title: "IRAN",
          content: ` 
          Millions of lives are in peril,
          including children. US$ 123.7 million is needed for the health agency’s response until December 2022.`,
          src: '/images/covid-image4.jpg',
        },

        {
          title: "IRAN",
          content: ` 
          Millions of lives are in peril,
          including children. US$ 123.7 million is needed for the health agency’s response until December 2022.`,

          src: '/images/covid-image5.jpg',
        },
      ])
    );
  }),
  rest.get("/mostviewed", (req, res, ctx) => {
    const date = new Date();
    const todayDate = date.toDateString();
    const list = new Array(4).fill({
      title: "CORONAVIRUS",
      content:
        "Lorem ipsum dolor sit amet.Et quam consequatur At architecto corporis ea itaque distinctio vel nobis architecto ut nostrum ipsum commod i repellendu",
      date: todayDate,
    });
    return res(ctx.delay(1000), ctx.json(list));
  }),
];
