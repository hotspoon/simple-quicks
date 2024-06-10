"use client"
import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { CalendarIcon, Clock, PencilIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

function Tasks() {
  const [date, setDate] = React.useState<Date>()
  return (
    <Card>
      <CardContent className="px-8 pb-6">
        <div className="flex justify-between gap-2 items-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="My Task" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Personal Errands">Personal Errands</SelectItem>
                <SelectItem value="Urgent To-Do">Urgent To-Do</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button>New Task</Button>
        </div>

        <div className="py-[22px]">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {/* Close off Case #012920 - RODRIGUES, Amiguel */}
                <h3 className="font-semibold text-sm">
                  Close off Case #012920 - RODRIGUES, Amiguel
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-sm text-[#EB5757]">2 Days Left</span>
                  <span>12/06/2021</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-12 items-center gap-2 mb-5">
                  <div className="col-span-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="col-span-11">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "max-w-sm flex justify-between text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          {date ? format(date, "PPP") : <span>10/10/2021</span>}
                          <CalendarIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid grid-cols-12 items-center gap-2">
                  <div className="col-span-1">
                    <PencilIcon className="w-5 h-5 text-primary hover:cursor-pointer" />
                  </div>
                  <div className="col-span-11">
                    <p>
                      Closing off this case since this application has been cancelled. No one really
                      understand how this case could possibly be cancelled. The options and the
                      documents within this document were totally a guaranteed for a success!
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}

export default Tasks
