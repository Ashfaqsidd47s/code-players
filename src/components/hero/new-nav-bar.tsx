import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function NewNavBar() {
  return (
    <div className=" fixed w-full top-10 z-50">
        <div className=" px-6 flex flex-wrap items-center justify-between gap-4 mx-auto w-full max-w-7xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-semibold shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              Code Players
            </div>

            <div className="hidden md:flex items-center gap-2 rounded-full bg-background px-2 py-2 shadow-sm">
              {['Features', 'Program', 'Reviews', 'FAQ', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-primary/10 hover:text-foreground"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <Button className="rounded-full px-5 ">
              Start Project
            </Button>
        </div>
          </div>
  )
}
