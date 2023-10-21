import { Button } from "@/components/ui/button";
import { ChevronRight, Stars } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function IndexPage() {
  return (
    <>
      <section className="bg-[#f6f7f9] rounded-t-xl py-10 -mt-6">
        <div className="container flex flex-col justify-center gap-12 py-4 rounded-lg max-lg:px-2 lg:h-[500px] lg:flex-row">
          <div className="relative w-full h-full overflow-hidden rounded-xl max-lg:aspect-square max-h-[500px] mx-auto">
            <img
              className="object-cover w-full h-full"
              src="./images/image-11.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full h-full px-4 py-6 space-y-6 lg:px-8 text-dark">
            <h2 className="text-2xl font-semibold tracking-tight lg:text-4xl">
              Building Excellence, One Project at a Time.
            </h2>
            <p className="[text-wrap:balance] tracking-wide font-[450] leading-normal">
              Our mission is to manage technical risks with the aim of assisting
              and advising our clients and other stakeholders. We provide
              technical inspection services for all building trades, civil
              engineering and industrial control CND, and regulatory control of
              electrical installations, elevators, lifts, lifting and pressure
              equipment for gas and steam.
            </p>
            {/* stats */}
            <div className="flex relative items-center shadow-lg lg:-ml-[200px] justify-center w-full lg:w-auto px-5 py-3 lg:px-4 lg:py-8 text-center rounded-xl min-w-fit bg-primary-background gap-y-0 gap-x-6 lg:gap-x-4">
              <div className="flex flex-col justify-center w-full space-y-1 text-primary-foreground">
                <div className="text-xl font-bold lg:text-5xl">1260</div>
                <span className="text-sm lg:text-lg font-[450]">Projects</span>
              </div>
              <div className="flex flex-col justify-center w-full space-y-1 text-primary-foreground">
                <div className="text-xl font-bold lg:text-5xl">1000+</div>
                <span className="text-sm lg:text-lg font-[450]">
                  Satisfied clients
                </span>
              </div>
              <div className="flex flex-col justify-center w-full space-y-1 text-primary-foreground">
                <div className="text-xl font-bold lg:text-5xl">4300</div>
                <span className="text-sm lg:text-lg font-[450]">
                  Audits conducted
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 h-96">
        <div className="container flex flex-col w-full h-full px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold font-home lg:text-4xl text-dark">
              Our Services
            </h2>
            <Button
              asChild
              variant={"ghost"}
              className="text-sm rounded-full max-lg:h-8 max-lg:px-3 lg:text-base"
            >
              <Link href={"/our-services"}>
                Discover More
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-sm font-[450] text-muted-foreground">
              We Prodvide Quality Construction Services
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
