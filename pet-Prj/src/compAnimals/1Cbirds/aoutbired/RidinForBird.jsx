const formilCanare = [
  {
    id: 1,
    title: "The Origin Of The Canary Bird",
    p: `  The canary is native to the Canary, Azores, and Madeira islands. The
        wild form is streak-backed and mostly greenish brown. Among other
        members of the genus are the serin of Europe and the brimstone canary,
        or bully seedeater (S. sulphuratus) of Africa, which is also kept as a
        pet.`,
    href: "https://www.omlet.co.uk/guide/finches_and_canaries/canary/canary_varieties/",
  },

  {
    id: 2,
    title: "Canary Life Span",
    p: `   While the average life expectancy of a domestic canary is between
        9 and 10 years, individual birds might live up to 15 years. In the
        wild, canaries might live even longer, if they escape predators
        and have a good food supply.`,
    href: "https://canarybirdsinfo.com/how-long-do-canaries-live/",
  },

  {
    id: 3,
    title: "Types Of Canary Birds",
    p: ` Border Canary. Crested Canary. Frilled Canary. Gloster Canary.
        Lizard Canary. Rubino Canary. Scotch Fancy Canary.`,
    href: "https://www.omlet.co.uk/guide/finches_and_canaries/canary/canary_varieties/",
  },
];

export default function RidinForBird() {
  return (
    <>
      <div className="row ">
        {formilCanare.map((form) => (
          <div key={form.id}>
            <div id={form.id} className="Origin">
              <h1 className="titl-Origin">{form.title}</h1>
              <p className="P-origin-Canr">{form.p}</p>
              <a target="_blank" href={form.href} rel="noreferrer">
                red more about it ...
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
