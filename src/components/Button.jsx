
import CoolMode from "./ui/ButtonAnimation";

export function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <button  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Click Me!</button>
      </CoolMode>
    </div>
  );
}
