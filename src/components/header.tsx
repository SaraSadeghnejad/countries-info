import { useNavigate } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const header = () => {
  const router = useNavigate();

  return (
    <header className="sticky text-gray-900 dark:text-white top-0 z-50 bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className=" text-xs sm:text-2xl font-bold text-gray-900 dark:text-white">
            Countries
          </h1>
          <div className="flex space-x-2">
            {/* <ChangeLang/> */}
            <ModeToggle />
            <Button
              className="text-gray-900 dark:text-white bg-white dark:bg-gray-800"
              onClick={() => {
              router("/")
            
              }}
            >
             home
            </Button>
            <Button
              className="text-gray-900 dark:text-white bg-white dark:bg-gray-800"
              onClick={() => {
               
                   router("/dashboard");
              }}
            >
              dashboard
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
