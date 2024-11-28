import Lorem from "./Lorem";
import Registration from "./Registration";

export default function Register() {
  return (
    <div className="flex flex-row justify-around w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center">
      <Lorem />
      <Registration />
    </div>
  );
}
