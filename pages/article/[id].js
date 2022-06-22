import { useRouter } from "next/router";
function article() {
  const router = useRouter();
  const { id } = router.query;

  console.log("router", router);
  console.log("id", id);

  return <div>this is an article {id}</div>;
}

export default article;
