//https://nextjs.org/docs/app/api-reference/file-conventions/route
//https://www.prisma.io/docs/orm/prisma-client/queries/pagination
//2fc336e9-418a-4aa8-90d7-fd9f91b69f5c
import { getUserSessionServer } from '@/auth/components/actions/auth-actions';
import { Todo } from '@/generated/prisma/client';
import prisma from '@/lib/prisma';
//import { Todo } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';

const getTodo = async( id: string ):Promise<Todo | null> => {

  const user =await getUserSessionServer()
  
    if(!user){
      return null;
    }

  const todo = await prisma.todo.findFirst({ where: { id } });

  if(todo?.userId !== user.id){
    return null;
  }

  return todo;
}


export async function GET(_req: NextRequest, ctx: RouteContext<'/api/todos/[id]'>) {
  
  /*const { id } = await ctx.params
  
  const todo = await prisma.todo.findFirst({where:{id}})
  */

  const todo = await getTodo((await ctx.params).id);
/*
  if (!todo) {
    return Response.json({message:`todo con id: '${id}'  no existe`},{status:404})
  }
*/

if (!todo) {
    return Response.json({message:`todo con id: '${(await ctx.params).id}'  no existe`},{status:404})
  }

  return Response.json(todo)
}
  


const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
})


export async function PUT(_req: NextRequest, ctx: RouteContext<'/api/todos/[id]'>) {
  const { id } = await ctx.params
 
  const todo = await prisma.todo.findFirst({where:{id}})
  
  if (!todo) {
    return Response.json({message:`todo con id: '${id}'  no existe`},{status:404})
  }

//const body = await _req.json();

try {

  const {complete,description,...rest} = await putSchema.validate(await _req.json()); 

  const updatedTodo = await prisma.todo.update({
    where: {id},
    //data: {...body}
    data: {complete,description}
  })


  return Response.json(updatedTodo)
  
} catch (error) {
  return NextResponse.json (error,{status:400})
}



}

