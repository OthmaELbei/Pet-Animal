const formilcalobsat = [
  {
    id: 1,
    title: "The Origin Of The Zibra Bird",
    p: ` Zebra Finches are mainly grey, with characteristic black 'tear drop'
     eye stripes and 'zebra like' black and white barring on the rump and upper tail
     . The throat and upper breast are pale grey,
     with fine black barring, and there is a broad black band on upper chest.`,

    href: "https://australian.museum/learn/animals/birds/zebra-finch-taeniopygia-guttata/#:~:text=Zebra%20Finches%20are%20mainly%20grey,black%20band%20on%20upper%20chest.",
  },

  {
    id: 2,
    title: "Zibra Life",
    p: ` Zebra Finches are most commonly found in the drier areas of Australia,
     living year round in social flocks of up to 100 or more birds.
      They can be found in a variety of habitats,
     mainly dry wooded grasslands, bordering watercourses.`,

    href: "https://australian.museum/learn/animals/birds/zebra-finch-taeniopygia-guttata/#:~:text=Zebra%20Finches%20are%20mainly%20grey,black%20band%20on%20upper%20chest.",
  },

  {
    id: 3,
    title: "Zibra Description",
    p: ` Zebra Finches are the most common and widespread of Australia's grassfinches,
     found across the Australian mainland, with the exception of 
     Cape York Peninsula and some coastal areas.
     They are also found in Timor and the Lesser Sunda Islands`,
    href: "https://australian.museum/learn/animals/birds/zebra-finch-taeniopygia-guttata/#:~:text=Zebra%20Finches%20are%20mainly%20grey,black%20band%20on%20upper%20chest.",
  },
];
export default function RidenforMondarn() {
  return (
    <>
      <div className="row ">
        {formilcalobsat.map((form) => (
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
