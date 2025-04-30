import Loader from "@/components/Loader.tsx"
import { DataTable } from "../../components/table/data-table"
import { useLogic } from "./useLogic.tsx"


const HomeContainer = () => {
    const { columnsCell, draftData } = useLogic();

  return (
    <>
      {draftData && draftData?.length > 0 ? (
        <DataTable columns={columnsCell as any} data={draftData} />
      ) : (
        <Loader />
      )}
    </>
  );
}

export default HomeContainer 