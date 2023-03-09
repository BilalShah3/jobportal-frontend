import { NextRequest, NextResponse  } from "next/server";

const allowedParams = [
  "keyword",
  "location",
  "page",
  "education",
  "experience",
  "salary",
  "jobType",
  "url",
  "w",
  "q",
  "id",
];

export async function middleware(NextRequest) {
  // const country = req.geo.country

  const url = NextRequest.nextUrl;
  let changed = false;

  url.searchParams.forEach((param, key) => {
    if (!allowedParams.includes(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });

  if (changed) {
    return NextResponse.redirect(url);
  }
}