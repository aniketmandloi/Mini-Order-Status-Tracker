import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Welcome to the Mini-Order-Tracker
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          this is the Entry page of the Tracker App
        </p>
        <Button className="bg-primary text-white hover:bg-primary/80">
          Get Started
        </Button>
      </div>
    </div>
  );
}
