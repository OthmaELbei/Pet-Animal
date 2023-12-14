// import ComTittle from "../aoutbired/ComTittle";
import ComTittle from "../aoutbired/ComTittle";
import IsecndTitle from "../aoutbired/IsecndTitle";
import EatMondran from "./EatMondran";
import RidenforMondarn from "./RidenforMondarn";
// import IsecndTitle from "../aoutbired/IsecndTitle";
// import EetBirdCalobsat from "./EetBirdCalobsat";
// import ReadinforKalobsatBird from "./ReadinforKalobsatBird";

export default function FormilarMondran() {
  return (
    <>
      <ComTittle titls="Information About The Mandran Bird" />
      <IsecndTitle seindTitle={"I. About Calobsit Birds"} />
      <RidenforMondarn />
      <IsecndTitle seindTitle={"II. Eats Fur Zibra"} />
      <EatMondran />
    </>
  );
}
