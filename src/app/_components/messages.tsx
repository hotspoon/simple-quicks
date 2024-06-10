import { Card, CardContent } from "@/components/ui/card"
import { ArrowBigLeft, ArrowLeft, MoreHorizontal, X } from "lucide-react"
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
import Link from "next/link"

function Messages() {
  const today = format(new Date(), "MMMM dd, yyyy")
  return (
    <Card>
      <CardContent className="px-8 pb-6">
        <div className="grid grid-cols-12 items-center py-2">
          <div className="col-span-1 flex justify-center">
            <Link href="/" className="hover:cursor-pointer">
              <ArrowLeft />
            </Link>
          </div>
          <div className="col-span-10">
            <p className="text-sm text-primary">
              I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </p>
            <p className="text-sm text-[#333333]">3 Participants</p>
          </div>
          <div className="col-span-1 flex justify-end hover:cursor-pointer">
            <X />
          </div>
        </div>
        <hr />
        <div className="py-6">
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
          <p className="date-line py-2">Today {today}</p>
          <div>
            <p className="text-[#E5A443] text-sm pb-2 ml-4 font-bold">Mary Hilda</p>
            <div className="flex">
              <div className="chat chat-start">
                <div className="chat-bubble bg-[#FCEED3] text-sm text-[#4F4F4F]">
                  Hello Obaidullah, I will be your case advisor for case #029290. I have assigned
                  some homework for you to fill. Please keep up with the due dates. Should you have
                  any questions, you can message me anytime. Thanks.
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

          <p className="date-line date-line-new-message py-2 text-[#EB5757]">New Message</p>

          <div>
            <p className="text-[#43B78D] text-sm pb-2 ml-4 font-bold">Mary Hilda</p>
            <div className="flex">
              <div className="chat chat-start">
                <div className="chat-bubble bg-[#D2F2EA] text-sm text-[#4F4F4F]">
                  Hello Obaidullah, I will be your case advisor for case #029290. I have assigned
                  some homework for you to fill. Please keep up with the due dates. Should you have
                  any questions, you can message me anytime. Thanks.
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
        </div>

        <div className="flex justify-center hover:cursor-pointer">
          <div className="bg-[#E9F3FF] px-2 py-1 rounded-md">
            <p className="text-[#2F80ED] font-bold">New Message</p>
          </div>
        </div>

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

export default Messages
