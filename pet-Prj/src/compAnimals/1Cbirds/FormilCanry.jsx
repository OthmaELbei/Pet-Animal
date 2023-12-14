import ComTittle from "./aoutbired/ComTittle";
import EatBird from "./aoutbired/EatBird";
import IsecndTitle from "./aoutbired/IsecndTitle";
import RidinForBird from "./aoutbired/RidinForBird";

export default function FormilCanry() {
  return (
    <>
      <ComTittle titls="Information About The Canary Bird" />
      <IsecndTitle seindTitle={"I. About Canary Birds"} />
      <RidinForBird />
      <IsecndTitle seindTitle={"II. Eats Fur Canary"} />
      <EatBird />
    </>
  );
}
