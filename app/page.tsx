import PaginationIssue from "./components/PaginationIssue";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <PaginationIssue
      itemCount={100}
      pageSize={10}
      currentPage={+searchParams.page}
    />
  );
}
