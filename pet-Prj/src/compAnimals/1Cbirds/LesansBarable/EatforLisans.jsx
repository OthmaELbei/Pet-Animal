const eatLisans = [
  {
    id: 1,
    title: "When It Is A Byby",
    Peat: ` Baby canary birds eat nesting food which may differ from seeds to green supplies
    . Baby canary birds can also digest the seeds supplied by their parents. However,
     for healthy and active canary babies, nesting food along with green food supplements is necessary.
      There are also readymade food/ seed supplements for the baby canary birds available in the 
    market which need to be mixed either with water or sometimes with milk to be provided to chicks.`,
    images: {
      ima1: "/public/eat-lesans1.jpg",
      ima2: "/public/eat-lesans3.jpg",
      ima3: "/public/eat-lesans5.jpg",
      ima4: "/public/eat-lesans4.jpg",
      ima5: "/public/eat-lesans2.jpg",
    },

    bybyImage: "/public/bayb-lesans.jpg",
  },
  {
    id: 2,
    title: "When It Is A Grow",
    Peat: ` Captive Canary diets often try to mimic what they’d eat in the wild
    . However, the best diet for a captive Canary is pelleted food, which is fully balanced.
     They are nutritious and contain all the protein, vitamins, minerals, fat, and fiber that 
     a Canary needs to thrive. Pellets should make up around 75–80% of their total diet. However,
      many caged birds are fed on seed mixes. While the.`,
    images: {
      ima1: "/public/eat-lesans1.jpg",
      ima2: "/public/eat-lesans2.jpg",
      ima3: "/public/eat-lesans5.jpg",
      ima4: "/public/eat-lesans3.jpg",
      ima5: "/public/eat-lesans4.jpg",
    },

    bybyImage: "/public/lesans-bird5.jpg",
  },
];
export default function EatforLisans() {
  return (
    <>
      {eatLisans.map((eatcn) => (
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
