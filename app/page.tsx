import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function Home() {
  return (
    <section className="container">
      <div className="grid grid-rows-12 grid-cols-12 gap-1 max-h-screen bg-red-4000">
        <div className="row-span-11 col-span-8 col-start-3 bg-green-2000">
          <div className="flex flex-col-reverse h-full overflow-y-auto">
            {[...Array(6).keys()].map((i) => (
              <div key={i}>
                <div className="flex max-w-xl py-2">
                  <Card className="shadow-none">
                    <CardContent className="pt-4">
                      <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum tempore laudantium, voluptates sapiente
                        repellat nesciunt nisi saepe error veniam numquam dicta
                        libero dolorem iure sint natus at perspiciatis quas
                        deleniti!
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-end max-w-1/2 py-2 ">
                  <Card className="bg-gray-100 shadow-none border-none">
                    <CardContent className="pt-4 ">
                      <p className="text-right ">
                        {i} Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row-start-12 col-span-8 col-start-3 bg-yellow-2000">
          <div className="flex relative bottom-4 bg-white">
            <Textarea placeholder="Ask me anything..." />
            <Button variant={"outline"}>
              <Send /> Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
