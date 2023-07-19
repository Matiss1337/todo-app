import Link from "next/link"
import { prisma } from "@/db"
import { TodoItem } from "@/components/TodoItem"

function getTodos() {
  return prisma.todo.findMany()
}
async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({ where : {id}, data: {complete}})
  ///update complete to id
}

export default async function Home() {
  // await prisma.todo.create({data : {title: "test", complete: false}})

const todos = await prisma.todo.findMany()
///this finds all todos from prisma db

  return (
    <div>
<header className="flex justify-between items-center mb-4">
  <h1 className="text-2xl">Todos</h1>
  <Link className="border border-slate-100 text-slate-100 px-2 py-1
  rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
</header>

<ul className="pl-4">
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
      ///just pass the todo data by each key
      ///fucking Nice, create element and popultate it by 1 key
    ))}
</ul>
</div>
  )
}
