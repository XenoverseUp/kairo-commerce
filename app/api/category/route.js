export function GET() {
  return new Response(
    JSON.stringify([
      "all",
      "electric",
      "acoustic",
      "vintage",
      "bass",
      "12-strings",
      "accessories",
      "headphones",
    ]),
    { status: 200 }
  )
}
