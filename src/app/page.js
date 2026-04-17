import Banner from "@/component/Banner/Banner";
import HomePage from "./home/page";


export default function Home() {
  return (
    <div className="flex flex-col flex-1  items-center justify-center  font-sans">
      <main className="flex flex-1 w-full  flex-col items-center justify-between   bg-base-200 dark:bg sm:items-start">
        
       <HomePage></HomePage>
      </main>
    </div>
  );
}
