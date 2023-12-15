import ComTittle from "../aoutbired/ComTittle";
import IsecndTitle from "../aoutbired/IsecndTitle";
import EatMondran from "./EatMondran";
import RidenforMondarn from "./RidenforMondarn";

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
