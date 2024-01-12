import {useSubstances} from "../../../hooks/substances/useSubstances";
import {useQuery} from "react-query";
import SubstancesTable from "./SubstancesTable/SubstancesTable";

const SubstancesTableWrapper = () => {

    const {searchSubstances} = useSubstances()

    const { isLoading, data, isSuccess, refetch } = useQuery(
        ["substances"],
        () => searchSubstances(),
        {
            keepPreviousData: true,
        }
    )

    if (isLoading) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <SubstancesTable isLoading={isLoading} data={data} isSuccess={isSuccess} refetch={refetch} />
        </div>
    )
}

export default SubstancesTableWrapper