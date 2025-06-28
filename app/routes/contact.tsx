import type { Route } from "./+types/contact";
import { Form } from "react-router";

export const clientLoader = async () => {
  try {
    const res = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    )
      .json()
      .then((data) => {
        console.log(data);
        return data;
      });

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const clientAction = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        title: "New Post!",
        body: "New Body...",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.status === 201) {
        console.log("Post Created!");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const contact = ({ loaderData }: Route.ComponentProps) => {
  console.log(loaderData);
  return (
    <main className="">
      <h2 className="text-[2.4rem] font-bold p-[22px]"> Contact </h2>

      <section className="flex flex-col gap-y-[18px] p-[16px]">
        <Form method="post">
          <button
            className="py-[8px] px-[12px] bg-black text-white text-[1.4rem] font-bold rounded-md cursor-pointer"
            type="submit"
          >
            Create Post
          </button>
        </Form>
        {loaderData?.map(
          (user: {
            id: string;
            username: string;
            email: string;
            phone: string;
          }) => (
            <section
              className="flex flex-col gap-y-[6px] [&>p]:text-[1.1rem] [&>p]:text-[#222]"
              key={user.id}
            >
              <h2 className="text-[1.8rem] font-bold">{user.username}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </section>
          )
        )}
      </section>
    </main>
  );
};

export default contact;
