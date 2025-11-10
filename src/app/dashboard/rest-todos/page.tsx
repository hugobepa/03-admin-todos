//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { Metadata } from "next";



export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};

export default async function RestTodosPage() {

const todos = await prisma.todo.findMany({orderBy:{description: 'asc'}})
  //'use client'
  // useEffect(()=>{
  //     fetch('/api/todos')
  //     .then( resp=>resp.json())
  //     .then(console.log)
  //   //return ()=>{}
  // },[])

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo/>
      </div>
      
      
      <TodosGrid todos={todos}/>
    </div>
  );
}