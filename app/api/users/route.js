// import pool from "@/lib/db";
import { connectDB } from "@/db/db.config";
import User from "@/model/user.model";
import { NextResponse } from "next/server";

export async function GET(){
  await connectDB()
  try{
   let users = await User.find({})
   return NextResponse.json({Message:"Users Data", data:users})
  }
  catch(err){
    return NextResponse.json({Message:"Something went wrong", error:err})
  }
}

export async function POST() {
  await connectDB();
  try {
    User.create({
      
    })
  } catch (error) {
    
  }
}