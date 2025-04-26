// for custom response we use route.ts file except html response in page.tsx 
// simple export is used in route.ts file 

import { NextResponse } from "next/server"

export const GET=()=>{
  return NextResponse.json({message:"Hello world "})
}