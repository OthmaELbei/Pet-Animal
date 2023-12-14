const formilcalobsat = [
  {
    id: 1,
    title: "The Origin Of The Lesansiprabel Bird",
    p: ` Birds show that they are bonded with their mates with courtship behaviour like
     preening one another or sharing food: both gentle signs of affection. There is often 
     a period of courtship for birds – dating 
    in modern terms. From claiming territory to wooing a mate before actual copulation (mating) occurs.`,

    href: "https://lafeber.com/pet-birds/species/lovebird/l",
  },

  {
    id: 2,
    title: "Lesansebarapel Life",
    p: ` lovebird might be one of the smaller parrot species available as a companion pet
    , but this bird is inquisitive and seemingly always on the go. As their name suggests,
     lovebirds are known for the loving, attentive bond they tend to form with their mates.`,

    href: "https://lafeber.com/pet-birds/species/lovebird/",
  },
  {
    id: 3,
    title: "Lesansebarapel Description",
    p: ` Most lovebird species are native to the continent of Africa;
     the exception is the Madagascar (grey-headed) lovebird, 
     which is native to the island of Madagascar. Of the nine species of lovebirds,
      six are listed as Least Concern by the International Union for Conservation of
       Nature and Natural Resources. However, three of the species have some endangerment
        concerns. The Fischer’s lovebird and Nyasa lovebird are both Near-Threatened, which
         is one step closer to Endangered than the six species. The black-cheeked lovebird 
         is the most endangered in the wild of all the lovebirds.
     It is listed as Vulnerable, which is only one step away from Endangered.`,
    href: "https://lafeber.com/pet-birds/species/lovebird/",
  },
];
export default function RedinForLisans() {
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
