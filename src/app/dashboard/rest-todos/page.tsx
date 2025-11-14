//https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'force-dynamic'
export const revalidate = 0

import { getUserSessionServer } from "@/auth/components/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { Metadata } from "next";
import { redirect } from "next/navigation";



export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};

export default async function RestTodosPage() {

//const todos = await prisma.todo.findMany({orderBy:{description: 'asc'}})
  //'use client'
  // useEffect(()=>{
  //     fetch('/api/todos')
  //     .then( resp=>resp.json())
  //     .then(console.log)
  //   //return ()=>{}
  // },[])

const user = await getUserSessionServer();
  if(!user) redirect('/api/auth/signin')

  const todos = await prisma.todo.findMany({ 
    where: {userId: user.id},
    orderBy: { description: 'asc' } 
  })

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo/>
      </div>
      
      
      <TodosGrid todos={todos}/>
    </div>
  );
}