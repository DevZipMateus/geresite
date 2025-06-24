
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface DesktopNavigationProps {
  menuItems: MenuItem[];
  scrolled: boolean;
}

const DesktopNavigation = ({ menuItems, scrolled }: DesktopNavigationProps) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-8">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <a
              href={item.href}
              className={cn(
                'text-sm font-medium relative inline-flex items-center transition-colors duration-200',
                'hover:text-primary focus:text-primary',
                scrolled ? 'text-gray-800' : 'text-gray-800',
                'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                'after:bg-primary after:transition-all after:duration-300',
                'hover:after:w-full focus:after:w-full'
              )}
            >
              {item.name}
            </a>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
