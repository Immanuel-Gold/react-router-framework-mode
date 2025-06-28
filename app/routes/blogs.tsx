import type { Route } from "./+types/blogs";

export const loader = ({ params }: Route.LoaderArgs) => {
  const id = params.id;

  return { id };
};

const blogs = ({ loaderData }: Route.ComponentProps) => {
  return (
    <main className="text-[2.4rem] font-bold p-[22px]">
      Blogs: {loaderData.id}
    </main>
  );
};

export default blogs;
