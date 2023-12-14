import ComTittle from "../aoutbired/ComTittle";
import IsecndTitle from "../aoutbired/IsecndTitle";
import EetBirdCalobsat from "../kalobsat/EetBirdCalobsat";
import RedinForLisans from "./RedinForLisans";

export default function FormilaLisansbrabil() {
  return (
    <>
      <ComTittle titls="Information About The Lisansiprabile Bird" />
      <IsecndTitle seindTitle={"I. About Lisansibrabil Birds"} />
      <RedinForLisans />
      <IsecndTitle seindTitle={"II. Eats Fur Canary"} />
      <EetBirdCalobsat />
    </>
  );
}
