import { Button } from "./ui/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/Drawer";

export function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-center border border-green-500 text-green-500 rounded-md outline-none lg:hidden ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-align-right"
          >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="21" x2="9" y1="12" y2="12" />
            <line x1="21" x2="7" y1="18" y2="18" />
          </svg>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <div className="p-4 pb-0">
            <ul class="flex flex-col items-center ">
              <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="/">Home</a>
              </li>
              <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="/classes">Classes</a>
              </li>

              <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="/dashboard">Dashboard</a>
              </li>

              <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </div>
          <DrawerFooter>
            <Button>
              <a href="/login">Login</a>
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
