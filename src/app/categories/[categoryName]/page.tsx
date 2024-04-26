type Props = {
  params: { categoryName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ params, searchParams }: Props) {
  const page = typeof searchParams.page === "string" ? searchParams.page : "1";
  return (
    <div>
      <h1>카테고리 목록</h1>
      <h2>카테고리: {params.categoryName}</h2>
      <p>페이지번호: {page}</p>
    </div>
  );
}