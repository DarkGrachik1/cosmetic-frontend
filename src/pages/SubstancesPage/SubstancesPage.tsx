import "./SubstancesPage.sass"
import {useAuth} from "../../hooks/users/useAuth";
import SubstancesList from "./SubstancesList/SubstancesList";
import SubstancesTableWrapper from "./SubstancesTableWrapper/SubstancesTableWrapper";

const SubstancesPage = () => {

    const {is_moderator} = useAuth()

    return (
        <div className="substances-wrapper">

            {!is_moderator && <SubstancesList />}
            {is_moderator && <SubstancesTableWrapper />}

        </div>
    )
}

export default SubstancesPage;