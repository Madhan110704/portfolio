import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), 'public', 'resume', 'Madhan_Raj_Resume.pdf');

  if (!fs.existsSync(filePath)) {
    return NextResponse.redirect(new URL('/resume/Madhan_Raj_Resume.pdf', request.url));
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Madhan_Raj_M_Resume.pdf"',
      'Content-Length': fileBuffer.length.toString(),
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
