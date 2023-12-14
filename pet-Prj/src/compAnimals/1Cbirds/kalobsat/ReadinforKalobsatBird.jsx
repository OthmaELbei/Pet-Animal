const formilcalobsat = [
  {
    id: 1,
    title: "The Origin Of The Calopsitte Bird",
    p: ` The cockatiel (/ˌkɒkəˈtiːl/;[2] Nymphicus hollandicus), also known as the
     weero/weiro[3][4] or quarrion,[5][6] is a medium-sized[7] parrot that is a member 
     of its own branch of the cockatoo family endemic to Australia. They are prized as household 
     pets and companion parrots throughout the world and are relatively easy to breed. As a caged 
     bird, cockatiels are second in popularity only to the budgerigar.[8] The cockatiel is the only 
     member of the genus Nymphicus. It was previously unclear whether the cockatiel is a 
     crested parakeet or small cockatoo; however, more recent molecular studies have assigned
      it to its own subfamily, Nymphicinae. It is, therefore, now classified as the smallest
       subfamily of the Cacatuidae (cockatoo family). Cockatiels are native to Australia,
        favouring the Australian wetlands, scrublands, and bushlands.`,

    href: "https://en.wikipedia.org/wiki/Cockatiel",
  },

  {
    id: 2,
    title: "Calopsitte Life",
    p: ` Cockatiels are native to Australia, where they are found largely in arid or
     semi-arid country but always close to water. Largely nomadic, the species will move to
      where food and water is available.[8] They are typically seen in pairs or small flocks.
      [8] Sometimes, hundreds will flock around a single body of water. Wild cockatiels typically
       eat seeds, particularly Acacia, wheat, sunflower and Sorghum.[19] To many farmers' dismay, 
       they often eat cultivated crops. Cockatiels may be observed in and around 
       western New South Wales and Queensland, Alice Springs, The Kimberley region and 
       the northwestern corner of Western Australia. They are absent from the most 
       fertile southwest and southeast corners of the country, the deepest Western
        Australian deserts, and Cape York Peninsula`,

    href: "https://en.wikipedia.org/wiki/Cockatiel",
  },

  {
    id: 3,
    title: "Calopsitte Description",
    p: ` The cockatiel's distinctive crest expresses the animal's emotional state.
     The crest is dramatically vertical when the cockatiel is startled or excited,
      gently oblique in its neutral or relaxed state, and flattened close to the head when 
      the animal is angry or defensive. The crest is also held flat but protrudes outward in
       the back when the cockatiel is trying to appear alluring or flirtatious. When the
        cockatiel is tired, the crest is seen positioned halfway upwards, with the tip of
         the crest usually curling upward.[14] In contrast to most cockatoos, the cockatiel
          has long tail feathers roughly making up half of its total length. At 30 to 33 cm 
          (12 to 13 in), the cockatiel is the smallest of the cockatoos, which are generally 
          larger at between 30 and 60 cm (12 and 24 in). The "normal grey" or "wild-type" cockatiel's
           plumage is primarily grey with prominent white flashes on the outer edges of each wing.
            The face of the male is yellow or white, while the face of the female is 
            primarily grey or light grey,[15] and both sexes feature a round orange area on both ears,
             often referred to as "cheddar cheeks". This orange colouration is generally vibrant in adult
              males, and often quite muted in females. Visual sexing is often possible with this variant of
               the bird. Cockatiels are relatively vocal birds, the calls of the male being more varied 
               than that of the female. Cockatiels can be taught to sing specific melodies, to the extent 
               that some cockatiels have been demonstrated synchronizing their melodies with the songs of
                humans,[16] and speak many words and phrases. They have also
     learned to imitate certain human or environmental sounds without being taught how to do so.[17].`,
    href: "https://en.wikipedia.org/wiki/Cockatiel",
  },
];

export default function ReadinforKalobsatBird() {
  return (
    <>
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
    </>
  );
}
