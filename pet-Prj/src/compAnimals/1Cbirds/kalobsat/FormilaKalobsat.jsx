// import ComTittle from "./aoutbired/ComTittle";

import ComTittle from "../aoutbired/ComTittle";
import IsecndTitle from "../aoutbired/IsecndTitle";
import EetBirdCalobsat from "./EetBirdCalobsat";
import ReadinforKalobsatBird from "./ReadinforKalobsatBird";

export default function FormilaKalobsat() {
  return (
    <>
      <ComTittle titls="Information About The Calobsit Bird" />
      <IsecndTitle seindTitle={"I. About Calobsit Birds"} />
      <ReadinforKalobsatBird />
      <IsecndTitle seindTitle={"II. Eats Fur Calobsat"} />
      <EetBirdCalobsat />
    </>
  );
}
