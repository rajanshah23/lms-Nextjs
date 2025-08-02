import { deleteCategory } from "../categoryContoller"

export async function DELETE(req:Request,{params}:{params:{id:string}}) {
  const {id} = await params 
  console.log(id)
  return deleteCategory(id)
}