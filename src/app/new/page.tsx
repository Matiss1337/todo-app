import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"
import { error } from "console"

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  ///because its a forma nd form has title, 
  /// we can directly get data as variable, cool

  if (typeof title !== "string" || title.length === 0) {
    ("Invalid Title")
  }

  await prisma.todo.create({data: {title, complete: false}})
  redirect("/")
  ///runs the data save and then redirects to main page
}

const page = () => {
  return (
<div>
    <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
    </header>
    <form  action={createTodo} className="flex gap-2 flex-col">
        <input type="text" name="title" placeholder="Title" className="border border-slate-300 bg-transparent
         rounded px-2 py-1 outline-none focus-within:border-slate-100"/>
             <div className="flex gap-2 mt-4 justify-end">
        <Link className="border border-slate-100 text-slate-100 px-2 py-1
        rounded hover:bg-slate-700 focus-within:bg-slate-700
         outline-none" href="..">Cancel</Link>

        <button type="submit" 
        className="border border-slate-100 text-slate-100 px-2 py-1
        rounded hover:bg-slate-700 focus-within:bg-slate-700
         outline-none">Submit</button>
    </div>
    </form>
</div>
  )
}

export default page