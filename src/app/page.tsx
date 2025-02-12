import Image from "next/image";

export default function Home() {
  return (
    <main className = "flex items-center justify-center w=screen h=screen">
      <section className = "bg-red-500 w=60 h=60 rounded-full flex items-center overflow-auto bg-red-200 p-2 shadow-lg shadow-red">
        
        <h1 className="rounded-log border-red-600 shadow-lg shadow-grey">Red Heaven</h1>
        <h2 className="">asdasd</h2>
        <Image
          src="/assets/img.jpg"
          alt="Red Heaven Logo"
          width={200}
          height={200}></Image>
      </section>
    </main>
    
  );
}
