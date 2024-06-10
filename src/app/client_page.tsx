"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import React, { useState } from "react"
import EmailList from "./_components/email"
import { ChatComponent } from "./_components/chats"
import Messages from "./_components/messages"
import MessagesCS from "./_components/messages_cs"
import Tasks from "./_components/tasks"
import Todo from "./_components/todo"
import Image from "next/image"
import Buttons from "./_components/buttons"
import useSWR from "swr"
import { fetcher } from "@/lib/fetcher"

function ClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { data, error, isLoading } = useSWR("/api/email", fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>Loading Chat...</div>

  const searchResults = data.filter(({ sender, subject, preview }: any) => {
    const emailData = `${sender} ${subject} ${preview}`.toLowerCase()
    return emailData.includes(searchTerm.toLowerCase())
  })

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  const commonClasses =
    "flex flex-col items-center gap-2 transform translate-x-16 group-hover:translate-x-0 transition-transform duration-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  return (
    <>
      <div className="fixed bottom-4 right-4 flex gap-4 items-end group">
        <div className={commonClasses}>
          <p className="text-white">Task</p>
          <button className="w-16 h-16">
            <Image
              src="/assets/images/btn-task.png"
              alt="Task"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </button>
        </div>
        <div className={commonClasses}>
          <p className="text-white">Inbox</p>
          <button className="w-16 h-16">
            <Image
              src="/assets/images/btn-inbox.png"
              alt="Inbox"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </button>
        </div>
        <button className="w-16 h-16 z-10">
          <Image
            src="/assets/images/btn-quicks.png"
            alt="Quicks"
            className="w-full h-full"
            width={100}
            height={100}
          />
        </button>
      </div>

      <div id="chat-container" className="fixed bottom-24 w-[768px] right-4">
        <Card className="h-[40rem]">
          <CardContent className="px-8 py-6">
            <div className="relative flex items-center w-full md:grow-0">
              <Input
                type="search"
                placeholder="Search"
                className="w-full rounded-lg pl-10 pr-10 h-8"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Search className="h-4 w-4 text-black absolute right-3" />
            </div>
            <div>
              <EmailList emails={searchResults} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="pt-12 max-w-3xl">
        {/* <Card>
          <CardContent className="px-8 py-6">
            <div className="relative flex items-center w-full md:grow-0">
              <Input
                type="search"
                placeholder="Search"
                className="w-full rounded-lg pl-10 pr-10 h-8"
              />
              <Search className="h-4 w-4 text-black absolute right-3" />
            </div>
            <div>
              <EmailList emails={emails} />
            </div>
          </CardContent>
        </Card> */}

        {/* <div className="pt-16">
          <Messages />
        </div>

        <div className="pt-16">
          <MessagesCS />
        </div>

        <div className="py-16">
          <Tasks />
        </div> */}
      </div>
    </>
  )
}

export default ClientPage
