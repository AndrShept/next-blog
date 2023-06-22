import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (req ,{ params: {id}}) => {
   
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse('Database ERROR', { status: 500 });
  }
};


export const DELETE = async (req ,{ params: {id}}) => {
  
  try {
    await connect();
     await Post.findByIdAndDelete(id);
    console.log(id)
    return new NextResponse('Post success deleted', { status: 200 });
  } catch (error) {
    return new NextResponse('Database ERROR', { status: 500 });
  }
};
