//https://nextjs.org/docs/app/getting-started/updating-data
//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
};


export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })


  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>

      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>


      <TodosGrid todos={todos} />

    </>


  );
}
