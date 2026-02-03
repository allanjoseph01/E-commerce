import { NextResponse } from "next/server"

export default function proxy(request){
  let age = Number(request.nextUrl.searchParams?.get("age"))
  if(age<18){
    return NextResponse.redirect(new URL("/",request.url))
  }
}
export const config = {
  matcher: ['/product']
}
