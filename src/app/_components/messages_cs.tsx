import { Card, CardContent } from "@/components/ui/card"
import { ArrowBigLeft, ArrowLeft, MoreHorizontal, Terminal, X } from "lucide-react"
import React from "react"
import { ChatComponent } from "./chats"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"

function MessagesCS() {
  const today = format(new Date(), "MMMM dd, yyyy")
  return (
    <Card>
      <CardContent className="px-8 pb-6">
        <div className="grid grid-cols-12 items-center py-2">
          <div className="col-span-1 flex justify-center hover:cursor-pointer">
            <ArrowLeft />
          </div>
          <div className="col-span-10">
            <p className="text-sm text-primary">FastVisa Support</p>
          </div>
          <div className="col-span-1 flex justify-end hover:cursor-pointer">
            <X />
          </div>
        </div>
        <hr />
        <div className="py-6">
          <div>
            <p className="text-[#2F80ED] text-sm pb-2 ml-4 font-bold">FastVisa Support</p>
            <div className="flex">
              <div className="chat chat-start">
                <div className="chat-bubble bg-[#F8F8F8] text-sm text-[#4F4F4F]">
                  Hey there. Welcome to your inbox! Contact us for more information and help about
                  anything! We’ll send you a response as soon as possible.
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-primary">Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-400">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div>
            <p className="text-[#9B51E0] text-sm pb-2 text-right mr-4 font-bold">You</p>
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-primary">Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-400">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="chat chat-end">
                <div className="chat-bubble bg-[#EEDCFF] text-[#4F4F4F] text-sm">
                  <p>No worries. It will be completed ASAP. I’ve asked him yesterday.</p>
                  <p>19:32</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Alert className="bg-[#E9F3FF] border-none">
          <AlertDescription>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <Image
                  src="/assets/images/loading-alert.png"
                  alt="Loading"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-[#4F4F4F] font-bold">
                Please wait while we connect you with one of our team ...
              </p>
            </div>
          </AlertDescription>
        </Alert>

        <div className="mt-auto flex items-center p-2">
          <Input
            className="flex-grow rounded-lg border-2 p-2 mr-2"
            placeholder="Type a new message"
          />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2">Send</button>
        </div>
      </CardContent>
    </Card>
  )
}

export default MessagesCS
