const eatcanare = [
  {
    id: 1,
    title: "When It Is A Byby",
    Peat: ` Baby canary birds eat nesting food which may differ from seeds to
        green supplies. Baby canary birds can also digest the seeds
        supplied by their parents. However, for healthy and active canary
        babies, nesting food along with green food supplements is
        necessary. There are also readymade food/ seed supplements for the
        baby canary birds available in the market which need to be mixed
        either with water or sometimes with milk to be provided to chicks.`,
    images: {
      ima1: "/public/eat-can.jpg",
      ima2: "/public/eat-can2.jpg",
      ima3: "/public/eat-can3.jpg",
      ima4: "/public/eat-can4.jpg",
      ima5: "/public/eat-can5.jpg",
    },

    bybyImage: "/public/bayb-can.jpg",
  },
  {
    id: 2,
    title: "When It Is A Grow",
    Peat: `    Captive Canary diets often try to mimic what they’d eat in the
    wild. However, the best diet for a captive Canary is pelleted
    food, which is fully balanced. They are nutritious and contain all
    the protein, vitamins, minerals, fat, and fiber that a Canary
    needs to thrive. Pellets should make up around 75–80% of their
    total diet. However, many caged birds are fed on seed mixes. While
    the birds enjoy seeds, pelleted food is the best option for
    Canaries in captivity. The rest of a captive Canary’s diet should
    consist of 20%–25% fruit and vegetables. Grapes, apples, papaya,
    celery, spinach, and kale are all healthy additions to the bird’s
    diet.`,
    images: {
      ima1: "/public/eat-can6.jpg",
      ima2: "/public/eat-can7.jpg",
      ima3: "/public/eat-can8.jpg",
      ima4: "/public/eat-can9.jpg",
      ima5: "/public/eat-lesans1.jpg",
    },

    bybyImage: "/public/bayb-can.jpg",
  },
];

export default function EatBird() {
  return (
    <>
      {eatcanare.map((eatcn) => (
        <div key={eatcn.id}>
          <h5 className="seconed-title">{eatcn.title}</h5>
          <div id={eatcn.id} className="for-paby-fod row">
            <div className="foodCnary col-8  ">
              <p className="prag-fod-byb"> {eatcn.Peat} </p>

              <div className="img_fod row row-cols-4">
                <img
                  className=" col img-fod-canare"
                  src={eatcn.images.ima1}
                  alt=""
                />
                <img
                  className=" col img-fod-canare"
                  src={eatcn.images.ima2}
                  alt=""
                />
                <img
                  className=" col img-fod-canare"
                  src={eatcn.images.ima3}
                  alt=""
                />
                <img
                  className="col img-fod-canare"
                  src={eatcn.images.ima4}
                  alt=""
                />
                <img
                  className=" col img-fod-canare"
                  src={eatcn.images.ima5}
                  alt=""
                />
              </div>
            </div>
            <div className="image-byb-canary col-4  ">
              <img src={eatcn.bybyImage} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
