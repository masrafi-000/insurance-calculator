const data = [
  {
    id: 1,
    title: "Example 1",
  },
  {
    id: 2,
    title: "Example 2",
  },
  {
    id: 3,
    title: "Example 3",
  },
];

export async function GET() {
  return Response.json(data);
}
